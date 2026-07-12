import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero, credentials } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-texture pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-navy-grid opacity-[0.6] [background-size:56px_56px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow eyebrow-line text-gold-400">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-display-xl font-extrabold text-white">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="gold" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              size="lg"
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {hero.secondaryCta.label}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        {/* Proof stats */}
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {hero.proof.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {item.value}
                </span>
                <span className="mt-1 block text-sm text-navy-300">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Credentials strip */}
      <div className="relative mt-16 border-y border-white/10 bg-navy-950/40 py-4">
        <Container>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-medium text-navy-300 sm:text-sm">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="text-gold-500" aria-hidden="true">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}