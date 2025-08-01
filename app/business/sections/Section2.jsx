// 'use client';
import React, { useRef, useEffect } from 'react';
import './BusinessSection_02.css';

export default function BusinessSection_02({ id = 'bizSec2' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? el.classList.add('play') : el.classList.remove('play');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="BusinessSection_02">




      <div className="bs2-columns">
  
        {/* 그 다음 3개 */}
        <div className="bs2-primary">
          <ul className="bs2-list">
            <li className="bs2-item">
              <h3>
              Business<br /> Consulting
              </h3>
              <p>
            Unlock the designated markets <br/>
            with actionable strategies and<br/>
            tailor-made entry solutions.
              </p>
            </li>
            <li className="bs2-item">
              <h3>Market<br /> Analysis</h3>
            <p>
                Gain a comprehensive understanding<br/>
                of the markets, key trends,<br/>
                and emerging opportunities.<br/>
              </p>
            </li>
            <li className="bs2-item">
              <h3>
                Local Representation <br/>
                & Business Liaison
              </h3>
              <p>
                Acting on your behalf to represent <br/>
                  your interests, build networks,<br/>
                  and support deal-making locally.<br/>
              </p>
            </li>
          </ul>
        </div>


        {/* 그 다음 3개 */}
        <div className="bs2-primary">
          <ul className="bs2-list"  id="hoe1">
            <li className="bs2-item">
              <h3>
                Supplier Sourcing<br />
                & Validation
              </h3>
              <p>
              Identify, verify, and manage<br/>
              reliable manufacturers and suppliers<br/> for your business needs.
              </p>
            </li>
            <li className="bs2-item">
              <h3>Partner & Client <br />Matching</h3>
              <p>
              Discover and connect with<br/>
              the right partners—distributors,<br/> agents, importers, or end clients.
              </p>
            </li>
            <li className="bs2-item">
              <h3>
                Technology Scouting <br />
                & Innovation Search
              </h3>
              <p>
              Explore cutting-edge technologies<br/> and innovations from startups, <br/>corporates, and universities.
              </p>
            </li>
          </ul>
        </div>

        {/* 기존 하단 6개 */}
        <div className="bs2-secondary" id="hoe2">
          <ul className="bs2-list">
            <li className="bs2-item">
              <h3>
                Business Setup &<br />
                Incorporation
              </h3>
              <p>
                  End-to-end assistance <br/>
                  with company formation, licensing,<br/> regulatory compliance,<br/>
                  and bank setup<br/>
              </p>
            </li>
            <li className="bs2-item">
              <h3>Payroll And HR<br /> Services</h3>
              <p>
                Salary calculation and payment, tax<br/>
                and insurance deductions,<br/>
                talent recruitment,<br/>
                and ongoing HR policy support
              </p>
            </li>
            <li className="bs2-item">
              <h3>
                Marketing, Branding &<br />
                Public Relations
              </h3>
              <p>
                  Build brand awareness<br/>
                  through strategic marketing,<br/>
                  PR campaigns,<br/>
                  and localized messaging.
              </p>
            </li>
            <li className="bs2-item">
              <h3>
                e-Commerce &<br />
                Logistics Solutions
              </h3>
              <p>
                Support for warehousing, fulfillment,<br />
                and managing online sales channels.
              </p>
            </li>
            <li className="bs2-item">
              <h3>
                Apostille &<br />
                Notarization
              </h3>
              <p>
              Provide comprehensive<br />
              document services, including <br />authentication, certification, <br />notarization, and apostille
              </p>
            </li>
            <li className="bs2-item">
              <h3>Importer of Record<br /> Services</h3>
              <p>
              Ensure compliance,<br />
              manage local product registration,<br /> and act as your official importer 
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
