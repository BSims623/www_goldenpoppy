import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--background)",
        primaryHover: "var(--primary-hover)",
        secondary: "var(--foreground)",
        accent: "var(--accent)",
      },
      spacing: {
        mainSize: "var(--main-size)",
      },
    },
  },
  plugins: [],
} satisfies Config;
