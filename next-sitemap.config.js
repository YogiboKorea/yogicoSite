/** next-sitemap.config.js */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yogico.kr', // 배포 URL (프로토콜 포함)
    changefreq: 'daily',
    priority: 0.7,
    generateRobotsTxt: true,        // robots.txt 자동 생성
    sitemapSize: 50000,            // 자동 분할(대형 사이트용)
    exclude: ['/admin/*', '/api/*', '/secret-page'], // 포함하면 안 될 경로
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }
      ],
      additionalSitemaps: [
        // 만약 다른 sitemap (예: /server-sitemap.xml) 있다면 추가
        // 'https://example.com/server-sitemap.xml'
      ]
    },
    // optional: 동적 링크를 추가하고 싶을 때 transform 사용 가능 (아래 예시 참고)
  };
  