import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/image.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-custom": "rgb(17,17,17,1)",
        "footer-color": "rgb(28 28 28)",
      },
      textColor: {
        "white-opacity": "rgb(102,102,102,1)",
      },
      fontFamily: {
        geistMono: "var(--font-geist-mono)",
        geistSans: "var(--font-geist-sans)",
        silkscreen: "var(--font-silkscreen)",
      },
    },
  },
  plugins: [],
} satisfies Config;
