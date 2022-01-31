module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      fontSize: {
        "tiny": "11px",
        "sml": "15px",
      },
      colors: {
        "cdark": "#060606",
        "clight": "#757575",
        "cgrey-1": "#DBDBDB",
        "cmain": "#FDEB69",
      },
    },
  },
  plugins: [],
}
