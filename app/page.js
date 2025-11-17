import React from 'react';

import MainSection from '@/components/MainSection';
import Section01 from '../components/Section01';
import Section02 from '../components/Section02';
import Section03 from '@/components/Section03';
import AOSInit from '@/components/AOSInit';

export default function Home() {;

  return (
    <div className="snap-container">
      <AOSInit/>
      <MainSection />
      <Section01 />
      <Section02 />
      <Section03 />

    </div>
  );
}
