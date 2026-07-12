import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services" tone="white">
      <SectionHeader
        eyebrow="What we do"
        title="Services others cannot offer."
        lead="Deep VAT specialisation across three engagement models — from a single dispute to a full one-year system your team can own."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.tier}
            className={cn(
              "flex flex-col rounded-2xl border p-8 transition-all duration-300",
              service.featured
                ? "border-navy-900 bg-navy-900 text-white shadow-card lg:-translate-y-3"
                : "border-navy-100 bg-white text-ink shadow-soft hover:-translate-y-1 hover:shadow-card"
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.16em]",
                  service.featured ? "text-gold-400" : "text-gold-600"
                )}
              >
                {service.tier}
              </span>
              {service.featured && (
                <span className="rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">
                  Most popular
                </span>
              )}
            </div>

            <p
              className={cn(
                "mt-1 text-xs font-medium",
                service.featured ? "text-navy-300" : "text-navy-500"
              )}
            >
              {service.scope}
            </p>

            <h3
              className={cn(
                "mt-5 font-display text-xl font-semibold",
                service.featured ? "text-white" : "text-navy-900"
              )}
            >
              {service.title}
            </h3>

            <p
              className={cn(
                "mt-3 text-sm leading-relaxed",
                service.featured ? "text-navy-200" : "text-navy-700/80"
              )}
            >
              {service.description}
            </p>

            <ul className="mt-6 space-y-3 border-t pt-6"
              style={{ borderColor: service.featured ? "rgba(255,255,255,0.12)" : "#E4EAF4" }}
            >
              {service.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <span
                    className={cn(
                      "mt-0.5 shrink-0",
                      service.featured ? "text-gold-400" : "text-gold-600"
                    )}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span
                    className={service.featured ? "text-navy-100" : "text-navy-800"}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <Button
                href="#contact"
                variant={service.featured ? "gold" : "outline"}
                size="sm"
                className="w-full"
              >
                Discuss this engagement
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}