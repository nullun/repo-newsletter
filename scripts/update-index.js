const fs = require('fs');
const path = require('path');

function getAllNewsletters(newslettersDir = 'newsletters') {
  const newsletters = [];
  
  if (!fs.existsSync(newslettersDir)) {
    return newsletters;
  }
  
  const years = fs.readdirSync(newslettersDir)
    .filter(f => fs.statSync(path.join(newslettersDir, f)).isDirectory())
    .sort((a, b) => b.localeCompare(a)); // Newest first
  
  for (const year of years) {
    const yearPath = path.join(newslettersDir, year);
    const months = fs.readdirSync(yearPath)
      .filter(f => fs.statSync(path.join(yearPath, f)).isDirectory())
      .sort((a, b) => b.localeCompare(a)); // Newest first
    
    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      const files = fs.readdirSync(monthPath)
        .filter(f => f.endsWith('.md'))
        .sort((a, b) => b.localeCompare(a)); // Newest first
      
      for (const file of files) {
        const filepath = path.join(monthPath, file);
        const date = file.replace('newsletter-', '').replace('.md', '');
        newsletters.push({
          year,
          month,
          date,
          filename: file,
          path: filepath
        });
      }
    }
  }
  
  return newsletters;
}

function generateIndexHTML(newsletters) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>algorand/go-algorand Weekly Newsletter</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292f;
      background-color: #ffffff;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    header {
      border-bottom: 1px solid #d0d7de;
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      color: #57606a;
      font-size: 1.1rem;
    }
    
    .stats {
      display: flex;
      gap: 2rem;
      margin: 1rem 0;
      padding: 1rem;
      background-color: #f6f8fa;
      border-radius: 6px;
    }
    
    .stat {
      font-size: 0.9rem;
      color: #57606a;
    }
    
    .stat strong {
      color: #24292f;
      font-size: 1.2rem;
      display: block;
    }
    
    .year-section {
      margin-bottom: 2rem;
    }
    
    .year-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #d0d7de;
    }
    
    .month-section {
      margin-bottom: 1.5rem;
      margin-left: 1rem;
    }
    
    .month-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #0969da;
      margin-bottom: 0.75rem;
    }
    
    .newsletter-list {
      list-style: none;
      margin-left: 1rem;
    }
    
    .newsletter-item {
      padding: 0.5rem 0;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .newsletter-item:last-child {
      border-bottom: none;
    }
    
    .newsletter-link {
      color: #0969da;
      text-decoration: none;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .newsletter-link:hover {
      text-decoration: underline;
    }
    
    .newsletter-date {
      font-weight: 500;
    }
    
    .icon {
      opacity: 0.6;
    }
    
    footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid #d0d7de;
      color: #57606a;
      font-size: 0.9rem;
      text-align: center;
    }
    
    .github-link {
      color: #0969da;
      text-decoration: none;
    }
    
    .github-link:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      body {
        padding: 1rem;
      }
      
      h1 {
        font-size: 1.5rem;
      }
      
      .stats {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>📰 algorand/go-algorand Weekly Newsletter</h1>
    <p class="subtitle">Automated weekly summaries of repository activity</p>
    <div class="stats">
      <div class="stat">
        <strong>${newsletters.length}</strong>
        Total Newsletters
      </div>
      <div class="stat">
        <strong>Every Monday</strong>
        Publication Schedule
      </div>
      <div class="stat">
        <strong>7 Days</strong>
        Coverage Period
      </div>
    </div>
  </header>
  
  <main>
`;

  if (newsletters.length === 0) {
    html += `    <p style="color: #57606a; font-style: italic;">No newsletters published yet. Check back soon!</p>\n`;
  } else {
    // Group by year
    const byYear = {};
    newsletters.forEach(n => {
      if (!byYear[n.year]) byYear[n.year] = {};
      if (!byYear[n.year][n.month]) byYear[n.year][n.month] = [];
      byYear[n.year][n.month].push(n);
    });
    
    const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));
    
    for (const year of years) {
      html += `    <div class="year-section">\n`;
      html += `      <h2 class="year-title">${year}</h2>\n`;
      
      const months = Object.keys(byYear[year]).sort((a, b) => b.localeCompare(a));
      
      for (const month of months) {
        const monthName = monthNames[parseInt(month) - 1];
        html += `      <div class="month-section">\n`;
        html += `        <h3 class="month-title">${monthName}</h3>\n`;
        html += `        <ul class="newsletter-list">\n`;
        
        for (const newsletter of byYear[year][month]) {
          html += `          <li class="newsletter-item">\n`;
          html += `            <a href="${newsletter.path}" class="newsletter-link">\n`;
          html += `              <span class="icon">📄</span>\n`;
          html += `              <span class="newsletter-date">${newsletter.date}</span>\n`;
          html += `            </a>\n`;
          html += `          </li>\n`;
        }
        
        html += `        </ul>\n`;
        html += `      </div>\n`;
      }
      
      html += `    </div>\n`;
    }
  }

  html += `  </main>
  
  <footer>
    <p>
      Generated automatically by 
      <a href="https://github.com/nullun/repo-newsletter" class="github-link">repo-newsletter</a>
      | View on 
      <a href="https://github.com/algorand/go-algorand" class="github-link">GitHub</a>
    </p>
  </footer>
</body>
</html>
`;

  return html;
}

function main() {
  console.log('Updating index.html...');
  
  const newsletters = getAllNewsletters();
  console.log(`Found ${newsletters.length} newsletters`);
  
  const html = generateIndexHTML(newsletters);
  fs.writeFileSync('index.html', html);
  
  console.log('✅ index.html updated successfully');
}

main();
