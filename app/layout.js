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

export const metadata = {
  title: 'YOGI CORPORATION',
  icons: {
    icon: '/yogico.ico',
    shortcut: '/yogico.ico',
    other: [
      { rel: 'icon', url: '/yogico.ico', sizes: 'any', type: 'image/svg+xml' }
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${roboto.className} h-full`}>
        <meta
        name="google-site-verification"
        content="t6Dvzru0Y2bmv7Q62OpJWPyEo7qDCBTWK1Vg-Wz6NKw"
        />
        <meta
        name="naver-site-verification"
        content="3afd7285280e2ef8b340d6899e132b6d32432a5f"
        />
      <head />
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
