'use client';

import Navbar from '@/components/Navbar';
import PhoneStory from '@/components/PhoneStory';
import Reveal from '@/components/Reveal';

const features = [
  ['Scan handwritten sheets','Turn photographed grade sheets into structured digital grades.'],
  ['Manage classes','Keep students, matricules, and grades organized in one place.'],
  ['Import Excel','Continue with the files you already use.'],
  ['Review before saving','Check every extracted result and correct anything before confirming.'],
  ['Reports','Turn grades into useful class reports and performance views.'],
  ['Export','Get your data in Excel and PDF when you need it.']
];

const prices = [
  ['Trial','Start with a small credit pack','250 DZD','5 credits'],
  ['Class','Regular grading for a class','750 DZD','15 credits'],
  ['Two Classes','Heavy use across a term','1300 DZD','30 credits']
];

const faq = [
  ['What is Nuktah?','An app for teachers in Algeria: photograph a handwritten grade sheet, match students by matricule, review the results, and organize the grades.'],
  ['How does scanning work?','Photograph or upload a handwritten grade sheet. Nuktah extracts the grades so you can review them before saving.'],
  ['Can I correct extracted grades?','Yes. Review the extracted results and correct anything necessary before confirming.'],
  ['Does Nuktah support Excel?','Yes. Nuktah supports Excel workbook import as part of the workflow.'],
  ['Do credits expire?','No. The current pricing model states that credits do not expire.'],
  ['Can I use Nuktah on multiple devices?','The product is designed around account-based data synchronization, so your work can stay available across devices.']
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 grid-bg">
        <div className="container grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <Reveal>
            <div>
              <div className="eyebrow mb-6">Built for teachers in Algeria</div>
              <h1 className="display max-w-4xl">Stop entering grades twice.</h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
                Photograph a handwritten grade sheet. Nuktah reads it, matches every student, and turns it into organized digital grades.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-green" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">Start for free →</a>
                <a className="btn btn-ghost" href="#how">See how it works ↓</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                <span className="pill">2 free scans</span>
                <span className="pill">1 free Excel import</span>
                <span className="pill">Credits never expire</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="phone-shell">
                <div className="phone-screen">
                  <img src="https://nuktah.app/screens/phone_01.webp" alt="Nuktah app screen" />
                  <div className="noise" />
                </div>
              </div>
              <div className="absolute -left-10 top-16 pill shadow-lg">Sheet scanned ✓</div>
              <div className="absolute -right-8 top-1/2 pill shadow-lg">24 students matched</div>
              <div className="absolute -left-6 bottom-14 pill shadow-lg">Excel ready</div>
            </div>
          </Reveal>
        </div>
      </section>

      <PhoneStory />

      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl">
              <div className="eyebrow">The whole workflow, in one place</div>
              <h2 className="section-title mt-4">Less retyping. More teaching.</h2>
              <p className="mt-5 text-[var(--muted)] text-lg">
                Nuktah fits the way Algerian teachers already work — paper sheets, matricules, Excel files, review, then reports.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(([title, copy], i) => (
              <Reveal key={title}>
                <article className={`card p-6 min-h-[360px] flex flex-col ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                  <div className="feature-visual flex-1 rounded-3xl bg-[var(--cream)] p-5">
                    <div className="w-full max-w-[260px] ml-auto rounded-2xl border bg-white p-4 shadow-sm">
                      <div className="h-2 w-20 rounded bg-emerald-200" />
                      <div className="mt-4 space-y-2">
                        {[1,2,3,4].map(x => <div key={x} className="h-3 rounded bg-gray-100" />)}
                      </div>
                      <div className="mt-5 h-8 rounded-xl bg-emerald-100" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-[var(--muted)] leading-relaxed">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="card p-8 md:p-10 bg-white">
              <div className="eyebrow">Without Nuktah</div>
              <h2 className="text-3xl font-extrabold mt-3">The old loop</h2>
              <div className="mt-8 space-y-4 text-lg">
                {['Paper','Type everything again','Check names','Check grades','Update Excel','Create reports'].map((x,i) => (
                  <div key={x} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-black/5 grid place-items-center text-xs font-bold">{i+1}</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="card p-8 md:p-10 bg-[#0e1714] text-white border-[#0e1714]">
              <div className="eyebrow text-emerald-300">With Nuktah</div>
              <h2 className="text-3xl font-extrabold mt-3">The new loop</h2>
              <div className="mt-8 space-y-4 text-lg">
                {['📄 Photograph','🤖 Extract','✓ Review','📊 Organized grades','📄 Reports'].map((x,i) => (
                  <div key={x} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/10 grid place-items-center text-xs font-bold">{i+1}</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 bg-[#dff6ed]">
        <div className="container text-center max-w-4xl">
          <Reveal>
            <div className="eyebrow">Time back</div>
            <h2 className="section-title mt-4">Your evening belongs to you.</h2>
            <p className="mt-6 text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              Less time copying numbers between paper and spreadsheets. More time for your students — and for everything outside the classroom.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow">Simple pricing</div>
              <h2 className="section-title mt-4">Pay for what you use.</h2>
              <p className="mt-5 text-[var(--muted)] text-lg">No monthly subscription. Credits never expire. Start free, then add credits when you need them.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {prices.map(([name, desc, price, credits], i) => (
              <Reveal key={name}>
                <article className={`pricing-card card p-7 ${i === 1 ? 'featured' : ''}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold">{name}</span>
                    {i === 1 && <span className="pill !bg-emerald-300 !border-0 !text-black">Most chosen</span>}
                  </div>
                  <p className={`mt-4 ${i === 1 ? 'text-white/65' : 'text-[var(--muted)]'}`}>{desc}</p>
                  <div className="mt-10 text-4xl font-extrabold">{price}</div>
                  <div className={`mt-2 ${i === 1 ? 'text-white/60' : 'text-[var(--muted)]'}`}>{credits}</div>
                  <a href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer" className={`btn mt-10 w-full ${i === 1 ? 'btn-green' : 'btn-primary'}`}>Start for free</a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-5 card p-7 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <div className="font-extrabold">More credits</div>
                <div className="text-[var(--muted)] mt-1">Use the current Nuktah pricing page for the latest credit packs.</div>
              </div>
              <a className="btn btn-ghost" href="https://nuktah.app/en/pricing/" target="_blank" rel="noreferrer">View current pricing →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="container grid lg:grid-cols-[.7fr_1.3fr] gap-12">
          <Reveal>
            <div>
              <div className="eyebrow">FAQ</div>
              <h2 className="section-title mt-4">Questions, answered.</h2>
            </div>
          </Reveal>

          <Reveal>
            <div>
              {faq.map(([q, a]) => (
                <details className="faq-item" key={q}>
                  <summary>{q}<span>+</span></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 bg-[#0e1714] text-white">
        <div className="container grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="eyebrow text-emerald-300">Start with your first sheet</div>
            <h2 className="section-title mt-4 max-w-3xl">Give your grades less of your time.</h2>
            <p className="mt-6 text-white/60 text-lg">Start free. No monthly subscription. Credits never expire.</p>
          </div>
          <div>
            <a className="btn btn-green text-lg" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">Start for free →</a>
            <div className="mt-3 text-center text-sm text-white/50">Available on Android</div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e1714] text-white/60 border-t border-white/10">
        <div className="container py-8 flex flex-col md:flex-row gap-4 justify-between text-sm">
          <div>
            <div className="font-extrabold text-white">نقطة Nuktah</div>
            <div className="mt-1">Smart grade management for teachers.</div>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="https://nuktah.app/en/support/" target="_blank" rel="noreferrer">Support</a>
            <a href="https://nuktah.app/privacy/" target="_blank" rel="noreferrer">Privacy</a>
            <a href="https://nuktah.app/terms/" target="_blank" rel="noreferrer">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}