import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { WhyTRC } from "@/components/sections/WhyTRC";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ClientLogos />
      <Services />
      <Approach />
      <WhyTRC />
      <Testimonials />
      <CTASection />
    </>
  );
}
