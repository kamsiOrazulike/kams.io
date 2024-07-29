/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "off-white": "#2e2d28",
      "off-white-2": "#171614",
      "off-green": "#FFFCF5",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "svg-3": "url('/static/svg/bg-img-3.svg')",
        "inhandy-img":
          "url('https://acutrans.com/wp-content/uploads/2020/08/ASL.png')",
        audit: "url('/static/imgs/selfAudit.svg')",
        birdseye: "url('/static/imgs/birdseye.png')",
        name: "url('/static/svg/name.svg')",
        genhrm: "url('/static/imgs/genHRM/login.png')",
        "404bg":
          "url(https://i.pinimg.com/originals/a5/d5/60/a5d56021b749bd3da560a014e3e433af.jpg)",
      },
    },
  },
  plugins: [],
};
