/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('/src/assets/image/Hero.jpg')",
      },
    },
  },
  plugins: [],
};
