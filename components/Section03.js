'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './Section03.css';

export default function Section03() {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('play');
        else el.classList.remove('play');
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    router.push('/we#BrandSection_01');
  };

  return (
    <section
      id="section03"
      ref={sectionRef}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="section03_text">
        <h1 className="section03_line1">BRAND</h1>
        <h1 className="section03_line2">MANAGEMENT</h1>
        <h1 className="section03_line3">BUSINESS</h1>
      </div>
    </section>
  );
}
