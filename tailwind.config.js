module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ["hover", "disabled"],
      ringColor: ["hover"],
      backgroundColor: ["disabled"]
    },
  },
  plugins: [],
}
