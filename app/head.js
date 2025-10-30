// app/head.js
export default function Head() {
  return (
    <>
      {/* 기본 메타 (수정됨) */}
      <title>(주)요기코퍼레이션</title>
      <meta
        name="description"
        content="요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다. 회사 소개, 주요 서비스, 채용 정보를 확인하세요."
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

      <link rel="icon" href="/yogico.ico" type="image/x-icon" sizes="16x16" />
      {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" /> */}
      <link rel="apple-touch-icon" href="/yogico.ico" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph (수정됨) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="(주)요기코퍼레이션" />
      <meta
        property="og:description"
        content="요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다. 회사 소개, 주요 서비스, 채용 정보를 확인하세요."
      />
      <meta
        property="og:image"
        content="/img/symbol.png" 
      />
      <meta property="og:url" content="https://yogico.kr/" />

      {/* Twitter Card (수정됨) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="(주)요기코퍼레이션" />
      <meta
        name="twitter:description"
        content="요기코퍼레이션은 브랜드와 기술 개발을 통해 국내외 라이프스타일 시장을 선도합니다. 회사 소개, 주요 서비스, 채용 정보를 확인하세요."
      />
      <meta
        name="twitter:image"
        content="/img/symbol.png" 
      />
    </>
  );
}