import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-texture px-8 py-14 text-center shadow-card sm:px-14 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-navy-grid opacity-40 [background-size:48px_48px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow eyebrow-line justify-center text-gold-400">
              Start with a conversation
            </span>
            <h2 className="mt-5 text-display-md font-semibold text-white">
              Turn your VAT exposure into a system you can trust.
            </h2>
            <p className="mt-4 text-lg text-navy-200">
              Speak with a specialist who will show you a clear, lawful path —
              whether you&apos;re facing an audit or building from scratch.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#contact" variant="gold" size="lg">
                Book a consultation
              </Button>
              <Button
                href={site.phoneHref}
                size="lg"
                className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Call {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}