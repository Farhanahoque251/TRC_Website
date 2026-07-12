import { Section, SectionHeader } from "@/components/ui/Section";
import { approach } from "@/lib/constants";

export function Approach() {
  return (
    <Section id="approach" tone="tint">
      <SectionHeader
        eyebrow={approach.eyebrow}
        title={approach.title}
        lead={approach.subtitle}
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {approach.steps.map((step, i) => (
          <li
            key={step.n}
            className="relative rounded-2xl bg-white p-8 shadow-soft"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl font-extrabold text-navy-100">
                {step.n}
              </span>
              <span className="h-px flex-1 bg-navy-100" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
              {step.text}
            </p>
            {i < approach.steps.length - 1 && (
              <span
                className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold-500 md:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}