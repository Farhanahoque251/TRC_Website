import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Milestones } from "@/components/sections/Milestones";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Track Record", description: "Close to BDT 100 crore saved for clients through lawful VAT planning. Milestones, case results and testimonials." };

export default function ResultsPage() {
  return (
    <>
      <PageHero eyebrow="Track record" title="Results measured in crore, not promises." lead="Every figure below was achieved within the framework of the law - through planning, documentation and disciplined representation." />
      <Stats />
      <Milestones />
      <Testimonials />
      <CTASection />
    </>
  );
}
