'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/contexts/LanguageContext';
import './NewsSection_02.css';

export default function Section1({ id = 'news' }) {
  const { lang } = useContext(LanguageContext);

  const newsItems = [

    
    {
      id: 12312312,
      imgSrc: '/img/banner_002_1030.png',
      title_en: '"Special Feature Series by Sports Seoul × International Wellness Association',
      excerpt_en:
        'A brand began as a mark seared by fire — a symbol to distinguish oneself from others, a sign of ownership. It served as proof of trust, yet at the same time, it drew boundaries between people.But now, a brand is no longer an external mark. We are moving from an era of outward distinction to one that connects the textures of our inner selves. People no longer give their hearts to brands that merely appear perfect. When a brand — once a symbol of possession — begins to breathe within the rhythm of everyday life, that is when true trust begins.',
      title_ko: '스포츠서울 × 국제웰니스협회 공동 특집기획시리즈',
      excerpt_ko:
        '삶이 브랜드가 될 때 웰니스가 시작된다 - 완벽보다 진심, 소유보다 공존 브랜드는 불로 지진 인장에서 시작됐다. 타인과 나를 구분하고, 소유를 증명하기 위한 표식이었다. 그 표식은 신뢰의 증거였지만, 동시에 사람과 사람 사이의 경계를 만들었다. 그러나 이제 브랜드는 외부의 표시가 아니다. 겉을 구분하던 시대에서, 내면의 결을 이어주는 시대로 옮겨가고 있다. 사람들은 더 이상 완벽하게 보이는 브랜드에 마음을 주지 않는다. 소유의 상징이었던 브랜드가 삶의 리듬 속으로 들어와 함께 숨 쉴 때, 비로소 신뢰가 시작된다.',
      link: 'https://n.news.naver.com/article/468/0001189987?lfrom=kakao ',
    },


    {
      id: 213123,
      imgSrc: '/img/banner_002_0930.jpg',
      title_en: '"Yogi Corporation Marks 9th Anniversary with Organizational and Business Restructuring',
      excerpt_en:
        'Yogibo’s exclusive distributor in Korea, Yogi Corporation, has restructured its organization and business framework on the occasion of its 9th anniversary. Through this restructuring, the company plans to streamline its system into two main divisions — Brand Operations and Business Development & Consulting — while strengthening its foundation for global market expansion.',
      title_ko: '요기코퍼레이션, 창립 9주년 맞아 조직·사업 개편',
      excerpt_ko:
        '요기보의 국내 총판 기업 요기코퍼레이션이 창립 9주년을 맞아 조직과 사업 구조를 개편했다. 회사는 이번 개편을 통해 브랜드 운영 사업부, 사업개발 및 컨설팅 사업부 두 축으로 체제를 정비하고 글로벌 시장 진출 기반을 강화한다는 계획이다.',
      link: 'https://www.nbntv.co.kr/news/articleView.html?idxno=4010035 ',
    },



    {
      id: 142,
      imgSrc: '/img/banner_002_0825.png',
      title_en: '"Yogibo Opens Pop-Up Store at The Hyundai Seoul, Showcases Relaxation Experience Space.',
      excerpt_en:
        'Global beanbag-sofa brand Yogibo has opened a pop-up store on the 5th floor of The Hyundai Seoul. (Running from today through the 7th of next month.) Visitors can try Yogibo products in exhibition and relaxation zones and take part in on-site promotions.',
      title_ko: '요기보, 더현대 서울 팝업스토어 오픈… 휴식 체험 공간 선보여',
      excerpt_ko:
        '글로벌 빈백 소파 브랜드 요기보가 더현대 서울 5층에 팝업스토어를 열었다. (운영: 오늘부터 내달 7일까지) 방문객은 제품 전시·휴식 체험 공간과 현장 프로모션을 경험할 수 있다',
      link: 'https://www.nbntv.co.kr/news/articleView.html?idxno=4007351 ',
    },


    {
      id: 14,
      imgSrc: '/img/banner_001_0825.png',
      title_en: '"Significant synergies are expected by leveraging Busan Port and Israeli networks."',
      excerpt_en:
        'Yogi Corporation CEO Park Dae-jin said leveraging Busan Port and Israeli networks could create major synergies, prompting bilateral cooperation to expand exports and investment.',
      title_ko: '“부산 항만·이스라엘 네트워크 활용 땐 시너지 클 것”',
      excerpt_ko:
        '요기코퍼레이션 박대진 대표는 부산 항만과 이스라엘 네트워크 연계로 큰 시너지가 가능하다며 양국 협력을 통해 수출·투자 등 사업 확장을 모색한다고 밝혔다.',
      link: 'https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=2100&key=20210531.22021008370 ',
    },

    {
      id: 1,
      imgSrc: '/img/HDC%EC%98%81%EC%B0%BD.png',
      title_en: 'Family Month Concert with HDC Youngchang and Yogibo',
      excerpt_en:
        'HDC Youngchang and Yogibo stage Family Month event May 10–18, 2025 at Hanam Starfield, showcasing new 2025 Kurzweil pianos with Yogibo relaxation zones; opening day features K-pop and jazz.',
      title_ko: 'HDC 영창과 요기보의 패밀리 먼스 콘서트',
      excerpt_ko:
        'HDC 영창과 요기보가 2025년 5월 10일부터 18일까지 하남 스타필드에서 패밀리 먼스 행사를 개최합니다. 2025년형 커츠와일 피아노와 요기보 휴식 존을 선보이며, 첫날에는 K-팝과 재즈 공연이 열립니다.',
      link: 'https://www.mk.co.kr/news/business/11310368',
    },
    {
      id: 2,
      imgSrc: '/img/봄꽃.jpg',
      title_en: 'Discover the Unique Beauty of Seoul at 2025 Beauty Travel Week',
      excerpt_en:
        'Yogibo, the global beanbag brand, sponsored the 2025 Yeouido Spring Flower Festival in Yeongdeungpo held from April 4 to 8. As an official supporter, Yogibo offered special programs and branded relaxation zones during the festival.',
      title_ko: '2025 서울 뷰티 트래블 위크에서 서울의 매력을 경험하세요',
      excerpt_ko:
        '글로벌 빈백 브랜드 요기보가 2025년 4월 4일부터 8일까지 영등포 여의도 봄꽃 축제를 공식 후원했습니다. 요기보는 특별 프로그램과 브랜드 휴식 존을 제공하여 방문객에게 편안함을 선사했습니다.',
      link: 'https://www.sisunnews.co.kr/news/articleView.html?idxno=222683',
    },
    {
      id: 3,
      imgSrc: '/img/뷰티트래블.jpg',
      title_en: 'Yogibo Participates in the 2024 Seoul Beauty Travel Week as a Sponsor',
      excerpt_en:
        'Yogibo is sponsoring the 2024 Seoul Beauty Travel Week, partnering with Haru Meditation to debut a signature beanbag wellness program. Held at Seoul Forest, the event features yoga, music, singing bowls, dance meditations, and exclusive giveaways.',
      title_ko: '요기보, 2024 서울 뷰티 트래블 위크 공식 후원',
      excerpt_ko:
        '요기보가 하루 명상과 협업하여 2024 서울 뷰티 트래블 위크를 공식 후원합니다. 서울숲에서 열리는 행사에는 요가, 음악, 싱잉볼, 댄스 명상과 특별 기념품 증정이 포함됩니다.',
      link: 'http://www.kdpress.co.kr/news/articleView.html?idxno=132087',
    },
    {
      id: 4,
      imgSrc: '/img/뷰티트래블2.jpg',
      title_en: 'Discover the Unique Beauty of Seoul at 2024 Seoul Beauty Travel Week',
      excerpt_en:
        'The 2024 Seoul Beauty Travel Week runs from September 23 to 29 across Seoul Forest Park and Seongdong-gu, featuring over 50 parks, galleries, museums, and local shops under themes of revival, refreshment, and rejuvenation.',
      title_ko: '2024 서울 뷰티 트래블 위크에서 서울의 아름다움을 만끽하세요',
      excerpt_ko:
        '2024 서울 뷰티 트래블 위크가 9월 23일부터 29일까지 서울숲공원 및 성동구 일대에서 열립니다. 부흥, 상쾌함, 재충전 테마로 50여 개 공원·갤러리·박물관·로컬샵이 참여합니다.',
      link: 'https://www.businesswire.com/news/home/20240919559349/en/Discover-the-Unique-Beauty-of-Seoul-at-2024-Seoul-Beauty-Travel-Week',
    },
    {
      id: 56,
      imgSrc: '/img/보스이미지.jpg',
      title_en: 'Bose Offers a Unique Experience in the Brand Zone at the Beenzino Concert',
      excerpt_en:
        'At Beenzino’s sold-out concert, Bose hosted a cinema-style booth streaming exclusive videos and unreleased audio on its speakers. Fans who shared on Instagram could win signed CDs and Bose headphones.',
      title_ko: '빈지노 콘서트 브랜드 존에서 보스의 특별 경험 제공',
      excerpt_ko:
        '빈지노 매진 콘서트에서 보스는 시네마 스타일 부스를 운영하며 독점 영상과 미공개 오디오를 스피커로 스트리밍했습니다. 인스타그램 공유 고객에게는 사인 CD와 보스 헤드폰을 증정했습니다.',
      link: 'https://www.businesswire.com/news/home/20240919559349/en/Discover-the-Unique-Beauty-of-Seoul-at-2024-Seoul-Beauty-Travel-Week',
    },
    {
      id: 41,
      imgSrc: '/img/신세계팝.png',
      title_en: 'Gwangju Shinsegae Operates a Global Lifestyle Yogibo Experience Zone',
      excerpt_en:
        'Gwangju Shinsegae is hosting a Yogibo experience zone in its main plaza from June 18 to 30 under the “Perfect Relaxation, Yogibo Therapy” theme, offering premium beanbags and body pillows amid soothing aroma therapy sessions.',
      title_ko: '광주 신세계, 요기보 글로벌 체험존 운영',
      excerpt_ko:
        '광주 신세계가 6월 18일부터 30일까지 “완벽한 휴식, 요기보 테라피”를 주제로 메인 광장에서 프리미엄 빈백과 바디필로우를 제공하며 아로마 테라피 세션을 진행합니다.',
      link: 'https://view.asiae.co.kr/article/2024062316474142366',
    },
    {
      id: 441,
      imgSrc: '/img/img_yogicorporation2.jpg',
      title_en: 'Yogi Corporation Signs Filling Material Supply Agreement with Bonita',
      excerpt_en:
        'Yogi Corporation, Yogibo’s Korean distributor, will supply High Resilience Foam (HRF) to beanbag maker Bonita. First-Class HRF provides superior durability, elasticity and resilience to boost product quality.',
      title_ko: '요기 코퍼레이션, 보니타에 충전재 공급 계약 체결',
      excerpt_ko:
        '요기 코퍼레이션(요기보 한국 공식 유통사)이 보니타에 고탄성 폼(HRF)을 공급합니다. First-Class HRF는 뛰어난 내구성, 탄성력, 복원력을 제공하여 제품 품질을 향상시킵니다.',
      link: 'https://www.news1.kr/industry/general-industry/5511174',
    },
    {
      id: 4441,
      imgSrc: '/img/뉴스_숙면여행존.jpg',
      title_en: 'Yogibo Concludes Sleep Travel Zone in Partnership with S-Omni',
      excerpt_en:
        'Yogibo closed its “Sleep Travel Zone” at Hyundai Department Store Pangyo on January 20 with S-OMNI, featuring the Waseda-University–validated Yogibo Max and AI sleep coaching via the upcoming SOMNIA app. Over two days, 400 attendees rated it 8/10 or higher, and 98% said they would recommend the experience.',
      title_ko: '요기보, 에스옴니와 함께 수면 여행존 종료',
      excerpt_ko:
        '요기보는 1월 20일 현대백화점 판교점에서 S-OMNI와 함께 “수면 여행존”을 종료했습니다. 와세다대 검증 요기보 맥스와 AI 수면 코칭을 제공했으며, 2일간 400명 중 98%가 추천 의사를 밝혔습니다.',
      link: 'https://www.ajunews.com/view/20240125161636889',
    },
    {
      id: 444431,
      imgSrc: '/img/스카이-요기보존.jpg',
      title_en: 'Seongnam FC Opens SKY Yogibo Zone at October 7 Home Match!',
      excerpt_en:
        'Seongnam FC opened a “SKY Yogibo Zone” at its October 7 home match vs. Chungnam Asan at Tancheon Stadium, featuring Yogibo Zoola beanbag sofas and complimentary Yogibo accessories for fans.',
      title_ko: '성남 FC, 10월 7일 홈경기서 SKY 요기보 존 오픈',
      excerpt_ko:
        '성남 FC가 10월 7일 탄천종합운동장에서 열린 충남 아산전 홈경기에서 “SKY 요기보 존”을 오픈했습니다. 요기보 주라 빈백 소파와 팬에게 무료 액세서리를 제공했습니다.',
      link: 'https://www.interfootball.co.kr/news/articleView.html?idxno=615321',
    },
    {
      id: 23423,
      imgSrc: '/img/보코서울강남.jpg',
      title_en: 'Boco Seoul Gangnam Offers “Camping with Yogibo” Package',
      excerpt_en:
        'IHG’s voco Seoul Gangnam introduces a “Camping with Yogibo” package, transforming suites into urban glamping zones with Yogibo Zoola loungers, private pool, projector, and in-room Camp Set dining.',
      title_ko: '보코 서울 강남, “요기보 캠핑” 패키지 선보여',
      excerpt_ko:
        '보코 서울 강남이 “요기보 캠핑” 패키지를 선보입니다. 요기보 주라 라운저, 전용 수영장, 프로젝터 및 인룸 캠프 세트 식사를 제공합니다.',
      link: 'https://www.cooknchefnews.com/news/view/1065573194725085',
    },
    {
      id: 23423423,
      imgSrc: '/img/노블레스-수현.jpg',
      title_en: 'Noblesse Suhyun Partners with Lifestyle Brand Yogibo',
      excerpt_en:
        'Marriage Information Company Noblesse Suhyun partners with Yogibo to offer premium beanbag experiences and curated relationship services.',
      title_ko: '노블레스수현, 라이프스타일 브랜드 요기보와 파트너십',
      excerpt_ko:
        '결혼정보회사 노블레스수현이 요기보와 파트너십을 체결하여 프리미엄 빈백 체험과 맞춤형 결혼 상담 서비스를 제공합니다.',
      link: 'https://www.cooknchefnews.com/news/view/1065573194725085',
    },
    {
      id: 324,
      imgSrc: '/img/창원LG세이커스.jpg',
      title_en: 'Yogibo Strengthens Winter Sports Collaborations',
      excerpt_en:
        'Yogibo teamed with Changwon LG Sakers for the 2022–23 KBL season, installing branded seating and drop sofas in team colors; continued partnership with Wonju DB Promy.',
      title_ko: '요기보, 겨울 스포츠 협업 강화',
      excerpt_ko:
        '요기보가 2022–23 KBL 시즌 창원 LG 세이커스와 협업하여 팀 컬러 빈백 좌석과 드롭 소파를 설치했습니다. 원주 DB 프로미와도 파트너십을 이어갑니다.',
      link: 'https://sports.khan.co.kr/article/202301061228003?pt=nv',
    },
    {
      id: 32443,
      imgSrc: '/img/어썸피플.jpg',
      title_en: 'Yogibo’s Awesome People Campaign Supports Mothers',
      excerpt_en:
        'Yogibo’s Awesome People campaign invites pregnancy & childbirth stories to raise awareness of low birth rates. Participants receive vouchers; winners get Yogibo Mom Sets and additional gifts.',
      title_ko: '요기보 Awesome People 캠페인으로 엄마 지원',
      excerpt_ko:
        '요기보의 Awesome People 캠페인이 출산 이야기를 모집하여 저출산 문제를 알립니다. 참가자 전원에게 바우처를, 우승자에게 요기보 맘 세트와 선물을 증정합니다.',
      link: 'https://www.babytimes.co.kr/news/articleView.html?idxno=61578',
    },
    {
      id: 123123,
      imgSrc: '/img/img_news_modju.jpg',
      title_en: 'Yogibo Launches ‘Modju’ Modular Sofa in Korea',
      excerpt_en:
        'Yogibo launched its Modju modular sofa in Korea on January 10, featuring configurable Base, Top, and Corner modules. Online sales began January 10; in-store from January 17.',
      title_ko: '요기보, 한국에 모듈형 소파 ‘Modju’ 출시',
      excerpt_ko:
        '요기보가 1월 10일 한국에 모듈형 소파 Modju를 출시했습니다. 베이스, 탑, 코너 모듈로 구성되며, 온라인 판매는 10일부터, 매장 판매는 17일부터 시작됩니다.',
      link: 'https://www.edaily.co.kr/news/read?newsId=02010646632196408&mediaCodeNo=257&OutLnkChk=Y',
    },
    {
      id: 123143523,
      imgSrc: '/img/유연석.jpg',
      title_en: 'Yogibo Selects Actor Yoo Yeon-seok as Official Brand Model',
      excerpt_en:
        'Yogibo appointed Yoo Yeon-seok as its official Korean model on December 10, 2021. A special ad campaign launched December 17 with collectible video photo cards and Max sofa discounts.',
      title_ko: '요기보, 배우 유연석을 공식 모델로 선정',
      excerpt_ko:
        '요기보가 2021년 12월 10일 배우 유연석을 공식 한국 모델로 선정했습니다. 12월 17일 캠페인과 영상 포토카드, 맥스 소파 할인 이벤트가 시작되었습니다.',
      link: 'https://www.segyebiz.com/newsView/20211210508236?OutUrl=naver',
    },
    {
      id: 234234,
      imgSrc: '/img/드류베리모어.jpg',
      title_en: 'Yogibo Selects Hollywood Actress Drew Barrymore as Brand Advertising Model',
      excerpt_en:
        'Yogibo signed Drew Barrymore as its advertising model; its first commercial—a playful parody of The Drew Barrymore Show—debuted on November 17.',
      title_ko: '요기보, 드류 베리모어를 광고 모델로 기용',
      excerpt_ko:
        '요기보가 할리우드 배우 드류 베리모어를 광고 모델로 기용했습니다. 첫 번째 광고는 11월 17일 드류 베리모어 쇼 패러디로 공개되었습니다.',
      link: 'https://www.segyebiz.com/newsView/20211118516199?OutUrl=naver',
    },
    {
      id: 34234,
      imgSrc: '/img/img_news_런칭.jpg',
      title_en: 'Yogibo Launches Hybrid Beanbag Sofa',
      excerpt_en:
        'On November 8, 2021, Yogibo launched a hybrid beanbag sofa featuring a patented filling with 9–10× the durability of EPS and 5–7× that of EPP.',
      title_ko: '요기보, 하이브리드 빈백 소파 출시',
      excerpt_ko:
        '2021년 11월 8일 요기보가 특허 충전재를 적용한 하이브리드 빈백 소파를 출시했습니다. EPS 대비 9–10배, EPP 대비 5–7배 내구성을 제공합니다.',
      link: 'https://www.segyebiz.com/newsView/20211108508168',
    },
    {
      id: 23422334,
      imgSrc: '/img/img_news_kakaofriends.jpg',
      title_en: 'Yogibo Officially Launches Kakao Friends Edition',
      excerpt_en:
        'Yogibo’s Kakao Friends Edition—its second official licensing collaboration—features beanbag sofas and pillows adorned with popular Kakao Friends characters.',
      title_ko: '요기보, 카카오프렌즈 에디션 공식 출시',
      excerpt_ko:
        '요기보의 두 번째 공식 라이선스 협업 카카오프렌즈 에디션이 출시되었습니다. 인기 캐릭터가 적용된 빈백 소파와 쿠션을 선보입니다.',
      link: 'https://www.discoverynews.kr/news/articleView.html?idxno=654877',
    },
    {
      id: 3243,
      imgSrc: '/img/img_yogicorporation.jpg',
      title_en: 'Yogibo Korea Changes Company Name to Yogi Corporation',
      excerpt_en:
        'Yogi Korea rebrands as Yogi Corporation, evolving into a smart lifestyle platform with AI-powered home-furnishing recommendations. Founded in July 2016, it leads the beanbag sofa market.',
      title_ko: '요기보 코리아, 사명 요기 코퍼레이션으로 변경',
      excerpt_ko:
        '요기보 코리아가 사명을 요기 코퍼레이션으로 변경하고 AI 홈 퍼니싱 추천을 제공하는 스마트 라이프스타일 플랫폼으로 진화합니다. 2016년 7월 설립되어 빈백 소파 시장을 선도하고 있습니다.',
      link: 'https://www.news2day.co.kr/article/20210602500064',
    },
    {
      id: 23423425,
      imgSrc: '/img/img_news_인천면세점 copy.jpg',
      title_en: 'Yogibo Opens First Duty-Free Shop at Incheon Airport',
      excerpt_en:
        'Yogibo opened its first duty-free shop at Hyundai Duty Free in Incheon Airport Terminal 1 on December 1, offering premium beanbag sofas, travel cover sets, character plush toys, body pillows, and portable accessories.',
      title_ko: '요기보, 인천공항 면세점 1호점 오픈',
      excerpt_ko:
        '요기보가 12월 1일 인천공항 제1터미널 현대면세점에 첫 면세점을 열었습니다. 프리미엄 빈백 소파, 여행 커버 세트, 캐릭터 인형, 바디필로우, 휴대용 액세서리를 판매합니다.',
      link: 'https://www.kdfnews.com/news/articleView.html?idxno=62132',
    },
  ];

  return (
    <section id={id} className="NewsSection_02">
      <div className="NewsSection_02_header">
      </div>
      <div className="NewsSection_02_grid">
        {newsItems.map(item => (
          <div key={item.id} className="NewsSection_02_card">
            <Link href={item.link} >
            <div className="NewsSection_02_image">
              <img
                src={item.imgSrc}
                alt={lang === 'en' ? item.title_en : item.title_ko}
              />
            </div>
            <h2 className="NewsSection_02_cardTitle">
              {lang === 'en' ? item.title_en : item.title_ko}
            </h2>
            <p className="NewsSection_02_cardExcerpt">
              {lang === 'en' ? item.excerpt_en : item.excerpt_ko}
            </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
