'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { n:'01', title:'It starts with a sheet.', copy:'Your grades are already on paper. No need to type them all again.' },
  { n:'02', title:'Just take a picture.', copy:'Photograph the sheet or load it from your gallery. Nuktah handles the reading.' },
  { n:'03', title:'Nuktah reads the handwriting.', copy:'Marks are extracted and turned into structured rows you can actually work with.' },
  { n:'04', title:'Every student, matched.', copy:'Registration numbers connect each grade to the right student.' },
  { n:'05', title:'You stay in control.', copy:'Review every result and correct anything necessary before it is saved.' },
  { n:'06', title:'From paper to organized grades.', copy:'Save, analyze, and export. Less typing. Less repetition. More time for teaching.' }
];

export default function PhoneStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] });
  const rotate = useTransform(scrollYProgress, [0,1], [-2,2]);

  return (
    <section id="how" ref={ref} className="py-24 md:py-36">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            {steps.map((s, i) => (
              <div className="story-copy" key={s.n}>
                <div className="story-step">
                  <div className="story-num">STEP {s.n}</div>
                  <h3 className="section-title mt-4 text-4xl md:text-6xl">{s.title}</h3>
                  <p>{s.copy}</p>
                  {i === 4 && <div className="mt-6 inline-flex pill">Review before saving ✓</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="sticky-story story-phone">
            <motion.div style={{ rotate }} className="phone-shell">
              <div className="phone-screen">
                <img src="https://nuktah.app/screens/phone_01.webp" alt="Nuktah app screen" />
                <div className="noise" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}