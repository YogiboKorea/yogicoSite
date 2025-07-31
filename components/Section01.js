'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './Section01.css';

export default function Section01() {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // IntersectionObserver로 스크롤 진입 시 애니메이션 재생
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('play');
        } else {
          el.classList.remove('play');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    router.push('/we/#sec8');
  };

  return (
    <section
      id="section01"
      ref={sectionRef}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h1 className="section01_line1">
        BUSINESS <br className="mobile-br" />
        CONSULTING
      </h1>
      <h1 className="section01_line2">&amp; DEVELOPMENT</h1>
    </section>
  );
}
