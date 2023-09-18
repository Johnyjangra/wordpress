/** @type {import('tailwindcss').Config} */
//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        gilroyRegular: ["gilroy-regular"],
        gilroyMedium: ["gilroy-medium"],
        gilroyBold: ["gilroy-bold"],
        gilroyHeavy: ["gilroy-heavy"],
        gilroyLight: ["gilroy-light"],
        Personal: ["personal"],
      },
    },
  },
  plugins: [],
};
