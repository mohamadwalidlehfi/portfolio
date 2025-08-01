/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // يشمل جميع الملفات في مجلد src
  ],
  theme: {
    extend: {scrollbar: {
        width: "8px",
        track: "bg-gray-700",
        thumb: "bg-yellow-500",
      },},
  },
  plugins: [],
};