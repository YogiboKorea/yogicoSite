'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_03.css';

const partners = [
  { name: 'LOTTE',             src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_01.png' },
  { name: 'Panasonic',         src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_02.png' },
  { name: 'DHL',               src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_03.png' },
  { name: 'KLM',               src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_04.png' },
  { name: 'LEDICO',            src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_05.png' },
  { name: 'Guame',             src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_06.png' },
  { name: 'HYUNDAI',           src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_07.png' },
  { name: 'KIA',               src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_08.png' },
  { name: 'NISSAN',            src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_09.png' },
  { name: 'TOYOTA',            src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_10.png' },
  { name: 'BOSCH',             src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_11.png' },
  { name: 'DOOSAN',            src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_12.png' },
  { name: 'H&M',               src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_13.png' },
  { name: 'HYUNDAI (Dept.)',   src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_14.png' },
  { name: 'SHINSEGAE',         src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_15.png' },
  { name: 'L’ORÉAL',           src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_16.png' },
  { name: 'MARS WRIGLEY',      src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_17.png' },
  { name: 'KOTRA',             src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_18.png' },
  { name: 'MOEF',              src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_19.png' },
  { name: 'Arugot',            src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_20.png' },
  { name: 'Zenlife Wellness',  src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_21.png' },
  { name: 'THE CELL LAB',      src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_22.png' },
  { name: 'VEGAN SUPER',       src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_23.png' },
  { name: 'MUZIGAE MANSION',   src: 'http://yogibo.openhost.cafe24.com/yogico/icon/img_24.png' },
];


export default function BusinessSection_03({ id = 'bizSec3' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        e.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_03">
      <h2 className="bs3-title">PARTNERS</h2>
      <p className="bs3-sub">
        Our clients are called as partners, not customers. Because their success is our success.
      </p>

      <div className="bs3-grid">
        {partners.map((p, i) => (
          <div key={i} className="bs3-box">
            {p.src ? (
              <img src={p.src} alt={p.name} />
            ) : (
              <span>{p.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
