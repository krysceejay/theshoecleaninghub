module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['Gotham', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        "tiny": "0.6rem",
        "sml": "15px",
      },
      colors: {
        "cdark": "#060606",
        "clight": "#757575",
      },
    },
  },
  plugins: [],
}
