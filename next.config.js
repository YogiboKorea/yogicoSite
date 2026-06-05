const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // public/ 폴더 정적 파일만 그대로 서빙
  images: {
    unoptimized: true,
  },
  // output: 'export' 도 빼야 App Router가 동작합니다.
}

module.exports = nextConfig
