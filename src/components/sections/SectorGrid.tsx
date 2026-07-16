import { Section, SectionHeader } from "@/components/ui/Section";
import { sectors } from "@/lib/constants";

export function SectorGrid() {
  return (
    <Section tone="navy">
      <SectionHeader eyebrow="Sector-wise VAT" title="Every industry has its own supply chain." lead="Compliance rules only work when they match how a business actually operates. We build the rules to fit the sector, not the other way round." invert />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((s) => (
          <li key={s} className="bg-navy-900 px-6 py-8 text-center transition-colors hover:bg-navy-800">
            <span className="font-display text-lg font-semibold text-white">{s}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
