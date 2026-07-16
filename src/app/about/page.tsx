import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { WhyTRC } from "@/components/sections/WhyTRC";
import { Consultant } from "@/components/sections/Consultant";
import { Stats } from "@/components/sections/Stats";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "About", description: "The Real Consultation (TRC) is Bangladesh's dedicated VAT consultancy, founded in 2019 by Md. Alimuzzaman." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="Six years of building system trust." lead="TRC was founded in September 2019 to prove that a VAT consultancy could be ethical, specialised and measurably valuable - all at once." />
      <Stats />
      <About />
      <WhyTRC />
      <Consultant />
      <CTASection />
    </>
  );
}
