/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'san-serif'],
      },
      colors: {
        // Primary
        Purple: '#854DFF',
        LightRed: '#FF5757',
        // Neutral
        White: '#FFFFFF',
        OffWhite: '#F0F0F0',
        LightGrey: '#DBDBDB',
        SmokeyGrey: '#716F6F',
        OffBlack: '#141414',
      },
    },
  },
  plugins: [],
}

