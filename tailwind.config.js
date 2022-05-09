module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      stretch: {
        display: 'inline-block',
        margin: '2rem',
        transform: 'scale(1.2, 2.4)'
      }
    },
  },
  plugins: [],
}