'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BusinessSection_04.css';

export default function BusinessSection_04({ id = 'bizSec4' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`BusinessSection_04 ${lang}`}>
      {/* Title */}
      <h2 className="bs4-title">
        {lang === 'en' ? 'STRATEGIC PARTNERSHIP' : 'STRATEGIC PARTNERSHIP'}
      </h2>

      {/* Description */}
      <div className="bs4-top">
        <div className="bs4-logos">
          <img
            className="bs4-logo yogi"
            src="/img/symbol.png"
            alt="Yogi"
          />
          <span className="bs4-multiply">×</span>
          <img
            className="bs4-logo"
            src="/img/orchesta.png"
            alt="Orchestra"
          />
        </div>
        <p className="bs4-desc">
          {lang === 'en' ? (
            <>
              Yogi Corporation is pursuing international market expansion through a strategic
              partnership with Orchestra. Led by Gilad Kroner, Orchestra is a business
              development and consulting firm comprised of seasoned experts who have spearheaded
              marketing initiatives for leading global brands such as H&amp;M, Mars‐Wrigley,
              Toyota, De’Longhi, and Pepsi etc.
            </>
          ) : (
            <>
              요기 코퍼레이션은 Orchestra와의 전략적 파트너십을 통해 국제 시장 확장을
              추진합니다. Gilad Kroner가 이끄는 Orchestra는 H&amp;M, Mars‐Wrigley,
              Toyota, De’Longhi, Pepsi 등 글로벌 주요 브랜드의 마케팅을 주도해 온
              전문가들로 구성된 비즈니스 개발 및 컨설팅 회사입니다.
            </>
          )}
        </p>
      </div>

      {/* Partner Cards */}
      <div className="bs4-cards">
        {/* 1st Partner */}
        <div className="bs4-card_profile">
          <div className="bs4-card_avatar">
            <img
              src="/img//Nimrod Moyal.png"
              alt={lang === 'en' ? 'Nimrod Moyal' : 'Nimrod Moyal'}
            />
          </div>
          <h3 className="bs4-card_name">
            {lang === 'en' ? 'Nimrod Moyal' : 'Nimrod Moyal'}
          </h3>
          <div className="bs4-card_exps">
            {lang === 'en' ? (
              <>
                <p>
                  <span className="bs4-card_period">2024 – Present</span> Global Partner of
                  Orchestra · Global Project Director in NM REAL Intelligence (Partnership With
                  Dynata Group) Hague, Netherlands
                </p>
                <p>
                  <span className="bs4-card_period">1994 – 2024</span> Managing Director in ADK
                  INSIGHTS Hoofddorp, Netherlands
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="bs4-card_period">2024 – 현재</span> Orchestra 글로벌 파트너 ·
                  NM REAL Intelligence 글로벌 프로젝트 디렉터 (Dynata 그룹 파트너십) 헤이그, 네덜란드
                </p>
                <p>
                  <span className="bs4-card_period">1994 – 2024</span> ADK INSIGHTS 전무이사,
                  후프도르프, 네덜란드
                </p>
              </>
            )}
          </div>
          <div className="bs4-card_edu">
            <strong>{lang === 'en' ? 'Education' : '학력'}</strong>
            {lang === 'en' ? (
              <p>Erasmus University, Rotterdam School of Management MBA</p>
            ) : (
              <p>에라스무스 대학교 로테르담 경영대학원 MBA</p>
            )}
          </div>
        </div>

        {/* 2nd Partner */}
        <div className="bs4-card_profile">
          <div className="bs4-card_avatar">
            <img
              src="/img//Gilad Kroner.png"
              alt={lang === 'en' ? 'Gilad Kroner' : 'Gilad Kroner'}
            />
          </div>
          <h3 className="bs4-card_name">
            {lang === 'en' ? 'Gilad Kroner' : 'Gilad Kroner'}
          </h3>
          <div className="bs4-card_exps">
            {lang === 'en' ? (
              <>
                <p>
                  <span className="bs4-card_period">2024 – Present</span> Founder and CEO of
                  Orchestra
                </p>
                <p>
                  <span className="bs4-card_period">2020 – 2024</span> CEO in Naterial, Israel · VP
                  International Operations in Laline Global
                </p>
                <p>
                  <span className="bs4-card_period">2006 – 2017</span> CEO in H&amp;M Israel · VP
                  Marketing in Toyota Israel
                </p>
                <p>
                  <span className="bs4-card_period">1993 – 2006</span> Marketing Director in
                  Wrigley Mars Europe, Middle East, Asia (30 countries)
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="bs4-card_period">2024 – 현재</span> Orchestra 설립자 겸 CEO,
                  라아나나, 이스라엘
                </p>
                <p>
                  <span className="bs4-card_period">2020 – 2024</span> Naterial CEO, VP 국제
                  운영 (Laline Global)
                </p>
                <p>
                  <span className="bs4-card_period">2006 – 2017</span> H&amp;M Israel CEO · Toyota
                  Israel 마케팅 부대표
                </p>
                <p>
                  <span className="bs4-card_period">1993 – 2006</span> Wrigley Mars 유럽·중동·아시아
                  마케팅 디렉터 (30개국)
                </p>
              </>
            )}
          </div>
          <div className="bs4-card_edu">
            <strong>{lang === 'en' ? 'Education' : '학력'}</strong>
            {lang === 'en' ? (
              <>
                <p>Erasmus University, Rotterdam School of Management MBA</p>
                <p>Hebrew University of Jerusalem B.A. Business &amp; Economics</p>
              </>
            ) : (
              <>
                <p>에라스무스 대학교 로테르담 경영대학원 MBA</p>
                <p>예루살렘 히브리 대학교 경영학 학사</p>
              </>
            )}
          </div>
        </div>

        {/* 3rd Partner */}
        <div className="bs4-card_profile">
          <div className="bs4-card_avatar">
            <img
              src="/img//Ran Landau.png"
              alt={lang === 'en' ? 'Ran Landau' : 'Ran Landau'}
            />
          </div>
          <h3 className="bs4-card_name">
            {lang === 'en' ? 'Ran Landau' : 'Ran Landau'}
          </h3>
          <div className="bs4-card_exps">
            {lang === 'en' ? (
              <>
                <p>
                  <span className="bs4-card_period">2025 – Present</span> Global Partner of
                  Orchestra
                </p>
                <p>
                  <span className="bs4-card_period">2023 – Present</span> Global Sales And
                  Business Development Director In Mommy Care International Yavne Israel
                </p>
                <p>
                  <span className="bs4-card_period">2013 – 2020</span> Founder And Managing
                  Partner Of Bura International Trade Ramat HaSharon Israel
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="bs4-card_period">2025 – 현재</span> Orchestra 글로벌 파트너
                </p>
                <p>
                  <span className="bs4-card_period">2023 – 현재</span> Mommy Care International
                  영업·사업개발 이사, 야브네, 이스라엘
                </p>
                <p>
                  <span className="bs4-card_period">2013 – 2020</span> Bura International
                  Trade 설립자 겸 파트너, 라마트하샤론, 이스라엘
                </p>
              </>
            )}
          </div>
          <div className="bs4-card_edu">
            <strong>{lang === 'en' ? 'Education' : '학력'}</strong>
            {lang === 'en' ? (
              <>
                <p>Tel Aviv University MBA</p>
                <p>Tel Aviv University B.A. Economics &amp; Management</p>
              </>
            ) : (
              <>
                <p>텔아비브 대학교 MBA</p>
                <p>텔아비브 대학교 경제학·경영학 학사</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
