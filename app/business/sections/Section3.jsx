'use client';

import React, { useContext, useRef, useEffect } from 'react';
import './BusinessSection_03.css';
import { LanguageContext } from '@/contexts/LanguageContext';
const partners = [
  { name: 'LOTTE',             src: '/img/img_01.webp' },
  { name: 'Panasonic',         src: '/img/img_02.webp' },
  { name: 'DHL',               src: '/img/img_03.webp' },
  { name: 'KLM',               src: '/img/img_04.webp' },
  { name: 'LEDICO',            src: '/img/img_05.webp' },
  { name: 'Guame',             src: '/img/img_06.webp' },
  { name: 'HYUNDAI',           src: '/img/img_07.webp' },
  { name: 'KIA',               src: '/img/img_08.webp' },
  { name: 'NISSAN',            src: '/img/img_09.webp' },
  { name: 'TOYOTA',            src: '/img/img_10.webp' },
  { name: 'BOSCH',             src: '/img/img_11.webp' },
  { name: 'DOOSAN',            src: '/img/img_12.webp' },
  { name: 'H&M',               src: '/img/img_13.webp' },
  { name: 'HYUNDAI (Dept.)',   src: '/img/img_14.webp' },
  { name: 'SHINSEGAE',         src: '/img/img_15.webp' },
  { name: 'L’ORÉAL',           src: '/img/img_16.webp' },
  { name: 'MARS WRIGLEY',      src: '/img/img_17.webp' },
  { name: 'KOTRA',             src: '/img/img_18.webp' },
  { name: 'MOEF',              src: '/img/img_19.webp' },
  { name: 'Arugot',            src: '/img/img_20.webp' },
  { name: 'Zenlife Wellness',  src: '/img/img_21.webp' },
  { name: 'THE CELL LAB',      src: '/img/img_22.webp' },
  { name: 'VEGAN SUPER',       src: '/img/img_23.webp' },
  { name: 'MUZIGAE MANSION',   src: '/img/img_24.webp' },
];

export default function BusinessSection_03({ id = 'bizSec3' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`BusinessSection_03 ${lang}`}>
      {/* EN */}
      <div className="en">
        <h2 className="bs3-title">PARTNERS</h2>
        <p className="bs3-sub">
          “OUR CLIENTS ARE CALLED AS PARTNERS, NOT CUSTOMERS. BECAUSE THEIR SUCCESS IS OUR SUCCESS.“
        </p>
      </div>

      {/* KO */}
      <div className="ko">
        <h2 className="bs3-title">PARTNERS</h2>
        <p className="bs3-sub">
          “저희 고객은 단순 고객이 아닌 파트너로 부르며, 그들의 성공이 곧 저희의 성공입니다.“
        </p>
      </div>

      <div className="bs3-grid">
        {partners.map((p, i) => (
          <div
            key={i}
            className="bs3-box"
            style={{ '--delay': `${(i + 1) * 0.05}s` }}
          >
            <div className="bs3-box-content">
              <img src={p.src} alt={p.name} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}