import { Section, SectionHeader } from "@/components/ui/Section";
import { milestones } from "@/lib/constants";

export function Milestones() {
  return (
    <Section id="milestones" tone="navy">
      <SectionHeader
        eyebrow="Track record"
        title="Six years, measurable results."
        lead="Complexity turned into clarity — a selection of milestones delivered within the framework of the law."
        invert
      />

      <div className="mt-14">
        <ol className="relative space-y-10 border-l border-white/15 pl-8 sm:pl-10">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              {/* Node */}
              <span
                className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[49px]"
                aria-hidden="true"
              >
                <span className="h-3 w-3 rounded-full border-2 border-gold-500 bg-navy-900" />
              </span>

              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
                  {m.year}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">
                    {m.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}