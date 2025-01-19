import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syneFont)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
