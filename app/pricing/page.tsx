import Pricing from "@/components/pricing";

export const metadata = {
  title: "الأسعار",
  description: "نظام أرصدة نُقطة: ابدأ مجاناً، ثم ادفع حسب الاستعمال بدون اشتراك شهري."
};

export default function PricingPage() {
  return <Pricing locale="ar" />;
}
