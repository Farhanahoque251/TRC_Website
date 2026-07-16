import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { SectorGrid } from "@/components/sections/SectorGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Services", description: "VAT audit defence, Zero-VAT project systems, and 360 VAT infrastructure for Bangladesh's most demanding industries." };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="VAT services others cannot offer." lead="Three engagement models - from defending a single audit to handing your team a complete VAT system they can run themselves." />
      <Services />
      <Approach />
      <SectorGrid />
      <CTASection />
    </>
  );
}
