/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: [
    "./app/**/*.js","./app/*.js", "./index.js","./components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}

