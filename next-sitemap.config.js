/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.inthra.io',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  // Additional configuration for better sitemap generation
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,
  // Explicitly include routes for single-page application
  additionalPaths: async (config) => {
    const result = [];
    
    // Main page
    result.push({
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });
    
    // Add any other important routes you want to include
    // result.push({
    //   loc: '/about',
    //   changefreq: 'monthly',
    //   priority: 0.8,
    //   lastmod: new Date().toISOString(),
    // });
    
    return result;
  },
  // Transform function to ensure proper URL generation
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', 
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://www.inthra.io/sitemap.xml',
    ],
  },
}