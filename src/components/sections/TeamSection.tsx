import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { team } from "@/lib/constants";

function PhotoCard({ name, role, file }: { name: string; role: string; file: string }) {
  return (
    <div className="group text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-navy-100 shadow-soft">
        <Image src={"/team/" + file} alt={name} width={300} height={300} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">{name}</h3>
      <p className="mt-1 text-sm text-navy-600">{role}</p>
    </div>
  );
}

export function TeamSection() {
  return (
    <>
      <Section tone="paper">
        <SectionHeader eyebrow="Advisory Board" title="Guided by senior industry leaders." lead="Our advisory board brings decades of financial and industrial leadership from some of Bangladesh's most respected groups." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.advisory.map((m) => (<PhotoCard key={m.name} name={m.name} role={m.role} file={m.file} />))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="Expert Team" title="Practising VAT consultants." lead="Seasoned professionals who represent clients before authorities and build compliance systems day to day." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.expert.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-navy-100 shadow-soft">
                <Image src={"/team/" + m.file} alt={m.name} width={300} height={300} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-navy-900">{m.name}</h3>
              <p className="mt-1 text-xs text-navy-600">{m.role}</p>
              <p className="mt-1 text-xs font-medium text-gold-600">{m.exp} experience</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeader eyebrow="Research Team" title="The analysts behind every case." lead="Finance, law and accounting specialists who prepare the interpretations and documentation that win cases." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.research.map((m) => (
            <div key={m.name} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <h3 className="font-display text-base font-semibold text-navy-900">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{m.detail}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold-600">{m.exp} experience</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader eyebrow="IT Team" title="Technology & media." lead="The team building TRC's digital tools and producing VAT awareness content." />
        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:max-w-3xl">
          {team.it.map((m) => (<PhotoCard key={m.name} name={m.name} role={m.role + " · " + m.exp} file={m.file} />))}
        </div>
      </Section>
    </>
  );
}
