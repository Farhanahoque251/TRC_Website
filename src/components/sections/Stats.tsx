import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/constants";

export function Stats() {
  return (
    <section className="bg-navy-900">
      <Container className="py-14">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-gold-500/60 pl-5">
              <dt className="font-display text-4xl font-extrabold text-white">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-navy-300">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}