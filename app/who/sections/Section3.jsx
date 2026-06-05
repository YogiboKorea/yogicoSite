'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './whoSection_03.css';

export default function Section03({ id = 'sec3' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`whoSection_03 ${lang}`}>
      {/* 영어 버전 */}
      <div className="en">
        <h2 className="ws3-heading">MANAGING TEAM</h2>

        <div className="ws3-cards">
          {/* 1 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_step_01.png" alt="Jaehong (Jay) Lee" />
            </div>
            <h3 className="ws3-name">
              JAEHONG (Jay) LEE / CO-Founder &amp; COO
            </h3>
            <p className="ws3-bio">
              Jay has over a decade of expertise in materials research and product innovation.
              He spent 11 years as a researcher at KCC, specializing in advanced materials and
              industrial applications. With a strong background in Materials Engineering from
              Hongik University, he combines technical depth with operational leadership in
              building forward-thinking businesses.
            </p>
          </article>

          {/* 2 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_a_step_03.png" alt="Hoon Lee" />
            </div>
            <h3 className="ws3-name">HOON LEE / CBO</h3>
            <p className="ws3-bio">
              Hoon Lee is a seasoned executive with extensive experience leading market entry, brand repositioning, and business turnarounds for global retail and consumer brands. His previous roles at JellyCat, Boardriders, Lululemon, Ralph Lauren, Adidas, Kolon Industries, Prada Group, and GS Retail demonstrate his ability to execute omni-channel strategies.
            </p>
          </article>

          {/* 3 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_step_03.png" alt="Dukhee (Tim) Hong" />
            </div>
            <h3 className="ws3-name">DUKHEE (TIM) HONG / CPO</h3>
            <p className="ws3-bio">
              Tim is a seasoned operations and finance professional with over 16 years of experience
              leading corporate support functions, including finance, HR, and administration. His
              strength lies in creating efficient, scalable support systems aligned with business
              growth, while fostering cross-functional collaboration and organizational stability.
            </p>
          </article>
        </div>
      </div>

      {/* 한글 버전 */}
      <div className="ko">
        <h2 className="ws3-heading">MANAGING TEAM</h2>

        <div className="ws3-cards">
          {/* 1 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_step_01.png" alt="이재홍 Jay Lee" />
            </div>
            <h3 className="ws3-name">
            JAEHONG (Jay) LEE / CO-Founder &amp; COO
            </h3>
            <p className="ws3-bio">
              이재홍 COO는 홍익대학교에서 재료공학을 전공했으며, KCC 연구원으로 11년간
              첨단 소재 및 산업 응용 분야를 연구했습니다. 10년 이상의 연구·제품 개발 경험을
              바탕으로 기술적 깊이와 운영 리더십을 결합해 미래 지향적 비즈니스를 이끌고 있습니다.
            </p>
          </article>

          {/* 2 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_a_step_03.png" alt="이훈 Hoon Lee" />
            </div>
            <h3 className="ws3-name">HOON LEE / CBO</h3>
            <p className="ws3-bio">
              이훈은 글로벌 리테일 및 소비재 브랜드의 시장 진입, 브랜드
              재포지셔닝, 비즈니스 턴어라운드를 주도한 경력을 보유한 경영 전문가입니다.
              JellyCat, Boardriders, Lululemon, Ralph Lauren, Adidas 등에서 옴니채널 전략을 성공적으로 실행했습니다.
            </p>
          </article>

          {/* 3 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="/img/Y_step_03.png" alt="홍덕희 Tim Hong" />
            </div>
            <h3 className="ws3-name">DUKHEE (TIM) HONG / CPO</h3>
            <p className="ws3-bio">
              홍덕희 CPO는 16년 이상의 재무·운영 전문 경력을 보유하고 있으며, 재무, 인사,
              관리 부문을 이끌어 왔습니다. 비즈니스 성장에 맞춘 효율적이고 확장 가능한
              지원 시스템을 구축하며 조직 안정성과 협업을 강화합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
