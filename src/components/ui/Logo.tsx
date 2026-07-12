import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/constants";

export function Logo({ invert = false, className, showWordmark = true }: { invert?: boolean; className?: string; showWordmark?: boolean }) {
  return (
    <Link href="/" aria-label={site.name + " - home"} className={cn("group inline-flex items-center gap-3", className)}>
      <span className={cn("inline-flex items-center justify-center", invert && "rounded-xl bg-white p-1.5")}>
        <Image src="/trc-logo.png" alt="TRC logo" width={275} height={255} priority className="h-11 w-auto" />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-lg font-extrabold tracking-tight", invert ? "text-white" : "text-navy-900")}>TRC</span>
          <span className={cn("mt-1 text-[10px] font-medium uppercase tracking-[0.18em]", invert ? "text-navy-300" : "text-navy-600/70")}>The Real Consultation</span>
        </span>
      )}
    </Link>
  );
}
