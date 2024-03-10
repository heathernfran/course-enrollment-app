import type { Config } from "tailwindcss";

/**
 * colors:
 * neutral_0: #000000
 * neutral_100: #FFFFFF
 * neutral_80: #CCCCCC
 * primary_20: #4D0001
 * primary_30: #600C20
 * primary_60: #ED0000
 * primary_40: #A61518
 * blue_50: #0073DD
 *
 * font-size/line-height:
 * title-large: 34/38
 * title-small: 30/38
 * heading-medium: 24/32
 * heading-small: 20/26
 * body-medium: 18/24
 */

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        neutral: {
          80: "#CCCCCC",
        },
        blue: {
          50: "#0073DD",
        },
        primary: {
          20: "#4D0001",
          30: "#600C20",
          40: "#A61518",
          60: "#ED0000",
        },
      },
      fontSize: {
        "title-large": ["34px", "38px"],
        "title-small": ["30px", "38px"],
        "heading-medium": ["24px", "32px"],
        "heading-small": ["20px", "26px"],
        "body-medium": ["18px", "24px"],
      },
    },
  },
  plugins: [],
};
export default config;
