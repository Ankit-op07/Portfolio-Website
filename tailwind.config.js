/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["valentine","wireframe",,"light", "cupcake","dark","nigt"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

