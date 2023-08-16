/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#019541",
        yellow: "#edcb11",
        grey: "#E0DEDE",
        dark: "#161616",
        light: "#f7f7f7",
      },
      translate: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
