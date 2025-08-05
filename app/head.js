// app/head.js
export default function Head() {
    return (
      <>
        {/* 기본 메타 */}
        <title>YOGI CORPORATION</title>
        <meta
          name="description"
          content="브랜드와 관련 기술 개발을 통해 국내외 라이프스타일 시장을 변화시킵니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
  
        {/* 검색엔진 인증 */}
        <meta
          name="google-site-verification"
          content="t6Dvzru0Y2bmv7Q62OpJWPyEo7qDCBTWK1Vg-Wz6NKw"
        />
        <meta
          name="naver-site-verification"
          content="3afd7285280e2ef8b340d6899e132b6d32432a5f"
        />
  
        {/* 파비콘 & 매니페스트 */}
        <link rel="icon" href="/yogico.ico" />
        <link rel="shortcut icon" href="/yogico.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/yogico.ico" />
        <link rel="manifest" href="/manifest.json" />
  
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="(주)요기코퍼레이션" />
        <meta
          property="og:description"
          content="브랜드와 관련 기술 개발을 통해 국내외 라이프스타일 시장을 변화시킵니다."
        />
        <meta
          property="og:image"
          content="https://yogibo.openhost.cafe24.com/img/icon/symbol.png"
        />
        <meta property="og:url" content="https://yogico.kr" />
  
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="(주)요기코퍼레이션" />
        <meta
          name="twitter:description"
          content="브랜드와 관련 기술 개발을 통해 국내외 라이프스타일 시장을 변화시킵니다."
        />
        <meta
          name="twitter:image"
          content="https://yogibo.openhost.cafe24.com/img/icon/symbol.png"
        />
      </>
    )
  }
  