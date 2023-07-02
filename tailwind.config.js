/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        primary: "#035e99",
        secondary: "#ff6600",
        "light-text": "#000",
        "light-bg": "#EDEDED",
        'light': '#f5f5f5',
        "dark-text": "#ffffff",
        "dark-bg": "#303030",
        'danger': 'rgb(220 38 38)',
        'warning': 'rgb(251 146 60)',
        'white': '#ffffff'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '300px',
        'xs-75': '375px',
        'sm-4': '400px',
        'xl-2k':'2560px',
        'xl-1k':'1440px',
     }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
  ],
}
