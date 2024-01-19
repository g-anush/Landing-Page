/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#0b132a",
          "200": "#0d1025",
          "300": "rgba(18, 24, 45, 0.1)",
          "400": "rgba(255, 255, 255, 0)",
        },
        lightsteelblue: "#b6c0db",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#ecedf0",
        },
        darkslateblue: "rgba(32, 47, 86, 0.11)",
        dimgray: "#4f5665",
        lavenderblush: "#ffecec",
        tomato: {
          "100": "#f53838",
          "200": "rgba(247, 71, 67, 0.07)",
          "300": "rgba(245, 56, 56, 0.35)",
        },
        crimson: "#f53855",
        gainsboro: {
          "100": "#dde0e4",
          "200": "#ddd",
        },
        silver: "#afb5c0",
        aliceblue: "#e7f2ff",
        deepskyblue: "rgba(66, 210, 255, 0.1)",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
      },
      borderRadius: {
        "13xl-9": "32.9px",
        "8xs-7": "4.7px",
        "4xl-5": "23.5px",
        "lgi-7": "19.7px",
        "10xs-8": "2.8px",
        "mini-1": "14.1px",
      },
    },
    fontSize: {
      "6xs-6": "6.6px",
      "xs-7": "11.7px",
      "3xs-4": "9.4px",
      "5xs-5": "7.5px",
      "base-4": "16.4px",
      "4xs-5": "8.5px",
      "9xs-9": "3.9px",
      "6xs": "7px",
      "7xs-6": "5.6px",
      "8xs-5": "4.5px",
      "3xs-8": "9.8px",
      "7xs-1": "5.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
