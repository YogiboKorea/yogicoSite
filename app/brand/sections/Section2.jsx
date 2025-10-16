'use client';

import React, { useRef, useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BrandSection_02.css';

const IMGS = [
  '/img/banner_yogibo_01.png',
  '/img/banner_yogibo_02.png',
  '/img/banner_yogibo_03.png',
  '/img/banner_yogibo_04.png',
  '/img/banner_yogibo_05.png',
  '/img/banner_yogibo_06.png',
  '/img/banner_yogibo_07.png',
];

export default function BrandSection_02({ id = 'BrandSec2' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  // SSR 대비
  useEffect(() => {
    setMounted(true);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting
          ? el.classList.add('play')
          : el.classList.remove('play'),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`BrandSection_02 ${lang}`}>
      <div className="ps2-wrap">

        {/* 영어/한글 텍스트 블록 */}
        <div className="ps2-text">
          {lang === 'en' && (
            <>
              <img
                src="/img/main_logo_off.png"
                alt="yogibo"
                className="ps2-logo"
              />
              <span className="ps2-present">Presented by Yogi Corporation</span>
              <p className="ps2-p">
                <strong>Yogibo</strong> is a lifestyle brand offering bean bags, living accessories, body pillows, cushions, and stuffed animals featuring various character designs.
                What set Yogibo apart is its patented technology that allows a single product to transform into multiple forms.
                <br/><br/> Founded in 2009 in the USA, Yogibo became<br className="br"/> the world’s No.1 bean bag sofa brand within just seven years. Today, Yogibo has over 160
                stores worldwide, including the USA, Canada, Japan, South Korea, Taiwan, Thailand, Singapore, and various countries across Europe.
              </p>
            </>
          )}
          {lang === 'ko' && (
            <>
              <img
                src="https://yogibo.kr/web/img/icon/new2/main_logo_off.png"
                alt="요기보"
                className="ps2-logo"
              />
              <span className="ps2-present">Yogi Corporation 제공</span>
              <p className="ps2-p">
                <strong>요기보</strong>는 빈백, 생활용 액세서리, 바디필로우, 쿠션, 다양한 캐릭터 디자인의 인형을 제공하는 라이프스타일 브랜드입니다.
                요기보만의 특징은 단일 제품이 여러 형태로 변형 가능한 특허 기술에 있습니다.
                <br/><br/> 2009년 미국에서 설립된 이후 7년 만에 세계 최대 빈백 소파 브랜드로 자리잡았으며, 현재 미국, 캐나다, 일본, 한국, 대만, 태국, 싱가포르 및 유럽 각지에 160개 이상의 매장을 보유하고 있습니다.
              </p>
            </>
          )}
        </div>

        {/* Swiper (클라이언트 전용) */}
        <div className="ps2-swiper">
          {mounted && (
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
                  <div className="ps2-card">
                    <img src={src} alt={`yogibo-${i}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* 링크 버튼 */}
        <a
          href="https://www.yogibo.kr"
          target="_blank"
          rel="noreferrer"
          className="ps2-see-more"
        >
          www.yogibo.kr
        </a>
      </div>
    </section>
  );
}
