"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-navy-100 bg-white/90 backdrop-blur-md" : "border-b border-transparent bg-transparent")}>
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline text-sm font-medium text-navy-800 hover:text-navy-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-navy-800 hover:text-navy-900">
            {site.phone}
          </a>
          <Button href="#contact" variant="gold" size="sm">
            Book a consultation
          </Button>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <span className="relative block h-4 w-6">
            <span className={cn("absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-200", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-3 h-0.5 w-6 bg-current transition-transform duration-300", open && "top-1.5 -rotate-45")} />
          </span>
        </button>
      </Container>

      <div className={cn("overflow-hidden bg-white lg:hidden", open ? "max-h-[80vh] border-t border-navy-100" : "max-h-0")} style={{ transition: "max-height 0.35s ease" }}>
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50">
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-navy-100 pt-4">
            <a href={site.phoneHref} className="px-3 text-sm font-semibold text-navy-700">
              {site.phone}
            </a>
            <Button href="#contact" variant="gold" onClick={() => setOpen(false)}>
              Book a consultation
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
