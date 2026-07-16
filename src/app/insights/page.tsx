import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Insights } from "@/components/sections/Insights";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Insights", description: "VATBONDHU News, seminars, training and publications - making VAT understandable for everyone." };

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights & media" title="Making VAT understandable for everyone." lead="Through VATBONDHU News, seminars and monthly training, TRC has built a community that understands VAT and follows fair practice." />
      <Insights />
      <CTASection />
    </>
  );
}
