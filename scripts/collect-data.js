const { Octokit } = require('@octokit/rest');

async function collectRepositoryData(owner, repo, daysBack = 7) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const since = new Date();
  since.setDate(since.getDate() - daysBack);
  const sinceISO = since.toISOString();

  console.log(`Collecting data for ${owner}/${repo} since ${sinceISO}`);

  const data = {
    repository: `${owner}/${repo}`,
    dateRange: {
      from: sinceISO,
      to: new Date().toISOString()
    },
    commits: [],
    pullRequests: [],
    issues: [],
    discussions: []
  };

  try {
    // Fetch commits
    console.log('Fetching commits...');
    const commits = await octokit.paginate(octokit.rest.repos.listCommits, {
      owner,
      repo,
      since: sinceISO,
      per_page: 100
    });

    data.commits = commits.map(commit => ({
      sha: commit.sha.substring(0, 7),
      author: commit.commit.author.name,
      message: commit.commit.message.split('\n')[0],
      url: commit.html_url,
      date: commit.commit.author.date
    }));

    console.log(`Found ${data.commits.length} commits`);

    // Fetch pull requests (opened, updated, or merged in the time period)
    console.log('Fetching pull requests...');
    const [openPRs, closedPRs] = await Promise.all([
      octokit.paginate(octokit.rest.pulls.list, {
        owner,
        repo,
        state: 'open',
        sort: 'updated',
        direction: 'desc',
        per_page: 100
      }),
      octokit.paginate(octokit.rest.pulls.list, {
        owner,
        repo,
        state: 'closed',
        sort: 'updated',
        direction: 'desc',
        per_page: 100
      })
    ]);

    const allPRs = [...openPRs, ...closedPRs].filter(pr => {
      const updated = new Date(pr.updated_at);
      return updated >= since;
    });

    data.pullRequests = allPRs.map(pr => ({
      number: pr.number,
      title: pr.title,
      author: pr.user.login,
      state: pr.state,
      merged: pr.merged_at !== null,
      url: pr.html_url,
      created_at: pr.created_at,
      updated_at: pr.updated_at,
      merged_at: pr.merged_at,
      comments: pr.comments
    }));

    console.log(`Found ${data.pullRequests.length} pull requests`);

    // Fetch issues (opened, updated, or closed in the time period)
    console.log('Fetching issues...');
    const [openIssues, closedIssues] = await Promise.all([
      octokit.paginate(octokit.rest.issues.listForRepo, {
        owner,
        repo,
        state: 'open',
        since: sinceISO,
        per_page: 100
      }),
      octokit.paginate(octokit.rest.issues.listForRepo, {
        owner,
        repo,
        state: 'closed',
        since: sinceISO,
        per_page: 100
      })
    ]);

    // Filter out pull requests from issues (GitHub API returns both)
    const allIssues = [...openIssues, ...closedIssues].filter(issue => !issue.pull_request);

    data.issues = allIssues.map(issue => ({
      number: issue.number,
      title: issue.title,
      author: issue.user.login,
      state: issue.state,
      url: issue.html_url,
      created_at: issue.created_at,
      updated_at: issue.updated_at,
      closed_at: issue.closed_at,
      comments: issue.comments,
      labels: issue.labels.map(l => l.name)
    }));

    console.log(`Found ${data.issues.length} issues`);

    // Try to fetch discussions (may not be enabled)
    try {
      console.log('Fetching discussions...');
      const discussionsQuery = `
        query($owner: String!, $repo: String!, $since: DateTime!) {
          repository(owner: $owner, name: $repo) {
            discussions(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                number
                title
                author {
                  login
                }
                url
                createdAt
                updatedAt
                comments {
                  totalCount
                }
              }
            }
          }
        }
      `;

      const discussionsResult = await octokit.graphql(discussionsQuery, {
        owner,
        repo,
        since: sinceISO
      });

      if (discussionsResult.repository.discussions) {
        const recentDiscussions = discussionsResult.repository.discussions.nodes.filter(d => {
          const updated = new Date(d.updatedAt);
          return updated >= since;
        });

        data.discussions = recentDiscussions.map(d => ({
          number: d.number,
          title: d.title,
          author: d.author.login,
          url: d.url,
          created_at: d.createdAt,
          updated_at: d.updatedAt,
          comments: d.comments.totalCount
        }));

        console.log(`Found ${data.discussions.length} discussions`);
      }
    } catch (error) {
      console.log('Discussions not available or error fetching:', error.message);
    }

  } catch (error) {
    console.error('Error collecting data:', error);
    throw error;
  }

  return data;
}

module.exports = { collectRepositoryData };
