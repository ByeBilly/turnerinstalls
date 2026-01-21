import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f5b546",
        "accent-soft": "rgba(245, 181, 70, 0.15)",
        muted: "#a0a0a0",
        border: "#262626",
      },
    },
  },
  plugins: [],
};
export default config;

