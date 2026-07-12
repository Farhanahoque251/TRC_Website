import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/constants";

export function Logo({
  invert = false,
  className,
  showWordmark = true,
}: {
  invert?: boolean;
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          className="h-11 w-11"
          aria-hidden="true"
          fill="none"
        >
          {/* Outer gold ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="#C9A227"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="120 20"
            transform="rotate(-45 24 24)"
          />
          {/* Navy core */}
          <circle cx="24" cy="24" r="17" fill={invert ? "#0F2551" : "#0A1B3D"} />
          {/* Ledger bars */}
          <g fill="#FFFFFF" opacity="0.9">
            <rect x="24" y="17" width="11" height="2.4" rx="1.2" />
            <rect x="24" y="22.8" width="11" height="2.4" rx="1.2" />
            <rect x="24" y="28.6" width="8" height="2.4" rx="1.2" />
          </g>
          {/* Gold check */}
          <path
            d="M13 24.5l5 5L31 15.5"
            stroke="#C9A227"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-extrabold tracking-tight",
              invert ? "text-white" : "text-navy-900"
            )}
          >
            TRC
          </span>
          <span
            className={cn(
              "mt-1 text-[10px] font-medium uppercase tracking-[0.18em]",
              invert ? "text-navy-300" : "text-navy-600/70"
            )}
          >
            The Real Consultation
          </span>
        </span>
      )}
    </Link>
  );
}