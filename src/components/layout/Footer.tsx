
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site, footerNav, social } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-300/90">
              Bangladesh&apos;s specialist VAT consultancy building compliant, leak-proof systems where compliance is the default state.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{site.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-navy-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950">
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-navy-300 transition-colors hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
              <a href={site.emailHref} className="block text-navy-300 transition-colors hover:text-white">{site.email}</a>
              <a href={site.phoneHref} className="block text-navy-300 transition-colors hover:text-white">{site.phone}</a>
              <p className="text-navy-300/90">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-400 sm:flex-row sm:items-center">
          <p>&copy; {year} {site.name} (TRC). All rights reserved.</p>
          <p>{site.domain} &middot; Consultancy since {site.founded}</p>
        </div>
      </Container>
    </footer>
  );
}
