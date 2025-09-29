const { writeFileSync } = require('fs');
const { join } = require('path');

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://www.inthra.io';
  const currentDate = new Date().toISOString();
  
  const pages = [
    {
      url: '/',
      priority: '1.0',
      changefreq: 'daily',
      lastmod: currentDate
    }
    // Add more pages here as your site grows:
    // {
    //   url: '/about',
    //   priority: '0.8',
    //   changefreq: 'monthly',
    //   lastmod: currentDate
    // }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://www.inthra.io/sitemap.xml`;

  writeFileSync(join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt generated successfully!');
};

// Run both generation functions
generateSitemap();
generateRobotsTxt();