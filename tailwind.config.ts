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
        barlow: ['Barlow', "sans-serif"],
      },
      dropShadow: {
        'glow': [
          '0 0 2px rgba(214, 126, 244, 1)',
          '0 0 2px rgba(214, 126, 244, 1)'
        ],
      },
      backgroundImage: {
        'custom-bg': "url('/assets/Topology.png')",
      },
    },
  },
  plugins: [],
};
export default config;
