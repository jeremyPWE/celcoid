module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aqua: "#35AAB1",
        bwhite: "#FAFAFA",
        nude: "#EDEDED",
        dark: "#444242",
        primeText: "#1E3240",
        subText: "#636363",
        thirdText: "#bdbdbd",
        ringfocus: "#35AAB1",
        layer: "#00000010",
      },
      spacing: {
        490: "30.625rem",
        350: "21.875rem",
        488: "30.5rem",
        400: "25rem",
        287: "17.875rem",
        520: "32.5rem",
        690: "43.125rem",
        500: "620px",
        700: "700px",
        1000: "1000px",
        1280: "1280px",
        1440: "1440px",
      },
      fontFamily: {
        mulish: ["Mulish, sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slideL: "slideL 500ms linear",
        slideR: "slideR 500ms linear",
      },
      keyframes: {
        slideL: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideR: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
};
