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
          <div className="intro-text-block">
            <div className="intro-paragraph">
              Founded in 2016 and based in Gangnam, Seoul, Yogi Corporation combines deep
              international experience with operational control across the full value chain.
              We deliver strategic consulting and business development services while operating
              our own manufacturing and logistics infrastructure to ensure consistent quality
              and responsiveness.
            </div>
            <div className="intro-paragraph">
              As an integrated retail brand operator, we maintain an omnichannel presence through
              both offline stores and dynamic e-commerce platforms. In essence, Yogi Corporation
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
            </ul>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="section-divider" />

      {/* 하단 CEO 섹션 (텍스트 먼저, 이미지 오른쪽) */}
      <div className="ceo-section">
        <div className="ceo-inner">
          <div className="ceo-text">
            <div className="ceo-name">
              Daejin (David) Park, Founder and CEO
            </div>
            <div className="ceo-desc">
              After gaining 15 years of expertise across academia and industry in Israel,
              including his work at KOTRA, David returned to South Korea and launched KOISRA,
              a consulting firm specializing in facilitating cross-border business development
              between Korea, Israel, and other global markets. He later co-founded KOISRA Seed
              Partners, a startup accelerator that invests in and mentors early-stage startups
              led by serial entrepreneurs. In addition to his entrepreneurial activities, David
              authored the Korean-language book "Inside Business in Israel." Expanding his career
              into the retail sector, he established infrastructure for import, manufacturing,
              distribution, and export to build a portfolio of lifestyle brands. David currently
              serves as CEO of Yogi Corporation, overseeing multiple businesses that reflect his
              broad experience in international business and brand development.
            </div>
            <div className="quote">
              "WE DON'T JUST TALK. WE GET THINGS DONE"
            </div>
          </div>

          <div className="ceo-image">
            <img
              src="https://yogibo.kr/yogico/img/banner/boss.jpg"
              alt="CEO Daejin David Park"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
