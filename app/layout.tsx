import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuktah.app"),
  title: {
    default: "Nuktah — من ورقة العلامات إلى نتائج مرتّبة",
    template: "%s | Nuktah"
  },
  description: "Nuktah helps Algerian teachers read handwritten grade sheets, match marks to students by matricule, and review every result before saving.",
  alternates: {
    canonical: "/",
    languages: {
      "ar-DZ": "/",
      "en": "/en"
    }
  },
  openGraph: {
    title: "Nuktah — خلّي النقطة توصل لصاحبها",
    description: "حوّل ورقة العلامات المكتوبة بخط اليد إلى نتائج رقمية مرتّبة.",
    url: "https://nuktah.app",
    siteName: "Nuktah",
    locale: "ar_DZ",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
