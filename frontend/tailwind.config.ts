import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Özel CSS değişkeni (arka plan rengi)
        foreground: "var(--foreground)", // Özel CSS değişkeni (ön plan rengi)
        primary: "#1D4ED8", // Örnek birincil renk
        secondary: "#9333EA", // Örnek ikincil renk
        accent: "#10B981", // Örnek vurgu rengi
      },
      spacing: {
        128: "32rem", // 128 birimlik özel boşluk
        144: "36rem", // 144 birimlik özel boşluk
      },
      animation: {
        spinSlow: "spin 10s linear infinite", // Yavaş dönme animasyonu
        pulseFast: "pulse 1s ease-in-out infinite", // Hızlı bir nabız animasyonu
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Özel yazı tipi ailesi
        serif: ["Merriweather", "serif"], // Örnek serif yazı tipi
      },
    },
  },
} satisfies Config;
