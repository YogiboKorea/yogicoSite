'use client';

import React from 'react';
import './whoSection_02.css';

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
              Founded in 2016, Yogi Corporation is headquartered in Gangnam, Seoul,
              South Korea. Yogi Corporation is powered by a team of seasoned professionals
              with diverse industry expertise and extensive international experience,
              enabling us to deliver high-impact strategic consulting and business development
              solutions.
            </div>
            <div className="intro-paragraph">
              We operate our own manufacturing facility and logistics center, ensuring consistent
              product quality, streamlined operations, and agile supply chain management. In addition,
              as a fully integrated retail brand operator, we maintain a strong omnichannel presence
              through a nationwide network of offline stores and dynamic e-commerce platforms. In essence,
              Yogi Corporation operates across two core business pillars:
            </div>
            <ul className="pillar-list">
              <li>Business Consulting and Development</li>
              <li>Brand Management Business</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="section-divider" />

      {/* 하단 CEO 섹션 */}
      <div className="ceo-section">
        <div className="ceo-inner">
          <div className="ceo-image">
            <img
              src="https://yogibo.kr/yogico/img/banner/boss.webp"
              alt="CEO Daejin David Park"
              loading="lazy"
            />
          </div>
          <div className="ceo-text">
            <div className="quote">
              "WE DON'T JUST TALK. WE GET THINGS DONE"
            </div>
            <div className="ceo-name">
              Daejin (David) Park, Founder and CEO
            </div>
            <div className="ceo-desc">
              After gaining 15 years of expertise across academia and industry in Israel,
              including his working at KOTRA, David returned to South Korea and launched KOISRA,
              a consulting firm specializing in facilitating cross-border business development
              between Korea, Israel, and other global markets. He later co-founded KOISRA Seed
              Partners, a startup accelerator that invests in and mentors early-stage startups
              led by serial entrepreneurs. In addition to his entrepreneurial activities, David
              authored the Korean-language book "Inside Business in Israel." Expanding his career
              into the retail sector, he established infrastructure for import, manufacturing,
              distribution, and export, for building a portfolio of lifestyle brands. David currently
              serves as CEO of Yogi Corporation, overseeing multiple businesses that reflect his broad
              experience in international business and brand development.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
