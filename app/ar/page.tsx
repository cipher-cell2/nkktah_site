import ArabicNavbar from '@/components/ArabicNavbar';

const faqs = [
  ['ما هي نقطة؟','نقطة تطبيق يساعد الأساتذة في الجزائر على تحويل كشوف النقاط المكتوبة يدويًا إلى درجات رقمية منظمة.'],
  ['كيف يعمل المسح؟','صوّر كشف النقاط أو ارفعه من الهاتف، ثم راجع النتائج المستخرجة قبل حفظها.'],
  ['هل يمكنني تصحيح النتائج؟','نعم. يمكنك مراجعة النتائج وتصحيح أي قيمة قبل تأكيدها.'],
  ['هل تدعم نقطة Excel؟','نعم، يدعم المنتج استيراد ملفات Excel ضمن سير العمل.'],
  ['هل تنتهي صلاحية الرصيد؟','لا، الرصيد لا تنتهي صلاحيته وفق نموذج التسعير الحالي.']
];

export default function ArabicHome() {
  return (
    <main id="top" className="overflow-hidden">
      <ArabicNavbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 grid-bg">
        <div className="container grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-6">مصممة للأساتذة في الجزائر</div>
            <h1 className="display max-w-4xl">توقف عن إدخال النقاط مرتين.</h1>
            <p className="mt-7 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              صوّر كشف النقاط المكتوب بخط اليد. نقطة تقرأه، تطابق كل تلميذ، وتحوله إلى نقاط رقمية منظمة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-green" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">ابدأ مجانًا ←</a>
              <a className="btn btn-ghost" href="#how">شاهد كيف تعمل ↓</a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="phone-shell"><div className="phone-screen"><img src="https://nuktah.app/screens/phone_01.webp" alt="واجهة تطبيق نقطة" /><div className="noise" /></div></div>
              <div className="absolute -right-8 top-16 pill shadow-lg">تم مسح الكشف ✓</div>
              <div className="absolute -left-8 top-1/2 pill shadow-lg">تمت مطابقة التلاميذ ✓</div>
              <div className="absolute -right-6 bottom-14 pill shadow-lg">Excel جاهز</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">من الورق إلى النقاط المنظمة</div>
            <h2 className="section-title mt-4">العملية أبسط مما تتخيل.</h2>
            <div className="mt-10 space-y-7">
              {[
                ['01','صوّر الكشف','ابدأ من الورقة التي تستخدمها أصلًا.'],
                ['02','راجع النتائج','تحقق من النقاط وصحح ما يلزم.'],
                ['03','احفظ وصدّر','احتفظ بالنقاط وأنشئ التقارير وملفات Excel أو PDF.']
              ].map(([n,t,c]) => <div key={n}><div className="story-num">الخطوة {n}</div><h3 className="text-2xl font-extrabold mt-2">{t}</h3><p className="mt-2 text-[var(--muted)] leading-relaxed">{c}</p></div>)}
            </div>
          </div>
          <div className="flex justify-center"><div className="phone-shell"><div className="phone-screen"><img src="https://nuktah.app/screens/phone_01.webp" alt="شاشة نقطة" /></div></div></div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">كل سير العمل في مكان واحد</div>
            <h2 className="section-title mt-4">وقت أقل للنسخ. وقت أكثر للتدريس.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['مسح كشوف النقاط','حوّل الصور إلى نقاط رقمية منظمة.'],
              ['إدارة الأقسام','نظّم التلاميذ والنقاط في مكان واحد.'],
              ['استيراد Excel','واصل العمل بالملفات التي تستخدمها أصلًا.'],
              ['المراجعة قبل الحفظ','تحقق من كل نتيجة وصححها قبل التأكيد.'],
              ['التقارير','حوّل نقاطك إلى تقارير مفيدة.'],
              ['التصدير','احصل على بياناتك بصيغة Excel أو PDF.']
            ].map(([t,c]) => <article key={t} className="card p-7 min-h-[250px]"><div className="w-12 h-12 rounded-2xl bg-[#dff6ed] grid place-items-center font-extrabold text-[#087c5d]">ن</div><h3 className="mt-7 text-xl font-extrabold">{t}</h3><p className="mt-2 text-[var(--muted)] leading-relaxed">{c}</p></article>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto"><div className="eyebrow">تسعير بسيط</div><h2 className="section-title mt-4">ادفع مقابل ما تستخدمه.</h2><p className="mt-5 text-[var(--muted)] text-lg">لا يوجد اشتراك شهري. الأرصدة لا تنتهي صلاحيتها.</p></div>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[['تجربة','250 دج','5 أرصدة'],['قسم','750 دج','15 رصيدًا'],['قسمان','1300 دج','30 رصيدًا']].map(([n,p,c],i) => <article key={n} className={`pricing-card card p-7 ${i===1?'featured':''}`}><div className="font-extrabold">{n}</div><div className="mt-10 text-4xl font-extrabold">{p}</div><div className="mt-2 opacity-60">{c}</div><a className={`btn mt-10 w-full ${i===1?'btn-green':'btn-primary'}`} href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">ابدأ مجانًا</a></article>)}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-white">
        <div className="container max-w-4xl"><div className="eyebrow">الأسئلة الشائعة</div><h2 className="section-title mt-4">كل ما تريد معرفته.</h2><div className="mt-10">{faqs.map(([q,a]) => <details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <section className="py-28 bg-[#0e1714] text-white">
        <div className="container text-center"><div className="eyebrow text-emerald-300">ابدأ من أول كشف</div><h2 className="section-title mt-4">امنح نقاطك وقتًا أقل من يومك.</h2><p className="mt-6 text-white/60 text-lg">ابدأ مجانًا. لا اشتراك شهري. الأرصدة لا تنتهي.</p><a className="btn btn-green mt-8 text-lg" href="https://play.google.com/store/apps/details?id=app.nuktah" target="_blank" rel="noreferrer">ابدأ مجانًا ←</a></div>
      </section>

      <footer className="bg-[#0e1714] text-white/60 border-t border-white/10"><div className="container py-8 flex flex-col md:flex-row gap-4 justify-between text-sm"><div><div className="font-extrabold text-white">نقطة Nuktah</div><div className="mt-1">إدارة ذكية للنقاط للأساتذة.</div></div><a href="/">English</a></div></footer>
    </main>
  );
}