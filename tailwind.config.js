/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      pizza: "url('../src/Img/pizza.png')",
      countries: "url('../src/Img/countries.png')",
      posts: "url('../src/Img/posts.png')",
    },
  },
  plugins: [],
};
