import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-red": "#FC4747",
        "very-dark-blue": "#10141E",
        "light-blue": "#5A698F",
        "dark-blue": "#161D2F", 
      },
    },
  },
  plugins: [],
};
export default config;
