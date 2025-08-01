'use client';

import React, { useRef, useEffect } from 'react';
import './BusinessSection_03.css';

const partners = [
  { name: 'LOTTE',             src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_01.webp' },
  { name: 'Panasonic',         src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_02.webp' },
  { name: 'DHL',               src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_03.webp' },
  { name: 'KLM',               src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_04.webp' },
  { name: 'LEDICO',            src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_05.webp' },
  { name: 'Guame',             src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_06.webp' },
  { name: 'HYUNDAI',           src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_07.webp' },
  { name: 'KIA',               src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_08.webp' },
  { name: 'NISSAN',            src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_09.webp' },
  { name: 'TOYOTA',            src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_10.webp' },
  { name: 'BOSCH',             src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_11.webp' },
  { name: 'DOOSAN',            src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_12.webp' },
  { name: 'H&M',               src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_13.webp' },
  { name: 'HYUNDAI (Dept.)',   src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_14.webp' },
  { name: 'SHINSEGAE',         src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_15.webp' },
  { name: 'L’ORÉAL',           src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_16.webp' },
  { name: 'MARS WRIGLEY',      src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_17.webp' },
  { name: 'KOTRA',             src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_18.webp' },
  { name: 'MOEF',              src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_19.webp' },
  { name: 'Arugot',            src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_20.webp' },
  { name: 'Zenlife Wellness',  src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_21.webp' },
  { name: 'THE CELL LAB',      src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_22.webp' },
  { name: 'VEGAN SUPER',       src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_23.webp' },
  { name: 'MUZIGAE MANSION',   src: 'https://yogibo.openhost.cafe24.com/yogico/img/icon/img_24.webp' },
];

export default function BusinessSection_03({ id = 'bizSec3' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play');
        }
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
        “Our clients are called as partners, not customers. Because their success is our success“
      </p>

      <div className="bs3-grid">
        {partners.map((p, i) => (
          <div
            key={i}
            className="bs3-box"
            style={{ '--delay': `${(i + 1) * 0.05}s` }}
          >
            <div className="bs3-box-content">
              {p.src ? (
                <img src={p.src} alt={p.name} loading="lazy" />
              ) : (
                <span>{p.name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
