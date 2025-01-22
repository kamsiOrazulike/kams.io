import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute bg-transparent top-0 left-0 w-full flex justify-between items-center p-4 z-40">
      <a
        href={"/"}
        className="text-off-green/60 hover:text-off-green font-light text-[1rem] transition-colors duration-300 flex items-center"
      >
        <img src="/static/svg/KO.svg" className="w-8" />
      </a>

      <a
        href="mailto:kamsi_orazulike@icloud.com"
        className="text-off-green/60 hover:text-off-green font-light text-[1rem] transition-colors duration-300 flex items-center"
      >
        <span className="inline-block">Get in touch</span>
      </a>
    </nav>
  );
}
