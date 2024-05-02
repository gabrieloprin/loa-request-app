/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        getwellGreen: {
          500: "#32b291d9",
          600: "#32B291",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
