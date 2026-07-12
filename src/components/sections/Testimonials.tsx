import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials, clients } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Trusted by leaders"
        title="What senior finance leaders say."
        lead="From FMCG to construction, the people who run VAT and finance at Bangladesh's largest groups."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-navy-100 bg-paper p-8 shadow-soft"
          >
            <span
              className="font-serif text-5xl leading-none text-gold-500"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 font-serif text-lg leading-relaxed text-navy-800">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-navy-100 pt-5">
              <p className="font-display text-sm font-semibold text-navy-900">
                {t.name}
              </p>
              <p className="text-sm text-navy-600">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Client wordmarks */}
      <div className="mt-14 border-t border-navy-100 pt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">
          A selection of companies we have served
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {clients.map((c) => (
            <li
              key={c}
              className="font-display text-base font-bold text-navy-400 transition-colors hover:text-navy-700 sm:text-lg"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}