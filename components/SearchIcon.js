// SearchIcon.js
import React from 'react';
import './SearchIcon.css';

export default function SearchIcon({ mapOpen, setMapOpen }) {
  const toggleMap = () => setMapOpen(o => !o);

  return (
    <>
      {/* 1) 검색 아이콘 버튼 */}
      <button className="search-icon-btn search-icon-btnContact" onClick={toggleMap}>
        <img 
          src="https://yogibo.openhost.cafe24.com/yogico/img/icon/icon_map.png"
          alt="Search map"
        />
      </button>

      {/* 2) 지도 + 정보 슬라이드 패널 */}
      <div className={`map-overlay ${mapOpen ? 'open' : ''}`}>
        {/* 2-1) 좌측: 구글맵 */}
        <div className="map-container">
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=125%20Bongeunsa-ro%20Gangnam-gu%20Seoul%20Republic%20of%20Korea&output=embed"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* 2-2) 우측: 회사 정보 */}
        <div className="map-info">
          <button className="close-btn" onClick={toggleMap} />
          <div className="info-content">
            <img
              src="https://yogibo.kr/yogico/img/icon/Signature03.png"
              alt="Yogi Corporation"
              className="info-logo"
            />
            <address>
            #201, 125, Bongeunsa-ro,<br/>
            Gangnam-gu, Seoul, Korea<br/><br/>
            <a href="tel:+82-10-2880-0721">
              +82-10-2880-0721 
            </a><br/>
            <a href="mailto:contact@yogico.kr">contact@yogico.kr</a>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

