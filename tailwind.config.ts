import type { Config } from "tailwindcss";
import { appConfig } from "./config/app";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
    // colors:{
    //   appConfig.colors
    // }
    },
  },
  plugins: [],
};
export default config;
