/** @type {import('next').NextConfig} */
const nextConfig = {
  // 301 리디렉션 규칙을 추가합니다.
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://yogico.kr/:path*',
        permanent: true, // 301 리디렉션 설정 (영구 이동)
        has: [
          {
            type: 'host',
            value: 'www.yogico.kr',
          },
        ],
      },
    ];
  },

  // 기존 설정은 그대로 유지
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;