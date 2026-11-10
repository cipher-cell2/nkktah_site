export const metadata = { title: "الدعم | Nuktah" };

export default function SupportPage() {
  return (
    <main className="legal-page" dir="rtl">
      <a href="/">← نُقطة</a>
      <span className="eyebrow">نُقطة</span>
      <h1>الدعم</h1>
      <p>إذا واجهت مشكلة في قراءة كشف العلامات، استيراد Excel، الأرصدة، أو حسابك، تواصل معنا وسنساعدك.</p>
      <p><a href="mailto:support@nuktah.app">support@nuktah.app</a></p>
      <p className="legal-note">عند مراسلتنا، اذكر نوع المشكلة والخطوات التي سبقتها إن أمكن. لا ترسل كلمات المرور أو رموز التحقق.</p>
      <a href="/en/support">English support</a>
    </main>
  );
}
