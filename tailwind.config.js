module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      handwriting: ["Satisfy"],
      lilita: ["Lilita One"],
      righteous: ["Righteous"],
      roboto: ["Roboto Mono"],
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      height: {
        quarter: "25vh",
        half: "50vh",
        threequarters: "75vh",
      },
      maxHeight: {
        "1/4": "25vh",
        "1/3": "33vh",
        "1/2": "50vh",
      },
    },
  },
  plugins: [],
};
