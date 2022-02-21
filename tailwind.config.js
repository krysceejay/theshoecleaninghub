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
        "cgrey-2": "#A8A8A8",
        "cmain": "#FDEB69",
        "light-yellow": "#FEF6BC",
        "dark-yellow": "#D29B00",
        "light-grey": "#F5F5F5",
        "cat-img-overlay": "rgba(205, 205, 205, 0.3)",
        "active-order-border": "rgba(117, 117, 117, 0.4)",
        "no-order-bg": "rgba(219, 219, 219, 0.4)",
        "cat-item-bg": "rgba(6, 6, 6, 0.2)",
        "modal-overlay": "rgba(105, 105, 105, 0.7)",
        "edit-profile-overlay": "rgba(0, 0, 0, 0.4)"
      },
      spacing: {
        "wshoe": "105px",
        "wcat-shoe": "108px",
        "hcat-shoe": "90px",
      },
      minHeight: {
        'cat-s-h': '105px',
      },
      borderWidth: {
        '06': '0.6px',
      }
    },
  },
  plugins: [],
}
