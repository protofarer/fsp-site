/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fsp-green': 'hsl(85, 75%, 50%)',
        'fsp-dark': '#18262F',
      },
      // fontFamily: {
      //   display: ['roboto-condensed', ...defaultTheme.fontFamily.sans],
      //   body: ['inter-variable', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
