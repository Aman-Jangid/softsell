/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      keyframes: {
        "lever-pull": {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(35px)" },
          "70%": { transform: "translateY(20px)" },
          "85%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "lever-pull": "lever-pull 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
