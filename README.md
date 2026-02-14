# 📰 Repository Newsletter Generator

Automated weekly newsletter system that tracks activity in the [algorand/go-algorand](https://github.com/algorand/go-algorand) repository and generates AI-powered summaries.

## 🚀 Features

- **Automated Weekly Generation**: Runs every Monday at 9 AM UTC via GitHub Actions
- **Comprehensive Activity Tracking**: 
  - Commits from the past 7 days
  - Pull requests (opened, merged, closed)
  - Issues (opened, closed, updated)
  - Discussions (if enabled)
- **AI-Powered Summaries**: Uses GitHub Models API (GPT-4o-mini) for natural language summaries
- **GitHub Pages Integration**: Automatically publishes to GitHub Pages with a browsable index
- **Clean Organization**: Newsletters organized by year/month structure

## 📋 Newsletter Structure

Each newsletter includes:
- Executive summary (AI-generated)
- Weekly statistics (commits, PRs, issues, discussions)
- Detailed commit log
- Pull request sections (merged, opened, closed)
- Issue sections (opened, closed)
- Discussion activity

## 🛠️ Setup

### Prerequisites
- Node.js 20+
- GitHub repository with Actions enabled
- GitHub Pages enabled (Settings → Pages → Source: GitHub Actions)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nullun/repo-newsletter.git
   cd repo-newsletter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure GitHub Actions permissions:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Enable "Allow GitHub Actions to create and approve pull requests"

4. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

### Manual Testing

Generate a newsletter manually:

```bash
export GITHUB_TOKEN=your_github_token
npm run generate
```

## 📁 Project Structure

```
repo-newsletter/
├── .github/
│   └── workflows/
│       └── generate-newsletter.yml    # Weekly automation workflow
├── scripts/
│   ├── collect-data.js               # GitHub API data collection
│   ├── newsletter-generator.js       # Markdown formatting & AI
│   ├── generate-newsletter.js        # Main entry point
│   └── update-index.js              # HTML index generator
├── newsletters/                      # Generated newsletters
│   └── YYYY/
│       └── MM/
│           └── newsletter-YYYY-MM-DD.md
├── index.html                       # GitHub Pages landing page
├── package.json
└── README.md
```

## ⚙️ Configuration

Edit `.github/workflows/generate-newsletter.yml` to customize:

- **Schedule**: Modify the cron expression (default: `0 9 * * 1`)
- **Target Repository**: Change `REPO_OWNER` and `REPO_NAME` environment variables
- **Lookback Period**: Adjust `DAYS_BACK` (default: 7 days)

## 🔄 Workflow

1. **Scheduled Trigger**: GitHub Actions runs every Monday
2. **Data Collection**: Fetches repository activity via GitHub API
3. **AI Summary**: Generates executive summary using GitHub Models API
4. **Format Newsletter**: Creates structured markdown document
5. **Commit**: Automatically commits newsletter to repository
6. **Deploy**: Updates GitHub Pages with new content

## 📊 GitHub Pages

View published newsletters at: `https://nullun.github.io/repo-newsletter/`

The index page provides:
- Total newsletter count
- Publication schedule information
- Organized list of all newsletters by year/month
- Direct links to each newsletter

## 🧪 Testing

Trigger a manual workflow run:
1. Go to Actions tab in GitHub
2. Select "Generate Weekly Newsletter"
3. Click "Run workflow"
4. Select branch and run

## 📝 License

ISC

## 🤝 Contributing

This is an automated newsletter system. For issues or improvements, please open an issue or pull request.

---

*Generated with ❤️ using GitHub Actions and GitHub Models API*
