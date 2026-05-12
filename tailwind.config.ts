import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        spa: {
          ink: "#0c0a09",
          charcoal: "#1c1917",
          mist: "#e7e5e4",
          rose: "#c4a59d",
          gold: "#b8956c",
          cream: "#faf7f2",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(184, 149, 108, 0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 20%, rgba(196, 165, 157, 0.12), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
