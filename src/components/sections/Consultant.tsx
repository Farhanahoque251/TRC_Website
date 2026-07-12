import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { consultant } from "@/lib/constants";

export function Consultant() {
  return (
    <Section id="consultant" tone="tint">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait */}
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-texture shadow-card">
            {/*
              Replace this block with a real headshot:
              <Image src="/alimuzzaman.jpg" alt={consultant.name} fill className="object-cover" />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-7xl font-extrabold text-white/90">
                AZ
              </span>
              <span className="mt-3 text-xs uppercase tracking-[0.2em] text-navy-300">
                Lead Consultant
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-6">
              <p className="font-display text-lg font-bold text-white">
                {consultant.name}
              </p>
              <p className="text-xs text-gold-400">Member, IVA · Belgium</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <span className="eyebrow eyebrow-line">{consultant.eyebrow}</span>
          <h2 className="mt-4 text-display-md font-semibold text-navy-900">
            {consultant.name}
          </h2>
          <p className="mt-2 font-medium text-gold-600">{consultant.role}</p>

          <div className="mt-6 space-y-4 text-navy-700/90">
            {consultant.bio.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {consultant.credentials.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-navy-800">
                <span className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href={consultant.linkedin} variant="outline" size="sm">
              Connect on LinkedIn
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}