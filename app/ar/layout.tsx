export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <div dir="rtl" lang="ar" className="min-h-screen">{children}</div>;
}