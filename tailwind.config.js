/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#6366F1', 
        'color-tertiary': '#F3F4F6', 
        'color-accent': '#3B82F6', 
        'color-accent-dark': '#1E40AF', 
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
