'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  { n:'01', title:'It starts with a sheet.', copy:'Your grades are already on paper. No need to type them all again.' },
  { n:'02', title:'Just take a picture.', copy:'Photograph the sheet or load it from your gallery. Nuktah handles the reading.' },
  { n:'03', title:'Nuktah reads the handwriting.', copy:'Marks are extracted and turned into structured rows you can actually work with.' },
  { n:'04', title:'Every student, matched.', copy:'Registration numbers connect each grade to the right student.' },
  { n:'05', title:'You stay in control.', copy:'Review every result and correct anything necessary before it is saved.' },
  { n:'06', title:'From paper to organized grades.', copy:'Save, analyze, and export. Less typing. Less repetition. More time for teaching.' }
];

const screenStates = [
  { label:'Import sheet', badge:'Ready to scan', rows:['Handwritten sheet','Camera / gallery','Start scan'] },
  { label:'Scanning', badge:'Document detected', rows:['Finding page edges','Reading handwriting','Processing…'] },
  { label:'Extracted grades', badge:'Grades found', rows:['Ahmed · MAT-10234 · 15','Sara · MAT-10235 · 17','Yasmine · MAT-10236 · 14'] },
  { label:'Student matching', badge:'Matches found', rows:['MAT-10234 → Ahmed ✓','MAT-10235 → Sara ✓','MAT-10236 → Yasmine ✓'] },
  { label:'Review', badge:'Your approval', rows:['Ahmed · 15 · ✓','Sara · 17 · ✓','Yasmine · 14 · Edit'] },
  { label:'Class ready', badge:'Saved successfully', rows:['Grades organized ✓','Reports available ✓','Excel / PDF export ✓'] }
];

export default function PhoneStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] });
  const rotate = useTransform(scrollYProgress, [0,1], [-2,2]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', value => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(value * steps.length))));
  });

  const state = screenStates[active];

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
                <div className="absolute inset-0 bg-[#0d1713]/20" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/20 bg-[#101714]/90 p-4 text-white backdrop-blur-xl shadow-2xl"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-extrabold">{state.label}</span>
                      <span className="rounded-full bg-emerald-300 px-2.5 py-1 text-[10px] font-extrabold text-[#072a20]">{state.badge}</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {state.rows.map((row, index) => (
                        <motion.div
                          key={row}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08, duration: 0.25 }}
                          className="rounded-xl bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/85"
                        >
                          {row}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                {active === 1 && <motion.div initial={{ y: '-10%' }} animate={{ y: '110%' }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="absolute left-5 right-5 top-0 h-0.5 bg-emerald-300 shadow-[0_0_18px_rgba(110,255,204,.8)]" />}
                <div className="noise" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}