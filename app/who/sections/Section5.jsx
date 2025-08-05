'use client';

import React, { useRef, useEffect } from 'react';
import './whoSection_05.css';

export default function Section4({ id = 'sec4' }) {
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
    <section id={id} ref={ref} className="whoSection_05">
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
              src="https://yogibo.openhost.cafe24.com/yogico/step/Y_a_step_01.png"
              alt="Hojin Park"
            />
          </div>
          <h3 className="ws5-name">HOJIN PARK</h3>
          <p className="ws5-bio">
            Hojin Park is a Certified Public Accountant (CPA) with over 17 years of experience in USA.
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
              src="https://yogibo.openhost.cafe24.com/yogico/step/Y_a_step_03.png"
              alt="Hoon Lee"
            />
          </div>
          <h3 className="ws5-name">HOON LEE</h3>
          <p className="ws5-bio">
            Hoon Lee is a seasoned executive with extensive experience leading market entry,
            brand repositioning, and business turnarounds across global retail and consumer brands.
            His previous leadership roles at JellyCat, Boardriders, Lululemon, Ralph Lauren, Adidas,
            Kolon Industries, Prada Group, GS Retail, prove his ability to drive growth, manage
            large teams, and execute omni-channel strategies.
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
              src="https://yogibo.openhost.cafe24.com/yogico/step/Y_a_step_02.png"
              alt="Hyunjoong Kim"
            />
          </div>
          <h3 className="ws5-name">HYUNJOONG KIM</h3>
          <p className="ws5-bio">
            Hyunjoong Kim is a proven expert in branded consumer products, with integrated experience
            across marketing, merchandising, sales, and Go-To-Market strategies. He has led major growth
            and brand transformation initiatives at global companies such as Adidas, Under Armour,
            2XU and etc. His strengths include ERP implementation, SCM optimization, flagship store
            launches, and a strong network with sports brands and related organizations.
          </p>
          <br/>
          <div className="ws5-edu">
            <strong>Education</strong>
            <p>Yonsei University, B.A.</p>
            <p>Textile &amp; Clothing</p>
          </div>
        </article>
      </div>
    </section>
  );
}
