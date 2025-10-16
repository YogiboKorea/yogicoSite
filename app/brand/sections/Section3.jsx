'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BrandSection_03.css';

const IMGS = [
  '/img/img_001.png',
  '/img/img_002.png',
  '/img/img_003.png',
  '/img/img_004.png',
  '/img/img_005.png',
  '/img/img_006.png',
  '/img/img_007.png',
];

export default function BrandSection_03({ id = 'BrandSec3' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`BrandSection_03 ${lang}`}>
      <div className="ps3-wrap">
        {/* 1) 텍스트 블록 */}
        <div className="ps3-text">
          {lang === 'en' && (
            <>
              <img
                src="/img/gnb_logo24.png"
                alt="SallyFeel"
                className="ps3-logo"
              />
              <span className="ps3-present">Developed by Yogi Corporation</span>
              <p className="ps3-p">
                <strong>SallyFeel</strong> is the first "Well-Living" brand, inspired by the belief that good things happen even by chance. We aim to bring moments of delightful serendipity into everyday life.
                <br/><br/>
                By combining wellness and living, SallyFeel goes beyond simply promoting a healthy lifestyle, proposing a holistic Well-Living way of life that enhances quality of life and encourages harmony in daily routines.
                <br/>
                SallyFeel embraces a positive worldview where abundance flows naturally and good things find their way into our customers’ lives.
              </p>
            </>
          )}
          {lang === 'ko' && (
            <>
              <img
                src="/img/gnb_logo24.png"
                alt="SallyFeel"
                className="ps3-logo"
              />
              <span className="ps3-present">Yogi Corporation 개발</span>
              <p className="ps3-p">
                <strong>SallyFeel</strong>은 우연에도 좋은 일이 일어난다는 믿음에서 영감을 받은 첫 번째 “웰리빙(Well-Living)” 브랜드입니다. 일상 속에서 뜻밖의 기쁨을 선사하는 순간을 추구합니다.
                <br/><br/>
                웰니스와 리빙을 결합하여 단순한 건강한 라이프스타일을 넘어 삶의 질을 높이고 일상에 조화를 더하는 총체적 웰리빙 방식을 제안합니다.
                <br/>
                SallyFeel은 풍요가 자연스럽게 흐르고 좋은 일이 고객의 삶에 스며든다는 긍정적인 세계관을 지향합니다.
              </p>
            </>
          )}
        </div>

        {/* 3) Swiper 슬라이더 */}
        <div className="ps3-swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              0:   { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 4 },
            }}
          >
            {IMGS.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="ps3-card">
                  <img src={src} alt={`slide-${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2) 버튼: 슬라이더 바로 위로 */}
        <a
          href="https://www.sallyfeel.com"
          target="_blank"
          rel="noreferrer"
          className="ps3-see-more"
        >
          {lang === 'en' ? 'www.sallyfeel.com' : 'www.sallyfeel.com'}
        </a>
      </div>
    </section>
  );
}
