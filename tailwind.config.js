/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["wireframe","valentine","light", "cupcake","dark"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

