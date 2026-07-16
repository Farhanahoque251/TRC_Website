import { Container } from "@/components/ui/Container";

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-texture pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-navy-grid opacity-[0.6] [background-size:56px_56px]" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow eyebrow-line text-gold-400">{eyebrow}</span>
          <h1 className="mt-5 text-display-lg font-extrabold text-white">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{lead}</p>}
        </div>
      </Container>
    </section>
  );
}
