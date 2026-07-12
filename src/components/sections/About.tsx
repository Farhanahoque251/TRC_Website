import { Section, SectionHeader } from "@/components/ui/Section";
import { about } from "@/lib/constants";

export function About() {
  return (
    <Section id="about" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-6 font-serif text-xl leading-relaxed text-navy-800">
            {about.lead}
          </p>
          <div className="mt-6 space-y-4 text-navy-700/90">
            {about.body.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="flex flex-col gap-6 self-start">
          {[about.mission, about.vision].map((block) => (
            <div
              key={block.label}
              className="relative rounded-2xl border border-navy-100 bg-white p-8 shadow-soft"
            >
              <span className="eyebrow">{block.label}</span>
              <p className="mt-4 font-serif text-2xl font-medium leading-snug text-navy-900">
                &ldquo;{block.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                {block.text}
              </p>
              <span
                className="absolute right-8 top-8 h-2 w-2 rounded-full bg-gold-500"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}