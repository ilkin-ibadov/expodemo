/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat-Regular",
        montserratLight: "Montserrat-Light",
        montserratLightItalic: "Montserrat-LightItalic",
        montserratMedium: "Montserrat-Medium",
        montserratSemiBold: "Montserrat-SemiBold",
        montserratBold: "Montserrat-Bold",
      }
    },
  },
  plugins: [],
}