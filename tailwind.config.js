/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
      fontSize: {
        'tiny': '8px',
        'xxs': '10px',
      },
    },
  },
  plugins: [],
}

