'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageContext } from '../contexts/LanguageContext';
import './Slidebar.css';

const menuItems = [
  { href: '/', label: 'HOME' },
  { href: '/who', label: 'WHO WE ARE' },
  { href: '/we', label: 'WHAT WE DO' },
  { href: '/news', label: 'NEWS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Slidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const { lang, switchLang } = useContext(LanguageContext);

  return (
    <>
      {/* backdrop */}
      <div
        className={`slide-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      {/* panel */}
      <nav className={`slidebar ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="inner">
          <header id="header">
            {/* ─── 언어 선택 버튼 ───────────────────────────────── */}
            <div className="lang-switcher">
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => switchLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
              <button
                className={lang === 'ko' ? 'active' : ''}
                onClick={() => switchLang('ko')}
                aria-pressed={lang === 'ko'}
              >
                KO
              </button>
            </div>

            {/* 기존 네비게이션 */}
            <nav id="nav">
              <ul onClick={onClose}>
                {menuItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={pathname === item.href ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <footer id="footer">
            <address>#201, 125, Bongeunsa-ro, Gangnam-gu, Seoul, Korea</address>
            <address>+82-10-2880-0721<br/>contact@yogico.kr</address>
          </footer>
        </div>
      </nav>
    </>
  );
}
