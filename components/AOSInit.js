'use client'; // 이 컴포넌트만 클라이언트로 지정합니다.

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      // 여기에 다른 AOS 설정도 추가할 수 있습니다.
    });
  }, []);

  return null; // 이 컴포넌트는 시각적인 UI를 렌더링하지 않습니다.
}