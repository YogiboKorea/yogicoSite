'use client';

import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BusinessSection_02.css';

export default function BusinessSection_02({ id = 'bizSec2' }) {
  const { lang } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play'),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`BusinessSection_02 ${lang}`}>
      {/* English Version */}
      <div className="en">
        <div className="bs2-columns">
          <div className="bs2-primary">
            <ul className="bs2-list">
              <li className="bs2-item">
                <h3>Business<br />Consulting</h3>
                <p>
                  Unlock the designated markets<br />
                  with actionable strategies and<br />
                  tailor-made entry solutions.
                </p>
              </li>
              <li className="bs2-item">
                <h3>Market<br />Analysis</h3>
                <p>
                  Gain a comprehensive understanding<br />
                  of the markets, key trends,<br />
                  and emerging opportunities.
                </p>
              </li>
              <li className="bs2-item">
                <h3>Local Representation<br />& Business Liaison</h3>
                <p>
                  Acting on your behalf to represent<br />
                  your interests, build networks,<br />
                  and support deal-making locally.
                </p>
              </li>
            </ul>
          </div>
          <div className="bs2-primary">
            <ul className="bs2-list" id="hoe1">
              <li className="bs2-item">
                <h3>Supplier Sourcing<br />& Validation</h3>
                <p>
                  Identify, verify, and manage<br />
                  reliable manufacturers and suppliers<br />
                  for your business needs.
                </p>
              </li>
              <li className="bs2-item">
                <h3>Partner & Client<br />Matching</h3>
                <p>
                  Discover and connect with<br />
                  the right partners—distributors,<br />
                  agents, importers, or end clients.
                </p>
              </li>
              <li className="bs2-item">
                <h3>Technology Scouting<br />& Innovation Search</h3>
                <p>
                  Explore cutting-edge technologies<br />
                  and innovations from startups,<br />
                  corporates, and universities.
                </p>
              </li>
            </ul>
          </div>
          <div className="bs2-secondary" id="hoe2">
            <ul className="bs2-list">
              <li className="bs2-item">
                <h3>Business Setup &<br />Incorporation</h3>
                <p>
                  End-to-end assistance<br />
                  with company formation, licensing,<br />
                  regulatory compliance,<br />
                  and bank setup
                </p>
              </li>
              <li className="bs2-item">
                <h3>Payroll And HR<br />Services</h3>
                <p>
                  Salary calculation and payment, tax<br />
                  and insurance deductions,<br />
                  talent recruitment,<br />
                  and ongoing HR policy support
                </p>
              </li>
              <li className="bs2-item">
                <h3>Marketing, Branding &<br />Public Relations</h3>
                <p>
                  Build brand awareness<br />
                  through strategic marketing,<br />
                  PR campaigns,<br />
                  and localized messaging.
                </p>
              </li>
              <li className="bs2-item">
                <h3>e-Commerce &<br />Logistics Solutions</h3>
                <p>
                  Support for warehousing, fulfillment,<br />
                  and managing online sales channels.
                </p>
              </li>
              <li className="bs2-item">
                <h3>Apostille &<br />Notarization</h3>
                <p>
                  Provide comprehensive<br />
                  document services, including<br />
                  authentication, certification,<br />
                  notarization, and apostille
                </p>
              </li>
              <li className="bs2-item">
                <h3>Importer of Record<br />Services</h3>
                <p>
                  Ensure compliance,<br />
                  manage local product registration,<br />
                  and act as your official importer
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Korean Version */}
      <div className="ko">
        <div className="bs2-columns">
          <div className="bs2-primary">
            <ul className="bs2-list">
              <li className="bs2-item">
                <h3>비즈니스<br />컨설팅</h3>
                <p>
                  실행 가능한 전략과 맞춤형<br />
                  진출 솔루션으로 지정된 시장을<br />
                  열어 드립니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>시장<br />분석</h3>
                <p>
                  시장, 주요 트렌드 및<br />
                  새로운 기회를 종합적으로<br />
                  파악합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>현지 대리 &<br />비즈니스 연락 업무</h3>
                <p>
                  고객님의 이익을 대변하고<br />
                  네트워크를 구축하며<br />
                  현지 거래를 지원합니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="bs2-primary">
            <ul className="bs2-list" id="hoe1">
              <li className="bs2-item">
                <h3>공급업체 발굴 &<br />검증</h3>
                <p>
                  신뢰할 수 있는 제조업체와 공급업체를<br />
                  발굴, 검증, 관리합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>파트너 & 고객<br />매칭</h3>
                <p>
                  유통업체, 에이전트, 수입업체<br />
                  또는 최종고객 등 적합한 파트너를<br />
                  찾아 연결합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>기술 스카우팅 &<br />혁신 탐색</h3>
                <p>
                  스타트업, 기업, 대학의 첨단<br />
                  기술과 혁신을 탐색합니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="bs2-secondary" id="hoe2">
            <ul className="bs2-list">
              <li className="bs2-item">
                <h3>회사 설립 &<br />등록 지원</h3>
                <p>
                  법인 설립, 인허가, 규제 준수<br />
                  및 은행 계좌 개설까지<br />
                  토탈 지원을 제공합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>급여 및 인사<br />서비스</h3>
                <p>
                  급여 산정·지급, 세무·보험 공제,<br />
                  인재 채용 및 HR 정책<br />
                  지원을 계속 제공합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>마케팅·브랜딩 &<br />홍보(IR)</h3>
                <p>
                  전략적 마케팅, 홍보 캠페인 및<br />
                  현지화 메시지로 브랜드 인지도를<br />
                  구축합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>이커머스 &<br />물류 솔루션</h3>
                <p>
                  창고 관리, 풀필먼트 및 온라인<br />
                  판매 채널 관리를 지원합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>아포스티유 &<br />공증 서비스</h3>
                <p>
                  인증, 증명, 공증 및 아포스티유<br />
                  문서 서비스를 제공합니다.
                </p>
              </li>
              <li className="bs2-item">
                <h3>수입자 대행<br />서비스</h3>
                <p>
                  법규 준수를 보장하고,<br />
                  현지 제품 등록을 관리하며,<br />
                  공식 수입자로 활동합니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
