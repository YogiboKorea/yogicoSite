// app/layout.js
import "./globals.css";
import "./styles/globals.css";
import { Anton } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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

export const metadata = {
  title: 'YOGI CORPORATION',
  description: '브랜드와 관련 기술 개발을 통해…',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  icons: { /* … */ },
  openGraph: {
    type: 'website',
    title: '(주)요기코퍼레이션',
    description: '브랜드와 관련 기술 개발을 통해…',
    url: 'https://yogico.kr',
    images: 'https://yogibo.openhost.cafe24.com/img/icon/symbol.png',
  },
  verification: {
    google: 't6Dvzru0Y2bmv7Q62OpJWPyEo7qDCBTWK1Vg-Wz6NKw',
    naver : '3afd7285280e2ef8b340d6899e132b6d32432a5f'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${roboto.className} h-full`}>
      <head/>
      <body className="flex flex-col h-full">
        <Navbar />
        <main className="flex-1 w-full overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
