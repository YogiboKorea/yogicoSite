'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './whoSection_05.css';

export default function Section05({ id = 'sec5' }) {
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
    <section id={id} ref={ref} className={`whoSection_05 ${lang}`}>
      {/* English Version */}
      <div className="en">
        <h2 className="ws5-heading">STRATEGIC ADVISORS</h2>

        <p className="ws5-intro">
          Yogi Corporation collaborates with strategic advisors and accomplished business professionals
          who bring deep expertise across diverse fields and have accumulated extensive experience in
          multiple countries. Through these partnerships, we minimize business risks while maximizing
          opportunities and potential. By applying a proven business approach, we consistently deliver
          successful outcomes.
        </p>

        <div className="ws5-cards">
          {/* 1. Hojin Park */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_01.png"
                alt="Hojin Park"
              />
            </div>
            <h3 className="ws5-name">HOJIN PARK</h3>
            <p className="ws5-bio">
              Hojin Park is a Certified Public Accountant (CPA) with over 17 years of experience in the USA.
              He has a strong background in both public and private accounting, with expertise in
              financial reporting, audits, and tax returns for individuals, businesses, and nonprofits.
              His technical skills include proficiency in SAP, QuickBooks, Kronos, MS Dynamics 365 and
              other systems.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>Education</strong>
              <p>University of Alaska Anchorage B.A. Accounting</p>
              <p>Handong Global University B.A. Business and Economics</p>
            </div>
          </article>

          {/* 2. Hoon Lee */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_03.png"
                alt="Hoon Lee"
              />
            </div>
            <h3 className="ws5-name">HOON LEE</h3>
            <p className="ws5-bio">
              Hoon Lee is a seasoned executive with extensive experience leading market entry,
              brand repositioning, and business turnarounds for global retail and consumer brands.
              His previous roles at JellyCat, Boardriders, Lululemon, Ralph Lauren, Adidas,
              Kolon Industries, Prada Group, and GS Retail demonstrate his ability to drive
              growth, manage large teams, and execute omni-channel strategies.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>Education</strong>
              <p>Yonsei University, MBA</p>
              <p>State University of New York B.A. Business Administration and Management</p>
            </div>
          </article>

          {/* 3. Hyunjoong Kim */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_02.png"
                alt="Hyunjoong Kim"
              />
            </div>
            <h3 className="ws5-name">HYUNJOONG KIM</h3>
            <p className="ws5-bio">
              Hyunjoong Kim is an expert in branded consumer products, with integrated experience
              in marketing, merchandising, sales, and go-to-market strategies. He has led major
              growth and brand transformation initiatives at Adidas, Under Armour, 2XU, and more.
              His strengths include ERP implementation, SCM optimization, flagship store launches,
              and a robust network within the sports brand ecosystem.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>Education</strong>
              <p>Yonsei University, B.A. Textile &amp; Clothing</p>
            </div>
          </article>
        </div>
      </div>

      {/* Korean Version */}
      <div className="ko">
        <h2 className="ws5-heading">STRATEGIC ADVISORS</h2>

        <p className="ws5-intro">
          요기 코퍼레이션은 다양한 분야의 전문성과 다국적 경험을 보유한 전략 자문위원들과
          협업합니다. 이러한 파트너십을 통해 비즈니스 리스크를 최소화하고 기회를 극대화하며,
          검증된 비즈니스 방식을 적용하여 일관된 성공을 실현합니다.
        </p>

        <div className="ws5-cards">
          {/* 1. Hojin Park */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_01.png"
                alt="박호진 Hojin Park"
              />
            </div>
            <h3 className="ws5-name">HOJIN PARK</h3>
            <p className="ws5-bio">
              박호진 자문위원은 미국에서 17년 이상의 회계 경력을 보유한 공인회계사(CPA)입니다.
              공공 및 민간 회계 모두에서 재무 보고, 감사, 세무 신고를 전문으로 하며,
              SAP, QuickBooks, Kronos, MS Dynamics 365 등 다양한 시스템에 능숙합니다.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>학력</strong>
              <p>알래스카주립대학교 앵커리지 회계학 학사</p>
              <p>한동대학교 경영경제학 학사</p>
            </div>
          </article>

          {/* 2. Hoon Lee */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_03.png"
                alt="이훈 Hoon Lee"
              />
            </div>
            <h3 className="ws5-name">HOON LEE</h3>
            <p className="ws5-bio">
              이훈 자문위원은 글로벌 리테일 및 소비재 브랜드의 시장 진입, 브랜드
              재포지셔닝, 비즈니스 턴어라운드를 주도한 경력을 보유한 경영 전문가입니다.
              JellyCat, Boardriders, Lululemon, Ralph Lauren, Adidas 등에서 성장을
              이끌었으며, 옴니채널 전략을 성공적으로 실행했습니다.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>학력</strong>
              <p>연세대학교 경영전문대학원 MBA</p>
              <p>뉴욕주립대학교 경영학 학사</p>
            </div>
          </article>

          {/* 3. Hyunjoong Kim */}
          <article className="ws5-card">
            <div className="ws5-avatar">
              <img
                src="/img/Y_a_step_02.png"
                alt="김현중 Hyunjoong Kim"
              />
            </div>
            <h3 className="ws5-name">HYUNJOONG KIM</h3>
            <p className="ws5-bio">
              김현중 자문위원은 마케팅, 머천다이징, 영업 및 GTM 전략을 아우르는 소비재
              제품 전문가입니다. Adidas, Under Armour, 2XU 등에서 브랜드 혁신을 주도했으며,
              ERP 구현, SCM 최적화, 플래그십 스토어 런칭에 강점을 보유하고 있습니다.
            </p>
            <br/>
            <div className="ws5-edu">
              <strong>학력</strong>
              <p>연세대학교 섬유·패션학 학사</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
