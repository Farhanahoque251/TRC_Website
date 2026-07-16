
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { clients } from "@/lib/constants";

export function ClientLogos() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-navy-100 bg-white py-16">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-navy-500">Trusted by leading organisations</p>
      </Container>
      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <li key={c.file + i} className="shrink-0">
              <Image src={"/clients/" + c.file} alt={c.name} width={400} height={160} className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
