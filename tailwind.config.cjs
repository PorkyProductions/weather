/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte', './src/components/**/*.svelte', 'index.html'],
  theme: {
    fontFamily: {
        primary: ['Raleway', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-black': '#0E131F',
        'secondary-blueGrey': '#38405F',
        'secondary-steel': '#59546C',
        'secondary-silver': '#8B939C',
        'hotshot': '#FF0035',
      },
    }
  },
  plugins: [],
}