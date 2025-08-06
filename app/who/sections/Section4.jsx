'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './whoSection_04.css';

export default function Section4({ id = 'sec4' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting
          ? el.classList.add('play')
          : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`whoSection_04 ${lang}`}>
      {/* 영어 버전 */}
      <div className="en">
        <h2 className="ws4-heading">Market Analysis &amp; Marketing</h2>

        <div className="ws4-cards">
          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_02.png"
                alt="Junsoo Han"
              />
            </div>
            <h3 className="ws4-name">JUNSOO HAN / ANALYSIS MANAGER</h3>
            <p className="ws4-bio">
              Junsoo is a versatile marketing and content strategist with over 7 years of experience
              across in-house, agency, and freelance roles. His strength lies in combining creative
              execution with data-driven strategy, delivering real business impact in fast-paced,
              cross-functional environments.
            </p>
          </article>

          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_01.png"
                alt="Ihyeon Kim"
              />
            </div>
            <h3 className="ws4-name">IHYEON KIM / MARKETING DIRECTOR</h3>
            <p className="ws4-bio">
              Ihyeon Kim is a seasoned marketing and HRD professional with over 11 years of experience,
              including 8+ years at Lotte Cinema. Her unique blend of marketing, design, and team
              leadership skills makes her an ideal bridge between creative execution and strategic
              business goals.
            </p>
          </article>

          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_03.jpg"
                alt="Yubin Lee"
              />
            </div>
            <h3 className="ws4-name">YUBIN LEE / MARKETING MANAGER</h3>
            <p className="ws4-bio">
              Yubin is a versatile content and marketing professional with 4+ years of experience in
              content planning, production, and digital marketing. Her strengths lie in trend-driven
              execution, performance analysis, and campaign management driving engagement and measurable
              business results.
            </p>
          </article>
        </div>
      </div>

      {/* 한글 버전 */}
      <div className="ko">
        <h2 className="ws4-heading">Market Analysis &amp; Marketing</h2>

        <div className="ws4-cards">
          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_02.png"
                alt="한준수 Junsoo Han"
              />
            </div>
            <h3 className="ws4-name">JUNSOO HAN / ANALYSIS MANAGER</h3>
            <p className="ws4-bio">
              한준수 매니저는 사내, 에이전시, 프리랜서 등 다양한 환경에서 7년 이상의
              마케팅 및 콘텐츠 전략 수립 경험을 보유하고 있습니다. 창의적 실행과 데이터 기반
              전략을 결합하여 빠르게 변화하는 교차 기능 환경에서 실질적인 비즈니스 성과를
              이끌어냅니다.
            </p>
          </article>

          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_01.png"
                alt="김이현 Ihyeon Kim"
              />
            </div>
            <h3 className="ws4-name">IHYEON KIM / MARKETING DIRECTOR</h3>
            <p className="ws4-bio">
              김이현 디렉터는 롯데시네마에서 8년을 포함해 11년 이상의 마케팅 및 HRD 경력을
              갖춘 전문가입니다. 마케팅, 디자인, 팀 리더십 역량을 결합해 창의적 실행과
              전략적 목표 달성 간의 가교 역할을 수행합니다.
            </p>
          </article>

          <article className="ws4-card">
            <div className="ws4-avatar">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/step/Y_s_step_03.jpg"
                alt="이유빈 Yubin Lee"
              />
            </div>
            <h3 className="ws4-name">YUBIN LEE / MARKETING MANAGER</h3>
            <p className="ws4-bio">
              이유빈 매니저는 콘텐츠 기획·제작 및 디지털 마케팅 분야에서 4년 이상의 경험을
              보유한 다재다능한 전문가입니다. 트렌드 중심의 실행, 성과 분석, 캠페인 관리로
              참여도와 비즈니스 성과를 동시에 극대화합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
