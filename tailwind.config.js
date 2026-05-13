/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': { 400: '#00e5ff', 950: '#001a22' },
      },
      fontFamily: {
        'mono': ['Space Mono', 'ui-monospace', 'monospace'],
        'syne': ['Syne', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
