import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Deep navy — primary brand
        navy: {
          50: "#F2F5FB",
          100: "#E4EAF4",
          200: "#C3D0E5",
          300: "#93A8CC",
          400: "#5B79B0",
          500: "#2A5599",
          600: "#1E4079",
          700: "#163264",
          800: "#0F2551",
          900: "#0A1B3D",
          950: "#050D22",
        },
        // Gold — accent, used with restraint
        gold: {
          100: "#F6EFD8",
          200: "#EFE2B8",
          300: "#E6D08A",
          400: "#D9BC5E",
          500: "#C9A227",
          600: "#B8862F",
          700: "#9A6E1E",
        },
        paper: "#F7F8FB",
        ink: "#0B1220",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10, 27, 61, 0.04), 0 8px 24px -12px rgba(10, 27, 61, 0.12)",
        card: "0 1px 3px rgba(10, 27, 61, 0.05), 0 20px 40px -24px rgba(10, 27, 61, 0.22)",
        gold: "0 12px 30px -12px rgba(201, 162, 39, 0.45)",
      },
      backgroundImage: {
        "navy-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease both",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;