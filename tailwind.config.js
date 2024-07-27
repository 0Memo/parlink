/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      navbar: ['Homemade Apple'],
      h1: ['Kalam'],
      h3: ['Kalam'],
      body: ['Kalam'],
      titleTest: ['Poppins'],
      bodyTest: ['Montserrat'],
      input: ['Kalam'],
      button: ['Kalam'],
      footer: ['Kalam'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
    },
    extend: {
      lineClamp: {
        8: '8',
        10: '10',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}