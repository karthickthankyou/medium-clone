const colors = require('tailwindcss/colors')
const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const tailwindScrollbarHide = require('tailwind-scrollbar-hide')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { primary: colors.indigo },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindScrollbarHide, lineClamp, aspectRatio],
}
