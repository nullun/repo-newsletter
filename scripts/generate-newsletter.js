const { collectRepositoryData } = require('./collect-data');
const { generateSummaryWithAI, formatNewsletterMarkdown, saveNewsletter } = require('./newsletter-generator');

async function main() {
  const owner = process.env.REPO_OWNER || 'algorand';
  const repo = process.env.REPO_NAME || 'go-algorand';
  const daysBack = parseInt(process.env.DAYS_BACK || '7', 10);

  console.log('Starting newsletter generation...');
  console.log(`Repository: ${owner}/${repo}`);
  console.log(`Looking back: ${daysBack} days\n`);

  try {
    // Collect data
    const data = await collectRepositoryData(owner, repo, daysBack);
    console.log('\nData collection complete!\n');

    // Generate AI summary
    console.log('Generating AI summary...');
    const aiSummary = await generateSummaryWithAI(data);
    if (aiSummary) {
      console.log('AI summary generated successfully\n');
    }

    // Format newsletter
    console.log('Formatting newsletter...');
    const markdown = formatNewsletterMarkdown(data, aiSummary);

    // Save newsletter
    const filepath = saveNewsletter(markdown);
    console.log('\n✅ Newsletter generation complete!');
    console.log(`📄 File: ${filepath}`);

  } catch (error) {
    console.error('❌ Error generating newsletter:', error);
    process.exit(1);
  }
}

main();
