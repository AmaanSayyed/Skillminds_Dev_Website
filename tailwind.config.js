/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins:{
    preflight: false,
  },
  prefix: 'tw-', // Add this line to scope Tailwind CSS
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}

