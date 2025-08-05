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
  icons: {
    icon: '/yogico.ico',
    shortcut: '/yogico.ico',
    other: [
      { rel: 'icon', url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${roboto.className} h-full`}>
      <head />
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
