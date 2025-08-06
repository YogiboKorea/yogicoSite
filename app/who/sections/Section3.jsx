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
              <img src="https://yogibo.kr/yogico/step/Y_step_01.png" alt="Jaehong (Jay) Lee" />
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
              <img src="https://yogibo.kr/yogico/step/Y_step_02.jpg" alt="Kyungsoo Kim" />
            </div>
            <h3 className="ws3-name">KYUNGSOO KIM / CRO</h3>
            <p className="ws3-bio">
              Dr. Kim is a R&amp;D leader with a Ph.D. in Chemical Engineering from Wayne State
              University and over 30 years of experience in industrial research and technology
              development. His extensive background in both academia and industry enables him
              to lead innovation in advanced materials and sustainable energy solutions.
            </p>
          </article>

          {/* 3 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="https://yogibo.kr/yogico/step/Y_step_03.png" alt="Dukhee (Tim) Hong" />
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
              <img src="https://yogibo.kr/yogico/step/Y_step_01.png" alt="이재홍 Jay Lee" />
            </div>
            <h3 className="ws3-name">
              이재홍 / 공동창업자 &amp; COO
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
              <img src="https://yogibo.kr/yogico/step/Y_step_02.jpg" alt="김경수 Kim" />
            </div>
            <h3 className="ws3-name">김경수 / CRO</h3>
            <p className="ws3-bio">
              김경수 CRO는 Wayne State University 화학공학 박사 출신으로, 30년 이상의
              산업 연구 및 기술 개발 경험을 보유하고 있습니다. 학계와 산업계를 아우르는
              경험으로 첨단 소재 및 지속가능 에너지 솔루션 혁신을 선도합니다.
            </p>
          </article>

          {/* 3 */}
          <article className="ws3-card">
            <div className="ws3-avatar">
              <img src="https://yogibo.kr/yogico/step/Y_step_03.png" alt="홍덕희 Tim Hong" />
            </div>
            <h3 className="ws3-name">홍덕희 / CPO</h3>
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
