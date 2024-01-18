/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "svg-3": "url('/static/svg/bg-img-3.svg')",
        "inhandy-img":
          "url('https://acutrans.com/wp-content/uploads/2020/08/ASL.png')",
        "audit":
          "url('/static/imgs/ide/selfAudit.svg')",
        "genhrm": "url('/static/imgs/genHRM/login.png')",
        "404bg":
          "url(https://i.pinimg.com/originals/a5/d5/60/a5d56021b749bd3da560a014e3e433af.jpg)",
      },

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
        4: "1rem",
      },
    },
  },
  plugins: [],
};
