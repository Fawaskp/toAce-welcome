export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: ['class'],
  theme: {
    extend: {
      height:{
        'fill-available':''
      },
      textColor: {
        default: '#1B85E7',
      },
      backgroundColor: {
        default: 'rgba(27, 133, 231, 1)',
        'default-dark': '#1B79D0',
      },
      borderColor: {
        default: 'rgba(27, 133, 231, 1)',
      },
      borderWidth: {
        '16': '16px'
      },
    },
  },
  plugins: [],
}

