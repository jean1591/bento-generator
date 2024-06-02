module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "base-color": "#FAF8F8",
        "base-content": {
          100: "#d4d4d6",
          200: "#a9a9ae",
          300: "#7f7f85",
          400: "#54545d",
          500: "#292934",
          600: "#21212a",
          700: "#19191f",
          800: "#101015",
          900: "#08080a",
        },
        primary: {
          100: "#dad9e3",
          200: "#b5b3c7",
          300: "#918eaa",
          400: "#6c688e",
          500: "#474272",
          600: "#39355b",
          700: "#2b2844",
          800: "#1c1a2e",
          900: "#0e0d17",
        },
      },
    },
  },
  plugins: [],
};
