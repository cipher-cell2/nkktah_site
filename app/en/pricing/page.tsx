import Pricing from "@/components/pricing";

export const metadata = {
  title: "Pricing",
  description: "Nuktah credit-based pricing: start free and pay as you go, with no monthly subscription."
};

export default function EnglishPricingPage() {
  return <Pricing locale="en" />;
}
