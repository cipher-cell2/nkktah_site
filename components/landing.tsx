"use client";

import { useState } from "react";
import {
  ArrowLeft, ArrowUpLeft, Check, ChevronDown, CircleHelp, FileSpreadsheet,
  FileText, Fingerprint, GraduationCap, Languages, LockKeyhole, Menu,
  ScanLine, ShieldCheck, Sparkles, Upload, WalletCards, X, Zap, Crop, ArrowRight, Home, Folder, BarChart3, UserRound
} from "lucide-react";

type Locale = "ar" | "en";

const copy = {
  ar: {
    dir: "rtl", lang: "ar", brand: "نُقطة",
    nav: ["كيف تعمل", "المميزات", "الأسعار", "الأسئلة الشائعة"],
    login: "جرّب التطبيق", heroEyebrow: "وقت أقل مع الأوراق. وقت أكثر مع التلاميذ.",
    heroTitle: "من خطِّ يدِك إلى شاشتِك،", heroAccent: "بلا ضياعِ نقطة.",
    heroBody: "نُقطة تقرأ ورقة العلامات، تربط كل علامة بصاحبها عبر رقم التسجيل، وتترك لك القرار الأخير قبل الحفظ.",
    primary: "اكتشف التطبيق", secondary: "كيف تعمل نُقطة؟",
    proof: ["مصمّمة للأستاذ الجزائري", "مراجعتك قبل كل حفظ", "بدون اشتراك شهري"],
    previewLabel: "معاينة توضيحية", phoneTitle: "كشف النقاط", phoneSub: "القسم: 3 متوسط · الرياضيات",
    scan: "جار قراءة النقاط…", scanProgress: "40%", cancel: "إلغاء", scanStart: "بدء المسح", found: "تم العثور على العلامات", student: "التلميذ", mark: "العلامة",
    rows: [["أحمد بن يوسف","15.5"],["سارة قادري","17"],["ياسين مراد","12.75"]],
    matched: "3 علامات مقروءة", safe: "راجع النتائج قبل اعتمادها",
    workflowEyebrow: "من الورقة إلى النتيجة", workflowTitle: "ثلاث خطوات. والباقي على نُقطة.",
    workflowBody: "لا داعي لإعادة كتابة كل علامة يدوياً. ارفع الورقة، راجع القراءة، ثم احفظ نتائجك.",
    steps: [
      ["01","ارفع ورقة العلامات","صوّر الكشف أو اختر صورة واضحة من هاتفك."],
      ["02","دع نُقطة تقرأ","تقرأ العلامات وتربطها بالتلاميذ عبر رقم التسجيل."],
      ["03","راجع ثم احفظ","صحّح أي قراءة تحتاج مراجعة، واعتمد النتائج بنفسك."]
    ],
    featureEyebrow: "أدوات تخدم يومك", featureTitle: "كل ما تحتاجه لتنظيم العلامات، في مكان واحد.",
    features: [
      ["قراءة خط اليد","حوّل العلامات المكتوبة إلى بيانات رقمية قابلة للمراجعة.", ScanLine],
      ["مطابقة برقم التسجيل","كل علامة ترجع للتلميذ الصحيح، لا لمجرد ترتيب السطر.", Fingerprint],
      ["استيراد وتصدير Excel","ابدأ من ملفات Excel، وحدّث كشوفك وصدّرها بسهولة.", FileSpreadsheet],
      ["إدخال يدوي","أدخل العلامات بالطريقة المعتادة متى احتجت.", FileText],
      ["الأقسام والمواد","نظّم الأقسام والمواد وكشوف التقييم في مساحة واحدة.", GraduationCap],
      ["مراجعة قبل الحفظ","أنت صاحب القرار. لا تُحفظ أي نتيجة قبل تأكيدك.", ShieldCheck]
    ],
    controlEyebrow: "أنت دائماً في الصورة", controlTitle: "الذكاء الاصطناعي يساعدك. وأنت تقرّر.",
    controlBody: "قد تختلف الكتابة من أستاذ لآخر. لذلك لا تعتمد نُقطة أي نتيجة بصمت: راجع كل علامة، عدّل ما يلزم، ثم أكّد الحفظ.",
    controlPoints: ["لا تُحفظ النتائج قبل تأكيدك","يمكنك تعديل العلامات المقروءة","لا تُستهلك الأرصدة إلا بعد نجاح القراءة"],
    pricingEyebrow: "واضحة وبلا مفاجآت", pricingTitle: "استعمل ما تحتاجه فقط.",
    pricingBody: "ابدأ مجاناً، ثم اشترِ أرصدة عند الحاجة. لا اشتراك شهري، والأرصدة لا تنتهي صلاحيتها.",
    pricingTag: "نظام الأرصدة", pricingTitleCard: "ادفع حسب الاستعمال",
    pricingDesc: "تمنحك نُقطة مساحة لتجربة الأدوات الأساسية، ثم تختار الأرصدة التي تناسب وتيرة عملك.",
    pricingItems: ["إدخال العلامات يدوياً","تجربة مجانية للمسح والاستيراد","أرصدة للمسح والاستيراد والتصدير","الأرصدة لا تنتهي صلاحيتها"],
    payment: "الدفع عبر CIB والبطاقة الذهبية", pricingNote: "تُعرض أسعار الأرصدة داخل التطبيق.",
    faqEyebrow: "أسئلة متكررة", faqTitle: "قبل أن تبدأ، إليك ما تريد معرفته.",
    faqs: [
      ["هل نُقطة مخصّصة للأستاذ الجزائري؟","نعم، صُمّمت لمساعدة الأساتذة في الجزائر على تنظيم العلامات والأقسام وكشوف التقييم."],
      ["ما ملفات Excel المدعومة؟","يمكنك استيراد ملفات .xlsx و .xls وفق قالب الوزارة المعتمد."],
      ["هل تعمل مع جميع الأطوار؟","تدعم نُقطة التعليم الابتدائي والمتوسط والثانوي."],
      ["هل تُحفظ العلامات مباشرة بعد قراءتها؟","لا. تراجع كل النتائج ويمكنك تعديلها، ولا يتم الحفظ إلا بعد تأكيدك."],
      ["هل أحتاج إلى الإنترنت للمسح؟","نعم، قراءة الأوراق تحتاج إلى اتصال بالإنترنت."],
      ["متى تُستهلك الأرصدة؟","لا يُستهلك الرصيد إلا بعد نجاح عملية القراءة. والأرصدة المشتراة لا تنتهي صلاحيتها."]
    ],
    finalTitle: "خلّي نُقطة تتكفّل بالورقة.", finalBody: "وخلّي وقتك للتلميذ، مش لإعادة كتابة العلامات.",
    finalCta: "جرّب نُقطة على Google Play", footer: "أداة تساعد الأستاذ. والقرار دائماً بيده.",
    footerLinks: ["الخصوصية","شروط الاستخدام","الدعم"], support: "للمساعدة: support@nuktah.app",
    menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", play: "متاح عبر برنامج الاختبار"
  },
  en: {
    dir: "ltr", lang: "en", brand: "nuktah",
    nav: ["How it works", "Features", "Pricing", "FAQ"],
    login: "Try the app", heroEyebrow: "Less time with paperwork. More time for students.",
    heroTitle: "One mark on the sheet —", heroAccent: "and the late nights are over.",
    heroBody: "Nuktah reads handwritten grade sheets, matches each mark to the right student by registration number, and lets you review everything before saving.",
    primary: "Explore the app", secondary: "How it works",
    proof: ["Made for Algerian teachers", "Review before saving", "No monthly subscription"],
    previewLabel: "Illustrative preview", phoneTitle: "Grade sheet", phoneSub: "Class: 3 Middle School · Maths",
    scan: "Reading your marks…", scanProgress: "40%", cancel: "Cancel", scanStart: "Start scan", found: "Marks recognised", student: "Student", mark: "Mark",
    rows: [["Ahmed Benyoussef","15.5"],["Sarah Kadri","17"],["Yacine Mourad","12.75"]],
    matched: "3 marks recognised", safe: "Review results before confirming",
    workflowEyebrow: "From paper to results", workflowTitle: "Three simple steps. Nuktah handles the rest.",
    workflowBody: "No need to retype every mark. Upload your sheet, review the reading, then save your results.",
    steps: [
      ["01","Upload your grade sheet","Take a photo or choose a clear image from your phone."],
      ["02","Let Nuktah read it","Marks are recognised and matched using student registration numbers."],
      ["03","Review and save","Correct anything that needs attention, then confirm the results."]
    ],
    featureEyebrow: "Tools for your school day", featureTitle: "Everything you need to organise marks, in one place.",
    features: [
      ["Handwriting recognition","Turn handwritten marks into digital data you can review.", ScanLine],
      ["Registration matching","Every mark goes to the right student, not just the next row.", Fingerprint],
      ["Excel import & export","Start with Excel files, update your sheets and export with ease.", FileSpreadsheet],
      ["Manual entry","Enter marks the familiar way whenever you need to.", FileText],
      ["Classes & subjects","Keep classes, subjects and assessment sheets organised.", GraduationCap],
      ["Review before saving","You're in control. Nothing is saved until you confirm.", ShieldCheck]
    ],
    controlEyebrow: "Always in control", controlTitle: "AI does the reading. You make the call.",
    controlBody: "Handwriting varies from teacher to teacher. That's why Nuktah never silently approves a result: review each mark, make corrections, and confirm when you're ready.",
    controlPoints: ["Nothing is saved before you confirm","Edit any recognised mark","Credits are only used after a successful read"],
    pricingEyebrow: "Simple and transparent", pricingTitle: "Only pay for what you use.",
    pricingBody: "Start for free, then add credits when you need them. No monthly subscription, and your credits never expire.",
    pricingTag: "Credit-based", pricingTitleCard: "Pay as you go",
    pricingDesc: "Try the essential tools, then choose credits that fit the way you work.",
    pricingItems: ["Manual grade entry","Free trial for scans and import","Credits for scans, imports and exports","Credits never expire"],
    payment: "Pay with CIB or Edahabia", pricingNote: "Available credit packs and prices are shown in the app.",
    faqEyebrow: "Frequently asked questions", faqTitle: "A few things you might want to know.",
    faqs: [
      ["Is Nuktah made for Algerian teachers?","Yes. Nuktah is designed to help teachers in Algeria organise marks, classes and assessment sheets."],
      ["Which Excel files are supported?","You can import .xlsx and .xls files using the ministry template."],
      ["Which school levels are supported?","Nuktah supports primary, middle and secondary education."],
      ["Are marks saved as soon as they are read?","No. You review and can edit every result. Nothing is saved until you confirm."],
      ["Do I need internet to scan?","Yes. Reading grade sheets requires an internet connection."],
      ["When are credits used?","Credits are only consumed after a successful reading. Purchased credits never expire."]
    ],
    finalTitle: "Let Nuktah handle the paperwork.", finalBody: "Save your time and attention for the students, not retyping marks.",
    finalCta: "Try Nuktah on Google Play", footer: "Built to help teachers. Always under their control.",
    footerLinks: ["Privacy","Terms","Support"], support: "Need help? support@nuktah.app",
    menuOpen: "Open menu", menuClose: "Close menu", play: "Available through the testing programme"
  }
};

const playUrl = "https://play.google.com/apps/testing/app.nuktah";

export default function Landing({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const isAr = locale === "ar";
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navIds = ["workflow", "features", "pricing", "faq"];
  const IconArrow = isAr ? ArrowLeft : ArrowUpLeft;
  const featureItems = t.features as [string, string, typeof ScanLine][];

  return (
    <main lang={t.lang} dir={t.dir}>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href={isAr ? "/" : "/en"} aria-label="Nuktah home">
            <span className="brand-mark"><span /></span>
            <span>{t.brand}</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {t.nav.map((item, i) => <a key={item} href={i === 2 ? (isAr ? "/pricing" : "/en/pricing") : `#${navIds[i]}`}>{item}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="language-link" href={isAr ? "/en" : "/"}><Languages size={16} />{isAr ? "EN" : "العربية"}</a>
            <a className="nav-cta" href={playUrl} target="_blank" rel="noreferrer">{t.login}<IconArrow size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav">{t.nav.map((item, i) => <a key={item} href={i === 2 ? (isAr ? "/pricing" : "/en/pricing") : `#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a href={isAr ? "/en" : "/"}>{isAr ? "English" : "العربية"}</a></nav>}
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />{t.heroEyebrow}</div>
          <h1>{t.heroTitle}<br /><span>{t.heroAccent}</span></h1>
          <p className="hero-description">{t.heroBody}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={playUrl} target="_blank" rel="noreferrer">{t.primary}<IconArrow size={18} /></a>
            <a className="button button-quiet" href="#workflow">{t.secondary}<span className="play-circle">▶</span></a>
          </div>
          <div className="hero-proof">{t.proof.map((item, i) => <span key={item}><Check size={15} />{item}</span>)}</div>
        </div>

        <div className="hero-art" aria-label={t.previewLabel}>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-note note-top"><Sparkles size={15} /><span>{t.matched}</span></div>
          <div className="phone scan-phone">
            <div className="phone-island" />
            <div className="scan-camera">
              <div className="scan-topbar">
                <span className="scan-tool"><Crop size={15} /></span>
                <span className="scan-next"><ArrowRight size={19} /></span>
              </div>

              <div className="scan-sheet">
                <div className="sheet-title">كشف نقاط التقييم</div>
                <div className="sheet-subtitle">اللغة العربية · القسم 3 متوسط</div>
                <div className="sheet-columns"><i /><i /><i /><i /><i /></div>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div className="sheet-row" key={i}>
                    <i /><i /><i /><i /><i />
                  </div>
                ))}
              </div>

              <div className="scan-dim" />
              <div className="scan-frame">
                <span className="corner corner-tl" /><span className="corner corner-tr" />
                <span className="corner corner-bl" /><span className="corner corner-br" />
                <span className="scan-target"><ScanLine size={35} /></span>
              </div>

              <div className="scan-progress">
                <div className="scan-progress-title"><b>{t.scan}</b></div>
                <div className="scan-progress-bar"><span /></div>
                <strong>{t.scanProgress}</strong>
                <button className="scan-cancel" type="button">{t.cancel}</button>
              </div>

              <div className="scan-start"><ScanLine size={16} />{t.scanStart}</div>

              <div className="scan-bottom-nav">
                <span><UserRound size={17} /></span>
                <span><BarChart3 size={17} /></span>
                <span className="active"><ScanLine size={18} /></span>
                <span><Folder size={17} /></span>
                <span><Home size={17} /></span>
              </div>
            </div>
          </div>
          <div className="art-note note-bottom"><span className="note-icon"><Check size={15} /></span><span>{t.matched}</span></div>
          <div className="art-caption">{t.previewLabel}</div>
        </div>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span><Fingerprint />{t.proof[0]}</span><span><ShieldCheck />{t.proof[1]}</span><span><WalletCards />{t.proof[2]}</span></div></section>

      <section className="section-wrap workflow-section" id="workflow">
        <div className="section-heading centered"><span className="eyebrow">{t.workflowEyebrow}</span><h2>{t.workflowTitle}</h2><p>{t.workflowBody}</p></div>
        <div className="steps-grid">{t.steps.map((step, i) => <article className="step-card" key={step[0]}><div className="step-top"><span className="step-number">{step[0]}</span><span className="step-icon">{i === 0 ? <Upload /> : i === 1 ? <ScanLine /> : <Check />}</span></div><h3>{step[1]}</h3><p>{step[2]}</p>{i < 2 && <div className="step-connector" />}</article>)}</div>
      </section>

      <section className="features-section" id="features"><div className="section-wrap">
        <div className="section-heading"><span className="eyebrow">{t.featureEyebrow}</span><h2>{t.featureTitle}</h2></div>
        <div className="features-grid">{featureItems.map(([title, desc, Icon]) => <article className="feature-card" key={title as string}><span className="feature-icon"><Icon size={21} /></span><h3>{title as string}</h3><p>{desc as string}</p></article>)}</div>
      </div></section>

      <section className="product-section section-wrap">
        <div className="product-copy">
          <span className="eyebrow">{isAr ? "داخل التطبيق" : "Inside the app"}</span>
          <h2>{isAr ? "واجهة واضحة، من أول كشف إلى آخر تقرير." : "A clear workspace, from the first sheet to the final report."}</h2>
          <p>{isAr ? "المسح ليس كل شيء. نُقطة تجمع إدخال العلامات، الأقسام، التقارير، التحليل، والمزامنة في تجربة واحدة حتى تبقى كل خطوة مرتبطة بما بعدها." : "Scanning is only one part of the job. Nuktah brings grade entry, classes, reports, analysis and sync into one connected workflow."}</p>
          <div className="product-points">
            {(isAr
              ? [["تقارير PDF وExcel","صدّر النتائج والتقارير بصيغ عملية."],["تحليل النتائج","شاهد أداء التلاميذ والأقسام بوضوح."],["مزامنة البيانات","احتفظ ببياناتك متاحة عبر أجهزتك بأمان."]]
              : [["PDF & Excel reports","Export results and reports in practical formats."],["Result analysis","Understand student and class performance at a glance."],["Data sync","Keep your data available across devices securely."]]
            ).map(([title, desc]) => (
              <div className="product-point" key={title}>
                <span className="product-check"><Check size={14} /></span>
                <div><b>{title}</b><span>{desc}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="screenshot-frame">
          <div className="screenshot-topbar"><span /><span /><span /><b>{isAr ? "معاينة من التطبيق" : "App preview"}</b></div>
          <img src="https://nuktah.app/screens/phone_01.webp" alt={isAr ? "لقطة شاشة من تطبيق نُقطة" : "Nuktah app screenshot"} />
          <div className="screenshot-glow" />
        </div>
      </section>

      <section className="control-section section-wrap"><div className="control-visual"><div className="control-card"><div className="control-card-top"><span><ShieldCheck size={17} /> {isAr ? "مراجعة الأستاذ" : "Teacher review"}</span><span className="control-badge"><Check size={12} />{isAr ? "قيد المراجعة" : "In review"}</span></div>{t.rows.map((r, i) => <div className="control-row" key={r[0]}><span className="control-avatar">{r[0].slice(0,1)}</span><span className="control-name">{r[0]}</span><strong>{r[1]}</strong><span className={i === 1 ? "edit-tag" : "ok-tag"}>{i === 1 ? (isAr ? "تعديل" : "Edit") : <Check size={14} />}</span></div>)}<div className="control-confirm"><LockKeyhole size={15} />{t.safe}</div></div></div><div className="control-copy"><span className="eyebrow">{t.controlEyebrow}</span><h2>{t.controlTitle}</h2><p>{t.controlBody}</p><ul>{t.controlPoints.map((point) => <li key={point}><Check size={17} />{point}</li>)}</ul></div></section>

      <section className="pricing-section" id="pricing"><div className="section-wrap pricing-wrap"><div className="section-heading centered"><span className="eyebrow">{t.pricingEyebrow}</span><h2>{t.pricingTitle}</h2><p>{t.pricingBody}</p></div><div className="pricing-card"><div className="pricing-main"><span className="pricing-pill"><Zap size={14} />{t.pricingTag}</span><h3>{t.pricingTitleCard}</h3><p>{t.pricingDesc}</p><ul>{t.pricingItems.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul><a className="button button-primary" href={playUrl} target="_blank" rel="noreferrer">{t.login}<IconArrow size={17} /></a></div><div className="pricing-aside"><div className="credit-illustration"><div className="credit-card-back" /><div className="credit-card-front"><span className="credit-chip" /><span className="credit-dots">•••• •••• ••••</span><span className="credit-brand">نُقطة</span></div><span className="credit-spark spark-a">✳</span><span className="credit-spark spark-b">✦</span></div><div className="payment-note"><WalletCards size={18} /><span>{t.payment}</span></div><small>{t.pricingNote}</small></div></div></div></section>

      <section className="faq-section section-wrap" id="faq"><div className="faq-intro"><span className="eyebrow">{t.faqEyebrow}</span><h2>{t.faqTitle}</h2><p>{t.support}</p></div><div className="faq-list">{t.faqs.map(([q,a], i) => <article className={openFaq === i ? "faq-item is-open" : "faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{a}</p>}</article>)}</div></section>

      <section className="final-cta"><div className="final-cta-inner"><div className="final-spark"><Sparkles size={22} /></div><h2>{t.finalTitle}</h2><p>{t.finalBody}</p><div className="cta-trust"><ShieldCheck size={14} />{isAr ? "مراجعة بشرية قبل اعتماد النتائج" : "Human review before results are confirmed"}</div><a className="button button-light" href={playUrl} target="_blank" rel="noreferrer">{t.finalCta}<IconArrow size={17} /></a><small>{t.play}</small></div><div className="cta-decoration cta-decoration-one" /><div className="cta-decoration cta-decoration-two" /></section>

      <footer className="site-footer"><div className="footer-inner"><a className="brand footer-brand" href={isAr ? "/" : "/en"}><span className="brand-mark"><span /></span><span>{t.brand}</span></a><p>{t.footer}</p><div className="footer-links"><a href={isAr ? "/privacy" : "/en/privacy"}>{t.footerLinks[0]}</a><a href={isAr ? "/terms" : "/en/terms"}>{t.footerLinks[1]}</a><a href={isAr ? "/support" : "/en/support"}>{t.footerLinks[2]}</a></div><span className="copyright">© {new Date().getFullYear()} Nuktah</span></div></footer>
    </main>
  );
}