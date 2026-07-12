import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "paper" | "white" | "tint" | "navy";

const toneMap: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  tint: "bg-navy-50 text-ink",
  navy: "bg-navy-900 text-navy-100",
};

export function Section({
  id,
  tone = "paper",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-24 lg:py-28", toneMap[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow eyebrow-line",
            align === "center" && "justify-center"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-display-md font-semibold",
          invert && "text-white"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            invert ? "text-navy-200" : "text-navy-700/80"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}