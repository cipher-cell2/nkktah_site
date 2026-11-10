export default function NotFound() {
  return (
    <main className="not-found" dir="rtl">
      <div className="not-found-mark"><span /></div>
      <span className="eyebrow">نُقطة</span>
      <h1>هذه الصفحة غير موجودة.</h1>
      <p>ربما تغيّر الرابط أو لم تعد الصفحة متاحة.</p>
      <a className="button button-primary" href="/">العودة إلى الرئيسية</a>
      <a className="not-found-en" href="/en">English</a>
    </main>
  );
}
