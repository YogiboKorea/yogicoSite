// app/layout.js
import "./globals.css";
import "./styles/globals.css";
import { Anton } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

const roboto = Roboto_Condensed({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
});

// head.js의 모든 정보를 이 metadata 객체로 옮겼습니다.
export const metadata = {
  title: '요기코퍼레이션',
  description: '요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다. 회사 소개, 주요 서비스, 채용 정보를 확인하세요.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  
  // 검색엔진 인증
  verification: {
    google: 't6Dvzru0Y2bmv7Q62OpJWPyEo7qDCBTWK1Vg-Wz6NKw',
    other: {
      'naver-site-verification': '804cb6654844616998dc629d0e37b3e16f2d4657',
    },
  },

  // 아이콘 설정
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
  },

  // Open Graph (소셜 미디어 공유)
  openGraph: {
    type: 'website',
    title: '요기코퍼레이션',
    description: '요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다.',
    url: 'https://yogico.kr/',
    images: [
      {
        url: '/img/symbol.png', // 절대 경로 또는 전체 URL을 사용하세요.
        width: 800,
        height: 600,
        alt: '요기코퍼레이션 로고',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '(주)요기코퍼레이션',
    description: '요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다.',
    images: ['/img/symbol.png'], // 절대 경로 또는 전체 URL을 사용하세요.
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${roboto.className} h-full`}>
      {/* <head /> 태그와 <body> 안의 <meta> 태그들은
        이제 metadata 객체가 자동으로 처리해주므로 삭제합니다.
      */}
      <body className="flex flex-col h-full">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-auto">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}