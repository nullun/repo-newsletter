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

Pull Requests: ${data.pullRequests.length} (${data.pullRequests.filter(pr => pr.merged).length} merged)
Issues: ${data.issues.length} (${data.issues.filter(i => i.state === 'closed').length} closed)
Discussions: ${data.discussions.length}

Key Pull Requests:
${data.pullRequests.slice(0, 5).map(pr => `- #${pr.number}: ${pr.title} (${pr.state}${pr.merged ? ', merged' : ''})`).join('\n')}

Key Issues:
${data.issues.slice(0, 5).map(i => `- #${i.number}: ${i.title} (${i.state})`).join('\n')}

Write a SINGLE PARAGRAPH executive summary highlighting ONLY the most important developments and activities. 
Focus on what developers and users should know. Use a friendly but professional tone. Keep it concise.`;

    const response = await client.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes clear, engaging summaries of software development activity.' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4o-mini',
      temperature: 0.7,
      max_tokens: 300
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.warn('Failed to generate AI summary:', error.message);
    return null;
  }
}

async function generateItemExplanations(items, type, token) {
  if (!token || items.length === 0) {
    return items.map(() => null);
  }

  try {
    const client = new OpenAI({
      baseURL: 'https://models.inference.ai.azure.com',
      apiKey: token,
    });

    const itemDescriptions = items.map(item => {
      if (type === 'pr') {
        return `#${item.number}: ${item.title} (${item.state}${item.merged ? ', merged' : ''})`;
      } else if (type === 'issue') {
        return `#${item.number}: ${item.title} (${item.state})`;
      } else if (type === 'discussion') {
        return `#${item.number}: ${item.title} (${item.comments} comments)`;
      }
    }).join('\n');

    const prompt = `For each ${type === 'pr' ? 'pull request' : type} below, provide a 1-2 sentence explanation of what it means for developers/users. Focus on the impact and relevance. If an item is trivial (like fixing typos, minor formatting, or documentation tweaks), respond with "SKIP" for that item.

${itemDescriptions}

Respond with one explanation per line, in the same order. Use "SKIP" for trivial items.`;

    const response = await client.chat.completions.create({
      messages: [
        { role: 'system', content: 'You provide clear, concise explanations of software changes.' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4o-mini',
      temperature: 0.5,
      max_tokens: 1000
    });

    const explanations = response.choices[0].message.content.split('\n').filter(line => line.trim());
    return explanations.map(exp => exp.trim() === 'SKIP' ? null : exp);
  } catch (error) {
    console.warn(`Failed to generate ${type} explanations:`, error.message);
    return items.map(() => null);
  }
}

async function formatNewsletterMarkdown(data, aiSummary) {
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
  markdown += `- **Pull Requests**: ${data.pullRequests.length} (${data.pullRequests.filter(pr => pr.merged).length} merged)\n`;
  markdown += `- **Issues**: ${data.issues.length} (${data.issues.filter(i => i.state === 'closed').length} closed)\n`;
  markdown += `- **Discussions**: ${data.discussions.length}\n\n`;
  
  const token = process.env.GITHUB_TOKEN;
  
  // Pull Requests with explanations
  if (data.pullRequests.length > 0) {
    const merged = data.pullRequests.filter(pr => pr.merged);
    const opened = data.pullRequests.filter(pr => !pr.merged && pr.state === 'open');
    const closed = data.pullRequests.filter(pr => !pr.merged && pr.state === 'closed');
    
    const allPRs = [...merged, ...opened, ...closed];
    console.log('Generating PR explanations...');
    const explanations = await generateItemExplanations(allPRs, 'pr', token);
    
    const relevantPRs = allPRs.filter((_, idx) => explanations[idx] !== null);
    const relevantExplanations = explanations.filter(exp => exp !== null);
    
    if (relevantPRs.length > 0) {
      markdown += `## 🔀 Pull Requests\n\n`;
      
      for (let i = 0; i < relevantPRs.length; i++) {
        const pr = relevantPRs[i];
        const explanation = relevantExplanations[i];
        const status = pr.merged ? '✅ Merged' : pr.state === 'open' ? '🔄 Open' : '❌ Closed';
        markdown += `### [#${pr.number}](${pr.url}) ${pr.title}\n`;
        markdown += `**${status}** | *@${pr.author}*\n\n`;
        markdown += `${explanation}\n\n`;
      }
    }
  }
  
  // Issues with explanations
  if (data.issues.length > 0) {
    const opened = data.issues.filter(i => {
      const created = new Date(i.created_at);
      const since = new Date(data.dateRange.from);
      return created >= since;
    });
    
    const closed = data.issues.filter(i => i.state === 'closed' && i.closed_at);
    const allIssues = [...opened, ...closed];
    
    console.log('Generating issue explanations...');
    const explanations = await generateItemExplanations(allIssues, 'issue', token);
    
    const relevantIssues = allIssues.filter((_, idx) => explanations[idx] !== null);
    const relevantExplanations = explanations.filter(exp => exp !== null);
    
    if (relevantIssues.length > 0) {
      markdown += `## 🐛 Issues\n\n`;
      
      for (let i = 0; i < relevantIssues.length; i++) {
        const issue = relevantIssues[i];
        const explanation = relevantExplanations[i];
        const status = issue.state === 'closed' ? '✅ Closed' : '🔄 Open';
        const labels = issue.labels.length > 0 ? ` | \`${issue.labels.join('`, `')}\`` : '';
        markdown += `### [#${issue.number}](${issue.url}) ${issue.title}\n`;
        markdown += `**${status}** | *@${issue.author}*${labels}\n\n`;
        markdown += `${explanation}\n\n`;
      }
    }
  }
  
  // Discussions with explanations
  if (data.discussions.length > 0) {
    console.log('Generating discussion explanations...');
    const explanations = await generateItemExplanations(data.discussions, 'discussion', token);
    
    const relevantDiscussions = data.discussions.filter((_, idx) => explanations[idx] !== null);
    const relevantExplanations = explanations.filter(exp => exp !== null);
    
    if (relevantDiscussions.length > 0) {
      markdown += `## 💬 Discussions\n\n`;
      
      for (let i = 0; i < relevantDiscussions.length; i++) {
        const discussion = relevantDiscussions[i];
        const explanation = relevantExplanations[i];
        markdown += `### [#${discussion.number}](${discussion.url}) ${discussion.title}\n`;
        markdown += `**${discussion.comments} comments** | *@${discussion.author}*\n\n`;
        markdown += `${explanation}\n\n`;
      }
    }
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
  generateItemExplanations,
  formatNewsletterMarkdown,
  saveNewsletter
};
