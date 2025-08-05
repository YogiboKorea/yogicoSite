'use client';

import React from 'react';
import './whoSection_02.css';
import Link from 'next/link';

export default function Section02({ id = 'sec2' }) {
  return (
    <section id={id} className="whoSection_02">
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
          <div className="intro-text-block translatable">
            <div className="intro-paragraph">
              Founded in 2016 and based in Gangnam, Seoul, Yogi Corporation combines deep
              international experience with operational control across the full value chain. <br/><br/>
              We deliver strategic consulting and business development services while operating
              our own manufacturing and logistics infrastructure to ensure consistent quality
              and responsiveness.
            </div>
            <div className="intro-paragraph">
              As an integrated retail brand operator, we maintain an omnichannel presence through
              both offline stores and dynamic<br/> e-commerce platforms.<br/><br/>   In essence, Yogi Corporation
              operates across two core business pillars:
            </div>


            <ul className="pillar-list">
              <li>
                <Link href="/we#sec8">
                  Business Consulting and Development
                </Link>
              </li>
              <li>
                <Link href="/we/#hoe2">
                  Brand Management Business
                </Link>
              </li>
              <br/>
              <li style={{color:'#fff'}}>"WE DON'T JUST TALK.<br className="br"/> WE GET THINGS DONE"</li>
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
            <div className="ceo-name translatable">
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

            <div className="ceo-desc translatable">
              After gaining 15 years of expertise across academia and industry in Israel, including his work at KOTRA, 
              David returned to South Korea and launched KOISRA, a consulting firm specializing in facilitating cross-border 
              business development between Korea, Israel, and other global markets.<br/><br/>
              He later co-founded KOISRA Seed Partners, a startup accelerator that invests in and mentors early-stage startups 
              led by serial entrepreneurs. In addition to his entrepreneurial activities, David authored "Inside Business in Israel".<br/><br/>
              Expanding his career into the retail sector, he established infrastructure for import, manufacturing, distribution, 
              and export to build a portfolio of lifestyle brands.<br/><br/>
              David currently serves as CEO of Yogi Corporation, overseeing multiple businesses that reflect his broad experience 
              in international business and brand development.
              <br/><br/>
                <strong>Education</strong><br/>
                Hebrew University of Jerusalem B.A. Linguistics <br/>
                Tel Aviv University M.A. Linguistics
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
      {/* <AutoTranslateButton to="ko" selector=".translatable" /> */}
    </section>
  );
}
