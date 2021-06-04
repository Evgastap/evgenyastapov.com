module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    fontFamily: {
      'handwriting': ['Satisfy'],
      'lilita': ['Lilita One'],
      'righteous': ['Righteous']
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      height: {
        'quarter': '25vh',
        'half': '50vh',
        'threequarters': '75vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
