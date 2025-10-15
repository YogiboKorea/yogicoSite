'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import './Slidebar.css';          // Slidebar 스타일
import Slidebar from './SlideBar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = e => {
    e.preventDefault();
    setMenuOpen(o => !o);
  };

  return (
    <>
      <header className="navbar">
        <h1 className="logo locoContact">
          <Link href="/" aria-label="Home"><img src="/img/symbol.png" className="logo" alt="로고"/></Link>
        </h1>
        <button
          className={`menu btn_tl ${menuOpen ? 'open_btn' : ''} btn_tl_contact`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </button>
      </header>

      <Slidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
