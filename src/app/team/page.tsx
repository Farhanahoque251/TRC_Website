import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Our Team", description: "Meet Team TRC - an advisory board of senior industry leaders, expert VAT consultants, a research team and an IT & media team." };

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Meet our team" title="The specialists behind The Real Consultation." lead="An advisory board of industry leaders, a bench of practising VAT consultants, and the research and technology teams that support every engagement." />
      <TeamSection />
      <CTASection />
    </>
  );
}
