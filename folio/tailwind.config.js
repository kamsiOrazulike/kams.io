/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#101010",
        "off-white-2": "#000000",
        "off-green": "#ffffff",
        "canvas-dark": "#1A1A1A",
        "canvas-gray": "#2E2E2E",
        "canvas-light": "#FFFCF5",
        "canvas-accent": "#00CC6A",
        "canvas-hover": "#00E676",
        "canvas-error": "#FF3B3B",
        "canvas-success": "#00E676",
        "canvas-warning": "#FFB800",
      },
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
        profile: "url('/static/imgs/Me.png')",
        logo: "url('/static/imgs/KO.png')",
        genhrm: "url('/static/imgs/genHRM/login.png')",
        "404bg":
          "url(https://i.pinimg.com/originals/a5/d5/60/a5d56021b749bd3da560a014e3e433af.jpg)",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        85: "0.85",
      },
      spacing: {
        128: "32rem",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
