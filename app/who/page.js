// app/we/page.js
'use client';

import '../we/we.css';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';




export default function WePage() {
  return (
    <div className="relative">
      <Section1 id="sec1" />
      <Section2 id="sec2" />
      <Section3 id="sec3" />
      <Section4 id="sec4" />
      <Section5 id="sec5" />
    </div>
  );
}
