import { transform } from "next/dist/build/swc";
import { Archivo } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        flashing: {
          "0%, 100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
        fadeIn: {
          '0%': { opacity: "0", transform: "translateY(-10px)" },
          '100%': { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDelayed: {
          '0%': { opacity: "0", transform: "translateY(-10px)" },
          '100%': { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDelayed2: {
          '0%': { opacity: "0", transform: "translateY(-10px)" },
          '100%': { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          '0%': { opacity: "0", transform: "translateX(-10px)" },
          '100%': { opacity: "1", transform: "translateX(0)" },
        }
      },
      animation: {
        marquee: 'marquee var(--marquee-duration) linear infinite',
        "fade-in": "fade-in 0.5s linear forwards",
        fadeIn: "fadeIn 0.8s ease-in-out",
        fadeInDelayed: "fadeIn 0.5s ease-in-out 0.3s both",
        fadeInDelayed2: "fadeIn 0.5s ease-in-out 0.6s both",
        fadeInLeft: "fadeInLeft 0.5s ease-in-out 0.8s both",
        flashing: "flashing 1.4s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
