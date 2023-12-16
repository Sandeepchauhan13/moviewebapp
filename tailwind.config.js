/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/Navbar.jsx",
    "./components/Hero.jsx",
    "./components/MovieRow.jsx",
    "./components/MovieItem.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Login.jsx",
    "./src/pages/Profile.jsx",
    "./src/pages/Signup.jsx",
    "./src/pages/Alert.jsx",
    "./src/index.css",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/services/movieServices.jsx",
    
  ],
  theme: {
    extend: {
      fontFamily:  {
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Nedium'],
        'nsans-bold': ['Nsans Bold'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}