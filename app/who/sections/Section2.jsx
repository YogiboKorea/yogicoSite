'use client';

import React, { useContext } from 'react';
import './whoSection_02.css';
import Link from 'next/link';
import { LanguageContext } from '@/contexts/LanguageContext';


export default function Section02({ id = 'sec2' }) {
  const { lang } = useContext(LanguageContext);

  return (
    <section id={id} className={`whoSection_02 ${lang}`}>
      {/* 상단 인트로 섹션 */}
      <div className="intro-section">
        <div className="intro-inner">
          <div className="logo-block">
            <div className="logo-text">
              <div className="logo-img-wrapper">
                <img
                  src="https://yogibo.kr/yogico/img/icon/Signature03.png"
                  alt="YOGI CORPORATION"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="intro-text-block">
            {/* 영어 버전 */}
            <div className="intro-paragraph en">
              Founded in 2016 and based in Gangnam, Seoul, Yogi Corporation combines deep
              international experience with operational control across the full value chain.<br/><br/>
              We deliver strategic consulting and business development services while operating
              our own manufacturing and logistics infrastructure to ensure consistent quality
              and responsiveness.
            </div>
            <div className="intro-paragraph en">
              As an integrated retail brand operator, we maintain an omnichannel presence through
              both offline stores and dynamic<br/> e-commerce platforms.<br/><br/>
              In essence, Yogi Corporation operates across two core business pillars:
            </div>

            {/* 한글 버전 */}
            <div className="intro-paragraph ko">
              요기 코퍼레이션은 2016년에 설립되어 서울 강남에 본사를 두고,
              국제적인 경험과 전체 밸류체인에 대한 운영 역량을 결합했습니다.<br/><br/>
              자체 제조·물류 인프라를 운영하여 일관된 품질과 빠른 대응을 보장합니다.
            </div>
            <div className="intro-paragraph ko">
              통합 리테일 브랜드 운영사로서 온·오프라인 매장과 역동적인
              <br/>이커머스 플랫폼을 통해 옴니채널 Presence를 유지합니다.<br/><br/>
              요약하자면, 요기 코퍼레이션은 두 가지 핵심 비즈니스 축에서 활동합니다:
            </div>

            <ul className="pillar-list">
              <li>
                <Link href="/we#sec8">Business Consulting and Development</Link>
              </li>
              <li>
                <Link href="/we/#hoe2">Brand Management Business</Link>
              </li>
              <li style={{ color: '#fff' }}>
                "WE DON'T JUST TALK.<br className="br"/> WE GET THINGS DONE"
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="section-divider" />

      {/* 하단 CEO 섹션 */}
      <div className="ceo-section">
        <div className="ceo-inner">
          <div className="ceo-text">
            <div className="ceo-name">
              Daejin (David) Park / Founder and CEO
            </div>

            {/* 모바일 전용: 이름 다음에 나오는 이미지 */}
            <div className="ceo-image mobile-inline">
              <img
                src="https://yogibo.openhost.cafe24.com/yogico/img/banner/boss.jpg"
                alt="CEO Daejin David Park"
                loading="lazy"
              />
            </div>

            {/* 영어 CEO 설명 */}
            <div className="ceo-desc en">
              After gaining 15 years of expertise across academia and industry in Israel, including his work at KOTRA,
              David returned to South Korea and launched KOISRA, a consulting firm specializing in facilitating cross-border
              business development between Korea, Israel, and other global markets.<br/><br/>
              He later co-founded KOISRA Seed Partners, a startup accelerator that invests in and mentors early-stage startups
              led by serial entrepreneurs. In addition to his entrepreneurial activities, David authored "Inside Business in Israel".<br/><br/>
              Expanding his career into the retail sector, he established infrastructure for import, manufacturing, distribution,
              and export to build a portfolio of lifestyle brands.<br/><br/>
              David currently serves as CEO of Yogi Corporation, overseeing multiple businesses that reflect his broad experience
              in international business and brand development.<br/><br/>
              <strong>Education</strong><br/>
              Hebrew University of Jerusalem B.A. Linguistics<br/>
              Tel Aviv University M.A. Linguistics
            </div>

            {/* 한글 CEO 설명 */}
            <div className="ceo-desc ko">
              이스라엘 학계 및 산업계에서 15년 경력을 쌓은 후 KOTRA에서 근무한 뒤,
              David는 한국으로 돌아와 국경 간 비즈니스 개발을 지원하는 컨설팅 회사 KOISRA를 설립했습니다.<br/><br/>
              이후 초기 단계 스타트업에 투자·멘토링하는 액셀러레이터 KOISRA Seed Partners를 공동 설립했고,
              비즈니스 활동 외에도 "Inside Business in Israel"을 저술했습니다.<br/><br/>
              소매 부문으로 활동을 확장하며 수입·제조·물류 인프라를 구축했고,
              현재 요기 코퍼레이션의 CEO로서 폭넓은 경험을 바탕으로 여러 비즈니스를 총괄하고 있습니다.<br/><br/>
              <strong>학력</strong><br/>
              예루살렘 히브리 대학교 언어학 학사<br/>
              텔아비브 대학교 언어학 석사
            </div>
          </div>

          {/* 데스크탑 전용 이미지 */}
          <div className="ceo-image desktop-only">
            <img
              src="https://yogibo.kr/yogico/img/banner/boss.jpg"
              alt="CEO Daejin David Park"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* 언어 토글 UI는 Navbar/Slidebar 에서 제공됩니다 */}
    </section>
  );
}
