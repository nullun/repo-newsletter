const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

async function generateSummaryWithAI(data) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('No GITHUB_TOKEN found, skipping AI summary');
    return null;
  }

  try {
    const client = new OpenAI({
      baseURL: 'https://models.inference.ai.azure.com',
      apiKey: token,
    });

    const prompt = `You are creating an executive summary for a weekly GitHub repository newsletter. 
The repository is ${data.repository}.

Here's the activity data for the past week:

Commits: ${data.commits.length}
Pull Requests: ${data.pullRequests.length} (${data.pullRequests.filter(pr => pr.merged).length} merged)
Issues: ${data.issues.length} (${data.issues.filter(i => i.state === 'closed').length} closed)
Discussions: ${data.discussions.length}

Key Pull Requests:
${data.pullRequests.slice(0, 5).map(pr => `- #${pr.number}: ${pr.title} (${pr.state}${pr.merged ? ', merged' : ''})`).join('\n')}

Key Issues:
${data.issues.slice(0, 5).map(i => `- #${i.number}: ${i.title} (${i.state})`).join('\n')}

Write a concise 2-3 paragraph executive summary highlighting the most important developments, trends, and activities. 
Focus on what developers and users should know. Use a friendly but professional tone.`;

    const response = await client.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes clear, engaging summaries of software development activity.' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.warn('Failed to generate AI summary:', error.message);
    return null;
  }
}

function formatNewsletterMarkdown(data, aiSummary) {
  const fromDate = new Date(data.dateRange.from);
  const toDate = new Date(data.dateRange.to);
  
  const formatDate = (date) => date.toISOString().split('T')[0];
  
  let markdown = `# ${data.repository} Weekly Newsletter\n\n`;
  markdown += `**Week of ${formatDate(fromDate)} to ${formatDate(toDate)}**\n\n`;
  
  // Executive Summary
  if (aiSummary) {
    markdown += `## 📋 Executive Summary\n\n${aiSummary}\n\n`;
  }
  
  // Statistics
  markdown += `## 📊 Weekly Statistics\n\n`;
  markdown += `- **Commits**: ${data.commits.length}\n`;
  markdown += `- **Pull Requests**: ${data.pullRequests.length} (${data.pullRequests.filter(pr => pr.merged).length} merged)\n`;
  markdown += `- **Issues**: ${data.issues.length} (${data.issues.filter(i => i.state === 'closed').length} closed)\n`;
  markdown += `- **Discussions**: ${data.discussions.length}\n\n`;
  
  // Commits
  if (data.commits.length > 0) {
    markdown += `## 💻 Commits (${data.commits.length})\n\n`;
    
    const topCommits = data.commits.slice(0, 20);
    for (const commit of topCommits) {
      markdown += `- [\`${commit.sha}\`](${commit.url}) ${commit.message} - *${commit.author}*\n`;
    }
    
    if (data.commits.length > 20) {
      markdown += `\n*...and ${data.commits.length - 20} more commits*\n`;
    }
    markdown += '\n';
  }
  
  // Pull Requests
  if (data.pullRequests.length > 0) {
    markdown += `## 🔀 Pull Requests (${data.pullRequests.length})\n\n`;
    
    const merged = data.pullRequests.filter(pr => pr.merged);
    const opened = data.pullRequests.filter(pr => !pr.merged && pr.state === 'open');
    const closed = data.pullRequests.filter(pr => !pr.merged && pr.state === 'closed');
    
    if (merged.length > 0) {
      markdown += `### Merged (${merged.length})\n\n`;
      for (const pr of merged) {
        markdown += `- [#${pr.number}](${pr.url}) ${pr.title} - *@${pr.author}*\n`;
      }
      markdown += '\n';
    }
    
    if (opened.length > 0) {
      markdown += `### Opened (${opened.length})\n\n`;
      for (const pr of opened) {
        markdown += `- [#${pr.number}](${pr.url}) ${pr.title} - *@${pr.author}*\n`;
      }
      markdown += '\n';
    }
    
    if (closed.length > 0) {
      markdown += `### Closed (${closed.length})\n\n`;
      for (const pr of closed) {
        markdown += `- [#${pr.number}](${pr.url}) ${pr.title} - *@${pr.author}*\n`;
      }
      markdown += '\n';
    }
  }
  
  // Issues
  if (data.issues.length > 0) {
    markdown += `## 🐛 Issues (${data.issues.length})\n\n`;
    
    const opened = data.issues.filter(i => {
      const created = new Date(i.created_at);
      const since = new Date(data.dateRange.from);
      return created >= since;
    });
    
    const closed = data.issues.filter(i => i.state === 'closed' && i.closed_at);
    
    if (opened.length > 0) {
      markdown += `### Opened (${opened.length})\n\n`;
      for (const issue of opened) {
        const labels = issue.labels.length > 0 ? ` \`${issue.labels.join('`, `')}\`` : '';
        markdown += `- [#${issue.number}](${issue.url}) ${issue.title}${labels} - *@${issue.author}*\n`;
      }
      markdown += '\n';
    }
    
    if (closed.length > 0) {
      markdown += `### Closed (${closed.length})\n\n`;
      for (const issue of closed) {
        const labels = issue.labels.length > 0 ? ` \`${issue.labels.join('`, `')}\`` : '';
        markdown += `- [#${issue.number}](${issue.url}) ${issue.title}${labels} - *@${issue.author}*\n`;
      }
      markdown += '\n';
    }
  }
  
  // Discussions
  if (data.discussions.length > 0) {
    markdown += `## 💬 Discussions (${data.discussions.length})\n\n`;
    for (const discussion of data.discussions) {
      markdown += `- [#${discussion.number}](${discussion.url}) ${discussion.title} (${discussion.comments} comments) - *@${discussion.author}*\n`;
    }
    markdown += '\n';
  }
  
  markdown += `---\n\n`;
  markdown += `*Generated on ${new Date().toISOString().split('T')[0]}*\n`;
  
  return markdown;
}

function saveNewsletter(markdown, outputDir = 'newsletters') {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = now.toISOString().split('T')[0];
  
  const dir = path.join(outputDir, String(year), month);
  fs.mkdirSync(dir, { recursive: true });
  
  const filename = `newsletter-${date}.md`;
  const filepath = path.join(dir, filename);
  
  fs.writeFileSync(filepath, markdown);
  console.log(`Newsletter saved to: ${filepath}`);
  
  return filepath;
}

module.exports = {
  generateSummaryWithAI,
  formatNewsletterMarkdown,
  saveNewsletter
};
