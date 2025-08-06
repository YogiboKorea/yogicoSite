'use client';

import React, { useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { LanguageContext } from '@/contexts/LanguageContext';
import './BrandSection_04.css'; // CSS 하나에 모두 포함

// 플러그인 한 번만 등록
Chart.register(ChartDataLabels);

export default function TripleChart() {
  const { lang } = useContext(LanguageContext);
  const barRef   = useRef(null);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);

  const barChartRef   = useRef(null);
  const lineChart1Ref = useRef(null);
  const lineChart2Ref = useRef(null);

  useEffect(() => {
    // 기존 차트 destroy
    barChartRef.current   && barChartRef.current.destroy();
    lineChart1Ref.current && lineChart1Ref.current.destroy();
    lineChart2Ref.current && lineChart2Ref.current.destroy();

    // ─── Bar 차트 (탄성력)
    if (barRef.current) {
      barChartRef.current = new Chart(barRef.current, {
        type: 'bar',
        data: {
          labels: [''],
          datasets: [
            { label: 'EPS', data: [35.0], backgroundColor: '#192A44', borderWidth: 1 },
            { label: 'EPP', data: [39.6], backgroundColor: '#66CCFF', borderWidth: 1 },
            { label: 'HRF', data: [45.5], backgroundColor: '#2C80ED', borderWidth: 1 }
          ]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true, min: 0, max: 50 } },
          plugins: {
            datalabels: { display: true },
            tooltip:   { enabled: false }
          }
        }
      });
    }
    // ─── Line 차트 1 (압축강도)
    if (lineRef1.current) {
      lineChart1Ref.current = new Chart(lineRef1.current, {
        type: 'line',
        data: {
          labels: ["0%", "10%", "25%", "50%", "75%", ""],
          datasets: [
            { label: 'EPP', data: [null,10,25,49,90], borderColor: '#192A44', tension: .1, borderWidth: 5 },
            { label: 'EPS', data: [null,8,23,49,65],   borderColor: '#66CCFF', tension: .1, borderWidth: 5 },
            { label: 'HRF', data: [null,10,15,35,55], borderColor: '#2C80ED', tension: .1, borderWidth: 5 }
          ]
        },
        options: {
          scales: {
            x: { type: 'category', position: 'bottom' },
            y: { beginAtZero: false, suggestedMin: 0, suggestedMax: 100, ticks: { display: false } }
          },
          plugins: {
            datalabels: { display: true },
            tooltip:    { enabled: false }
          }
        }
      });
    }

    // ─── Line 차트 2 (복원력)
    if (lineRef2.current) {
      lineChart2Ref.current = new Chart(lineRef2.current, {
        type: 'line',
        data: {
          labels: ["", "", "", "", "", ""],
          datasets: [
            { label: 'EPP', data: [null,0,10,20,35,50], borderColor: '#192A44', tension:.1, borderWidth:5, pointRadius:0 },
            { label: 'EPS', data: [null,0,11,16,21,26],   borderColor: '#66CCFF', tension:.1, borderWidth:5, pointRadius:0 },
            { label: 'HRF', data: [null,3,30,40,55,60],   borderColor: '#2C80ED', tension:.1, borderWidth:5, pointRadius:0 },
            { label: '',    data: [null,0,10,20,30,45],   borderColor: '#7f7f7f', borderDash:[5,5], borderWidth:1, pointRadius:0 },
            { label: '',    data: [null,0,10,15,20,25],   borderColor: '#2b7a4a', borderDash:[5,5], borderWidth:1, pointRadius:0 },
            { label: '',    data: [null,0,10,30,50,70],   borderColor: '#b93f4a', borderDash:[5,5], borderWidth:1, pointRadius:0 }
          ]
        },
        options: {
          scales: {
            x: { type: 'category', position: 'bottom', ticks: { display: true } },
            y: {
              beginAtZero: false,
              suggestedMin: 0,
              suggestedMax: 70,
              position: 'right',
              ticks: {
                display: true,
                callback: (v,i) => ["", "", "35%", "", "70%", "", "80%"][i] || ''
              }
            }
          },
          plugins: {
            datalabels: { display: true },
            tooltip:    { enabled: false }
          }
        }
      });
    }

    return () => {
      barChartRef.current   && barChartRef.current.destroy();
      lineChart1Ref.current && lineChart1Ref.current.destroy();
      lineChart2Ref.current && lineChart2Ref.current.destroy();
    };
  }, []);

  return (
    <section className={`BrandSection_04 ${lang}`}>
      {/* 제목 */}
      {lang === 'en' ? (
        <h2 className="excl-title" style={{ color: '#192a44' }}>
          SUPER BEADS (HRF)
        </h2>
      ) : (
        <h2 className="excl-title" style={{ color: '#192a44' }}>
           SUPER BEADS (HRF)
        </h2>
      )}

      {/* 설명 */}
      <p className="excl-intro">
        {lang === 'en' ? (
          <>
            Yogi Corporation has carried out extensive trials and R&amp;D over the past five years,
            leading to the successful co-development of HRF (High Resilience Foam), a specialized
            filling material for beanbag sofas, in partnership with LOTTE Chemical. Commercialized
            on March 1, 2023, HRF addresses the limitations of conventional EPS (Expanded Polystyrene)
            and EPP (Expanded Polypropylene), which are widely used in beanbags both in Korea and
            globally.
            <br/><br/>
            It delivers superior performance in terms of both technology and cost-efficiency. Additionally, HRF is an
            antibacterial bead that inhibits the growth of harmful bacteria such as Staphylococcus aureus and E. coli by
            99.9%, providing a timely solution to increased concerns over pathogens in the post-COVID-19 era.
          </>
        ) : (
          <>
            요기 코퍼레이션은 지난 5년간 광범위한 시험과 연구개발을 수행하여 롯데케미칼과 협업으로
            슈퍼 비드(HRF: High Resilience Foam)라는 특수 충전재를 공동 개발했습니다. 2023년 3월 1일 상용화된 HRF는
            기존 EPS(발포 폴리스티렌)와 EPP(발포 폴리프로필렌)의 한계를 극복합니다.
            <br/><br/>
            기술 및 비용 효율 면에서 뛰어난 성능을 제공하며, 99.9%의 항균 효과로 포스트 코로나 시대의
            병원체 우려에 대응합니다.
          </>
        )}
      </p>

      {/* 차트 블록 */}
      <div className="triple-chart">
        <div className="chart-block">
          <h4>{lang === 'en' ? 'Compressive Strength' : '압축 강도'}</h4>
          <canvas ref={lineRef1} />
          <p>
            {lang === 'en'
              ? 'Lower compressive strength means improvement of seating comfort.'
              : '압축 강도가 낮을수록 착석감이 개선됩니다.'}
          </p>
        </div>
        <div className="chart-block">
          <h4>{lang === 'en' ? 'Resilience' : '복원력'}</h4>
          <canvas ref={lineRef2} />
          <p>
            {lang === 'en'
              ? 'Higher resilience means better durability and less frequent refills.'
              : '복원력이 높을수록 내구성이 향상되며 충전 빈도가 줄어듭니다.'}
          </p>
        </div>
        <div className="chart-block">
          <h4>{lang === 'en' ? 'Elasticity' : '탄성력'}</h4>
          <canvas ref={barRef} />
          <p>
            {lang === 'en'
              ? 'Greater elasticity keeps its shape to fit any body.'
              : '높은 탄성력으로 어떤 체형에도 잘 맞는 형상을 유지합니다.'}
          </p>
        </div>
      </div>
    </section>
  );
}
