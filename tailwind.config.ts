import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          'primary': '#F5222D',
          'secondary': '#D9D9D9',
          'background': '#FFFFFF',       
          'text': '#000000',
          'error': '#F44336'
        },
        dark: {
          'primary': '#F5222D',
          'secondary': '#D9D9D9',
          'background': '#000000',     
          'text': '#FFFFFF',
          'error': '#F44336'
        }
        
      }
    },
  },
  plugins: [],
};
export default config;
