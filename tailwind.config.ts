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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgText: "#59616A",
        headerMain: "#E3E6EA",
        headerDescription: "#59616A",
        borderOutline: "#363E46",
        placeholderColor: "#BBC1CD"
      },
    },
  },
  plugins: [],
} satisfies Config;
