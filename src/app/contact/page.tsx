import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact", description: "Speak with Bangladesh's specialist VAT consultancy. Office in Mirpur, Dhaka. We reply within one working day." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's build your VAT system the right way." lead="Whether you are facing an audit tomorrow or planning a system for next year, tell us the challenge and we will show you a lawful path forward." />
      <Contact />
      <Section tone="tint" className="py-0 pb-20 sm:pb-24">
        <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
          <iframe title="TRC office location" src="https://www.google.com/maps?q=Section-12,+Mirpur,+Dhaka+1216,+Bangladesh&output=embed" width="100%" height="380" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <p className="mt-6 text-center text-sm text-navy-600">{site.address.line1}, {site.address.line2}, {site.address.city}</p>
      </Section>
    </>
  );
}
