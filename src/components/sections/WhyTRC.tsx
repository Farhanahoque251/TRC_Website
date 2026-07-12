import { Section, SectionHeader } from "@/components/ui/Section";
import { values, sectors } from "@/lib/constants";

export function WhyTRC() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow={values.eyebrow}
            title={values.title}
            lead={values.lead}
          />

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
              Sectors we build systems for
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-800"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 sm:grid-cols-2">
          {values.items.map((item, i) => (
            <div key={item.title} className="bg-white p-8">
              <span className="font-display text-sm font-bold text-gold-600">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}