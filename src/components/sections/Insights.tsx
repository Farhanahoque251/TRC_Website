import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { insights } from "@/lib/constants";

export function Insights() {
  return (
    <Section id="insights" tone="paper">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeader
          eyebrow={insights.eyebrow}
          title={insights.title}
          lead={insights.lead}
        />
        <Button href={insights.portal.href} variant="ghost" size="sm">
          {insights.portal.label}
          <span aria-hidden="true">↗</span>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {insights.items.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="inline-flex w-fit rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
              {item.tag}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy-900">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/80">
              {item.text}
            </p>
            <span
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              Read more →
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}