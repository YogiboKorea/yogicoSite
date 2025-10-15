/** next-sitemap.config.js */
module.exports = {
  // 사이트 URL을 명확히 지정
  siteUrl: process.env.SITE_URL || 'https://yogico.kr', 
  
  // 자주 업데이트되는 사이트이므로 'daily'가 적합
  changefreq: 'daily',
  
  // 페이지 중요도. 0.7은 일반적인 값으로 적절합니다.
  priority: 0.7,
  
  // robots.txt를 자동으로 생성합니다.
  generateRobotsTxt: true,
  
  // 5만 개가 넘는 페이지가 없다면 기본값으로 두거나 삭제해도 됩니다.
  sitemapSize: 50000, 
  
  // 관리자 페이지나 API 등 검색 로봇이 접근하면 안 되는 경로를 제외합니다.
  exclude: ['/admin/*', '/api/*'],
  
  robotsTxtOptions: {
      policies: [
          { userAgent: '*', allow: '/' }
      ],
      // **중요: RSS 피드 주소를 여기에 추가하여 검색 로봇에 알립니다.**
      additionalSitemaps: [
          'https://yogico.kr/rss.xml',
          // 만약 뉴스 페이지가 정적이지 않다면 추가할 수 있는 동적 사이트맵
          'https://yogico.kr/sitemap.xml'
      ]
  },
};