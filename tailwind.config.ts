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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "brand": {
          0: "#e7f5ff",
          1: "#d0ebff",
          2: "#a5d8ff",
          3: "#74c0fc",
          4: "#4dabf7",
          5: "#339af0",
          6: "#228be6",
          7: "#1c7ed6",
          8: "#1971c2",
          9: "#1864ab",
        },
      },
    },
  },
  plugins: [],
};
export default config;
