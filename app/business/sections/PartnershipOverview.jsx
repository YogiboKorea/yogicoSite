'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './PartnershipOverview.css';

export default function PartnershipOverview({ id = 'partnershipOverview' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.pso-item');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('play');
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.05 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`PartnershipOverview ${lang}`}>
      <h2 className="pso-title">STRATEGIC PARTNERSHIP</h2>
      
      <p className="pso-intro">
        {lang === 'en' 
          ? 'Yogi Corporation Inc. provides global solutions through strategic partnerships with a worldwide network of industry experts.'
          : '요기 코퍼레이션은 전 세계 업계 전문가 네트워크와의 전략적 파트너십을 통해 글로벌 비즈니스 솔루션을 제공합니다.'}
      </p>

      <div className="pso-map-container">
        <img 
          src="/img/map.png" 
          alt="World Map Partnership" 
          className="pso-map" 
        />
      </div>

      <div className="pso-list">
        {/* ORCHESTA */}
        <div className="pso-item">
          <div className="pso-item-header">
            <div className="pso-brand">
              <img 
                src="/img/orchesta_logo.png" 
                alt="ORCHESTA" 
                className="pso-logo-img" 
                style={{ height: '35px', objectFit: 'contain' }}
              />
              <h3 className="pso-brand-name">ORCHESTA</h3>
            </div>
            <a href="https://www.orchesta.co.il" target="_blank" rel="noopener noreferrer" className="pso-link">
              www.orchesta.co.il
            </a>
          </div>
          <p className="pso-desc">
            {lang === 'en' ? (
              <>
                <strong>Orchesta</strong> is a business development and consulting firm comprised of seasoned experts who have spearheaded marketing initiatives for leading global brands such as H&amp;M, Mars-Wrigley, Toyota, De'Longhi, and Pepsi etc. <strong>Regions: Middle East, Europe</strong>
              </>
            ) : (
              <>
                <strong>Orchesta</strong>는 H&amp;M, Mars-Wrigley, Toyota, De'Longhi, Pepsi 등 글로벌 주요 브랜드의 마케팅 전략을 주도해 온 업계 베테랑 전문가들로 구성된 비즈니스 개발 및 컨설팅 기업입니다. <strong>지역: 중동, 유럽</strong>
              </>
            )}
          </p>
        </div>

        {/* KR2USA */}
        <div className="pso-item">
          <div className="pso-item-header">
            <div className="pso-brand">
              <div className="pso-logo-icon kr2usa-text-logo">
                <span className="light-text">KR2</span><span className="bold-text">USA</span>
              </div>
            </div>
            <a href="https://www.kr2usa.com" target="_blank" rel="noopener noreferrer" className="pso-link">
              www.kr2usa.com
            </a>
          </div>
          <p className="pso-desc">
            {lang === 'en' ? (
              <>
                <strong>KR2USA</strong> is a specialized K-Beauty market accelerator and operational partner that functions as a dedicated U.S. headquarters for Korean beauty brands, with extensive experience scaling beauty brands at world-class companies including L'Oréal USA, Hanes Brands, and Kenneth Cole. <strong>Regions: North America</strong>
              </>
            ) : (
              <>
                <strong>KR2USA</strong>는 한국 뷰티 브랜드의 미국 현지 본사 역할을 수행하는 K-Beauty 시장 전문 액셀러레이터이자 운영 파트너입니다. L'Oréal USA, Hanes Brands, Kenneth Cole 등 글로벌 기업에서 뷰티 브랜드를 성공적으로 안착시키고 스케일업한 풍부한 경험을 보유하고 있습니다. <strong>지역: 북미</strong>
              </>
            )}
          </p>
        </div>

        {/* Global Stride */}
        <div className="pso-item">
          <div className="pso-item-header">
            <div className="pso-brand">
              <img 
                src="/img/global.png" 
                alt="Global Stride" 
                className="pso-logo-img" 
                style={{ height: '35px', objectFit: 'contain' }}
              />
            </div>
            <a href="https://www.globalstride.jp" target="_blank" rel="noopener noreferrer" className="pso-link">
              www.globalstride.jp
            </a>
          </div>
          <p className="pso-desc">
            {lang === 'en' ? (
              <>
                <strong>Global Stride</strong> is a J-beauty trading company dedicated to bringing premium Japanese products to the world. With strong direct relationships with leading Japanese manufacturers, Global Stride has successfully facilitated international trade through deep industry network. <strong>Regions: Asia</strong>
              </>
            ) : (
              <>
                <strong>Global Stride</strong>는 프리미엄 일본 제품을 전 세계에 소개하는 J-beauty 전문 무역 회사입니다. 일본 유수의 제조사들과의 강력한 직접 협력 관계와 두터운 글로벌 네트워크를 바탕으로 성공적인 국제 무역 비즈니스를 지원합니다. <strong>지역: 아시아</strong>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
