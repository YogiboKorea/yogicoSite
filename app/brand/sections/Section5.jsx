'use client';

import React, { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BrandSection_05.css';

export default function BrandSection_05({ id = 'BrandSec5' }) {
  const { lang } = useContext(LanguageContext);

  return (
    <section id={id} className={`BrandSection_05 ${lang}`}>
      <h2 className="bs5-heading">
        {lang === 'en' ? (
          <>PATENT &amp; DESIGN REGISTRATION</>
        ) : (
          <>PATENT &amp; DESIGN REGISTRATION</>
        )}
      </h2>

      <div className="bs5-inner">
        {/* 1st item */}
        <div className="bs5-item">
          <h3 className="bs5-item-title">
            {lang === 'en' ? 'HYBRID FILLING MATERIAL' : '하이브리드 충전재'}
          </h3>
          <p className="bs5-item-ref">
            {lang === 'en'
              ? 'PCT/KR2021/014299 · Issued Oct 15, 2021'
              : 'PCT/KR2021/014299 · 등록일 2021년 10월 15일'}
          </p>
          <p className="bs5-item-desc">
            {lang === 'en' ? (
              <>
                A hybrid filling material comprising expanded<br />
                polystyrene and/or expanded polypropylene
              </>
            ) : (
              <>
                팽창 폴리스티렌 및/또는 팽창 폴리프로필렌을<br />
                포함하는 하이브리드 충전재
              </>
            )}
          </p>
          <div className="bs5-item-img">
            <img
              src="https://yogibo.openhost.cafe24.com/yogico/img/mainBanner/data1.jpg"
              alt={lang === 'en' ? 'Certificate of Patent' : '특허 증명서'}
            />
          </div>
        </div>

        {/* 2nd item */}
        <div className="bs5-item">
          <h3 className="bs5-item-title">
            {lang === 'en' ? 'REFILL CAP FOR BEANBAG' : '빈백 리필 캡'}
          </h3>
          <p className="bs5-item-ref">
            {lang === 'en'
              ? '3020210043826 · Issued Sep 13, 2021'
              : '3020210043826 · 등록일 2021년 9월 13일'}
          </p>
          <p className="bs5-item-desc">
            {lang === 'en' ? (
              <>
                A filling cap that enables a filler contained in a<br />
                packaging container to be charged into a beanbag
              </>
            ) : (
              <>
                포장 용기에 담긴 충전재를<br />
                빈백으로 주입할 수 있는 리필 캡
              </>
            )}
          </p>
          <div className="bs5-item-img">
            <img
              src="https://yogibo.openhost.cafe24.com/yogico/img/icon/d2.png"
              alt={lang === 'en' ? 'Certificate of Design Registration' : '디자인 등록 증명서'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
