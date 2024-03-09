/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Open Sans', 'sans-serif'],
        shadow: ['Shadows Into Light Two', 'cursive'],
        ptserif: ['PT Serif', 'serif'],
        'old-standard': ['Old Standard TT', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#CB8C1D',
        },
        dark: {
          DEFAULT: '#212121',
          400: '#666666',
        },
        light: {
          DEFAULT: '#e1e1e1',
          400: '#f1f1f1',
        },
      },
    },
  },
  plugins: [],
}

