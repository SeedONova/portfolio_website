const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
}

