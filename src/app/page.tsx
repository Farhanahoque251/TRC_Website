import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { WhyTRC } from "@/components/sections/WhyTRC";
import { Milestones } from "@/components/sections/Milestones";
import { Testimonials } from "@/components/sections/Testimonials";
import { Consultant } from "@/components/sections/Consultant";
import { Insights } from "@/components/sections/Insights";
import { CTASection } from "@/components/sections/CTASection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Approach />
      <WhyTRC />
      <Milestones />
      <Testimonials />
      <Consultant />
      <Insights />
      <CTASection />
      <Contact />
    </>
  );
}