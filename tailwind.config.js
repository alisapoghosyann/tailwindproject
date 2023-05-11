const { Poppins } = require("next/font/google");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient":
          "radial-gradient(var(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%), #FFFFFF;))",
        gradient:
          "linear-gradient(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%)",
        rainbowGradient:
          "linear-gradient(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%)",
        "gradient-image":
          "url('../../src/assets/digital/order.png'),linear-gradient(180.65deg, #a58aff -43%, #0c0329 108.59%)",
      },
      colors: {
        primary: "#8E6DFD",
        "titles-gradient": `linear-gradient(126.39deg, #2AE7BC 4.16%, #09A6F0 45.29%, #9669FD 87.92%), #2AE7BC;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;`,
        "light-purple": "#8E6DFD",
        "dark-grey": "#272323",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundColor: {
        "grey-100": " rgba(255, 255, 255, 0.1)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      borderColor: {
        lightPurple: "#8E6DFD",
        whitePurple: "rgba(142, 109, 253, 0.3)",
      },
    },
  },
  plugins: [],
};
