"use client";

import { Check, ChevronDown, CreditCard, FileSpreadsheet, FileText, Infinity, LockKeyhole, ScanLine, ShieldCheck, WalletCards, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type Locale = "ar" | "en";

const content = {
  ar: {
    lang:"ar", dir:"rtl", brand:"نُقطة",
    back:"العودة للرئيسية", switch:"English", title:"أسعار بسيطة. بدون اشتراك شهري.",
    intro:"ابدأ بالأدوات الأساسية مجاناً، ثم اشترِ أرصدة عندما تحتاج إلى مزيد من المسح أو الاستيراد أو التصدير.",
    cta:"جرّب نُقطة", note:"اطّلع على السعر الكامل قبل تأكيد أي عملية شراء.", priceLabel:"لا نخفي السعر عنك", priceText:"تظهر كل باقة وسعرها بوضوح داخل التطبيق قبل الدفع. لا توجد رسوم شهرية أو تجديد تلقائي.", usageTitle:"متى تحتاج إلى الأرصدة؟", usageIntro:"تغطي الأرصدة العمليات الإضافية التي تستخدمها في عملك اليومي.", usageScan:"مسح كشوف النقاط", usageExcel:"استيراد ملفات Excel", usageExport:"تصدير النتائج والتقارير", reassurance:"تبدأ مجاناً، وتقرر أنت متى تضيف رصيداً.",
    freeTitle:"ابدأ مجاناً", freeDesc:"جرّب طريقة العمل قبل شراء أي رصيد.",
    freeItems:["إدخال العلامات يدوياً","مسحان مجانيان","استيراد واحد مجاني","مراجعة وتعديل النتائج قبل الحفظ"],
    creditsTitle:"الأرصدة", creditsDesc:"عندما تحتاج إلى استخدام إضافي، اشترِ أرصدة حسب وتيرة عملك.",
    creditItems:["المسح بعد استنفاد التجربة المجانية","استيراد ملفات Excel","تصدير النتائج والتقارير","الأرصدة لا تنتهي صلاحيتها"],
    paymentTitle:"دفع محلي", paymentDesc:"ادفع بالطريقة المناسبة لك داخل التطبيق.",
    paymentItems:["CIB","البطاقة الذهبية (Edahabia)","لا اشتراك شهري","الأسعار الفعلية تظهر قبل الشراء"],
    howTitle:"كيف يعمل نظام الأرصدة؟",
    how:[["01","جرّب","استخدم المزايا المجانية المتاحة لك."],["02","اشترِ عند الحاجة","اختر باقة الأرصدة التي تناسب وتيرة عملك داخل التطبيق."],["03","استخدم وراجع","يُستهلك الرصيد عند نجاح العملية، وتبقى لك مراجعة النتائج قبل اعتمادها."]],
    faqTitle:"أسئلة عن الدفع والأرصدة",
    faqs:[["هل هناك اشتراك شهري؟","لا. نُقطة تعمل بنظام الدفع حسب الاستعمال، وليس باشتراك شهري."],["هل تنتهي صلاحية الأرصدة؟","لا. الأرصدة المشتراة لا تنتهي صلاحيتها."],["متى يُستهلك الرصيد؟","لا يُستهلك الرصيد إلا بعد نجاح قراءة الورقة. ويمكنك مراجعة النتائج وتعديلها قبل الحفظ."],["أين أرى الأسعار؟","تظهر باقات الأرصدة وأسعارها داخل التطبيق قبل إتمام عملية الشراء."],["ما طرق الدفع؟","يمكن الدفع عبر CIB والبطاقة الذهبية (Edahabia)."]],
    footer:"أداة تساعد الأستاذ. والقرار دائماً بيده."
  },
  en: {
    lang:"en", dir:"ltr", brand:"nuktah",
    back:"Back to home", switch:"العربية", title:"Simple pricing. No monthly subscription.",
    intro:"Start with the essentials for free, then add credits when you need more scans, imports or exports.",
    cta:"Try Nuktah", note:"See the full price before confirming any purchase.", priceLabel:"No hidden pricing", priceText:"Every available pack and its price is clearly shown in the app before payment. No monthly fees or automatic renewals.", usageTitle:"What are credits used for?", usageIntro:"Credits cover the additional operations you use in your everyday workflow.", usageScan:"Scan grade sheets", usageExcel:"Import Excel files", usageExport:"Export results and reports", reassurance:"Start free, then choose when you want to add credits.",
    freeTitle:"Start free", freeDesc:"Try the workflow before buying any credits.",
    freeItems:["Manual grade entry","Two free scans","One free import","Review and edit results before saving"],
    creditsTitle:"Credits", creditsDesc:"When you need more usage, buy credits based on the way you work.",
    creditItems:["Scanning after the free allowance","Excel imports","Results and report exports","Credits never expire"],
    paymentTitle:"Local payment", paymentDesc:"Pay with a familiar Algerian payment method inside the app.",
    paymentItems:["CIB","Edahabia","No monthly subscription","Actual prices shown before purchase"],
    howTitle:"How do credits work?",
    how:[["01","Try it","Use the free features available to you."],["02","Add credits when needed","Choose the credit pack that fits your workload inside the app."],["03","Use and review","A credit is consumed after a successful operation, while you still review results before confirming."]],
    faqTitle:"Payment & credit questions",
    faqs:[["Is there a monthly subscription?","No. Nuktah uses pay-as-you-go credits rather than a monthly subscription."],["Do credits expire?","No. Purchased credits never expire."],["When is a credit consumed?","A credit is only consumed after a successful sheet reading. You can review and edit results before saving."],["Where can I see prices?","Available credit packs and their prices are shown inside the app before purchase."],["How can I pay?","Payment is available through CIB and Edahabia."]],
    footer:"Built to help teachers. Always under their control."
  }
};

const playUrl="https://play.google.com/apps/testing/app.nuktah";

export default function Pricing({locale}:{locale:Locale}) {
  const t=content[locale]; const [open,setOpen]=useState<number|null>(0);
  return <main lang={t.lang} dir={t.dir} className="pricing-page">
    <header className="pricing-header"><a className="brand" href={locale==="ar"?"/":"/en"}><span className="brand-mark"><span /></span><span>{t.brand}</span></a><div><a className="pricing-back" href={locale==="ar"?"/":"/en"}>{locale==="ar"?<ArrowRight size={14}/>:<ArrowLeft size={14}/>} {t.back}</a><a className="pricing-language" href={locale==="ar"?"/en/pricing":"/pricing"}>{t.switch}</a></div></header>
    <section className="pricing-hero">
      <span className="eyebrow"><span className="eyebrow-dot" />{locale==="ar"?"نظام الدفع":"PAY AS YOU GO"}</span>
      <h1>{t.title}</h1><p>{t.intro}</p>
      <a className="button button-primary" href={playUrl} target="_blank" rel="noreferrer">{t.cta}<Zap size={16}/></a>
      <small>{t.note}</small>
      <div className="pricing-promise">
        <span><Check size={14}/>{locale==="ar"?"لا اشتراك شهري":"No monthly subscription"}</span>
        <span><Infinity size={14}/>{locale==="ar"?"الأرصدة لا تنتهي":"Credits never expire"}</span>
        <span><ShieldCheck size={14}/>{locale==="ar"?"مراجعة قبل الحفظ":"Review before saving"}</span>
      </div>
    </section>
    <section className="pricing-cards section-wrap">
      <article className="price-card free-card"><div className="price-icon"><FileText size={21}/></div><span className="price-kicker">{locale==="ar"?"الخطة المجانية":"FREE START"}</span><h2>{t.freeTitle}</h2><p>{t.freeDesc}</p><ul>{t.freeItems.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><a className="button button-quiet price-link" href={playUrl} target="_blank" rel="noreferrer">{t.cta}</a></article>
      <article className="price-card credits-card"><div className="price-icon"><WalletCards size={21}/></div><span className="price-kicker">{locale==="ar"?"عند الحاجة":"WHEN YOU NEED MORE"}</span><h2>{t.creditsTitle}</h2><p>{t.creditsDesc}</p><ul>{t.creditItems.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><div className="credit-note"><Infinity size={16}/>{locale==="ar"?"رصيدك لا يتقادم":"Your balance does not expire"}</div></article>
      <article className="price-card payment-card"><div className="price-icon"><CreditCard size={21}/></div><span className="price-kicker">{locale==="ar"?"طرق الدفع":"PAYMENT"}</span><h2>{t.paymentTitle}</h2><p>{t.paymentDesc}</p><ul>{t.paymentItems.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><div className="payment-methods"><span>CIB</span><span>EDAHABIA</span></div></article>
    </section>
    <section className="pricing-usage section-wrap">
      <div className="usage-heading">
        <span className="eyebrow">{locale==="ar"?"استخدام واضح":"CLEAR USAGE"}</span>
        <h2>{t.usageTitle}</h2>
        <p>{t.usageIntro}</p>
      </div>
      <div className="usage-panel">
        <div className="usage-item"><span className="usage-icon"><ScanLine size={20}/></span><b>{t.usageScan}</b><span>{locale==="ar"?"عند الحاجة إلى مسح إضافي":"For additional scans"}</span></div>
        <div className="usage-item"><span className="usage-icon"><FileSpreadsheet size={20}/></span><b>{t.usageExcel}</b><span>{locale==="ar"?"لإضافة بيانات الأقسام":"To bring in class data"}</span></div>
        <div className="usage-item"><span className="usage-icon"><FileText size={20}/></span><b>{t.usageExport}</b><span>{locale==="ar"?"لإخراج عملك بصيغ عملية":"To take your work with you"}</span></div>
      </div>
      <div className="pricing-price-note"><span className="price-note-icon"><CreditCard size={19}/></span><div><b>{t.priceLabel}</b><p>{t.priceText}</p></div></div>
      <p className="pricing-reassurance"><Check size={15}/>{t.reassurance}</p>
    </section>
    <section className="credit-flow"><div className="section-wrap"><div className="section-heading centered"><span className="eyebrow">{locale==="ar"?"بكل وضوح":"CLEAR BY DESIGN"}</span><h2>{t.howTitle}</h2></div><div className="credit-steps">{t.how.map(([n,h,b])=><article key={n}><span>{n}</span><h3>{h}</h3><p>{b}</p></article>)}</div></div></section>
    <section className="pricing-trust section-wrap"><div><ShieldCheck size={22}/><div><b>{locale==="ar"?"أنت تتحكم قبل كل حفظ":"You're in control before every save"}</b><p>{locale==="ar"?"نُقطة لا تحفظ النتيجة مباشرة بعد القراءة. راجع وعدّل ثم أكّد.":"Nuktah does not silently save results after reading. Review, edit, then confirm."}</p></div></div><div><LockKeyhole size={22}/><div><b>{locale==="ar"?"لا مفاجآت في الاستهلاك":"No hidden credit surprises"}</b><p>{locale==="ar"?"لا يُستهلك الرصيد إلا بعد نجاح القراءة.":"Credits are only consumed after a successful read."}</p></div></div></section>
    <section className="pricing-faq"><div className="section-wrap"><div className="section-heading centered"><span className="eyebrow">{locale==="ar"?"أسئلة متكررة":"FAQ"}</span><h2>{t.faqTitle}</h2></div><div className="pricing-faq-list">{t.faqs.map(([q,a],i)=><div className={open===i?"faq-item is-open":"faq-item"} key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown size={18}/></button>{open===i&&<p>{a}</p>}</div>)}</div></div></section>
    <footer className="site-footer"><div className="footer-inner"><a className="brand footer-brand" href={locale==="ar"?"/":"/en"}><span className="brand-mark"><span /></span><span>{t.brand}</span></a><p>{t.footer}</p><div className="footer-links"><a href={locale==="ar"?"/privacy":"/en/privacy"}>{locale==="ar"?"الخصوصية":"Privacy"}</a><a href={locale==="ar"?"/terms":"/en/terms"}>{locale==="ar"?"الشروط":"Terms"}</a><a href={locale==="ar"?"/support":"/en/support"}>{locale==="ar"?"الدعم":"Support"}</a></div></div></footer>
  </main>;
}
