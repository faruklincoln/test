import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "alture-purple": "#5225CE",
        "alture-indigo": "#3B1CA5",
        "alture-pink": "#FF7AC6",
        "alture-sand": "#F7E8D8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "alture-gradient": "radial-gradient(circle at top left, #FF7AC6 0%, #5225CE 35%, #0B0F37 100%)"
      }
    }
  },
  plugins: []
};

export default config;
