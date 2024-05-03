import React from "react";
import { AiOutlineHome, AiOutlineLaptop, AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  // Define your options array
  const options = [{ title: "Home", icon: <AiOutlineHome />, link: "/" }];

  return (
    <nav className="absolute bg-transparent top-0 left-0 w-full flex justify-between items-center p-4 z-40">
      {options.map((option, index) => (
        <div key={index}>
          <a
            href={option.link}
            className="text-gray-400 hover:text-white font-light text-[1rem] transition-colors duration-300 flex items-center"
          >
            <span className="inline-block ml-2">{option.title}</span>
          </a>
        </div>
      ))}
      <a
        href="mailto:kamsi_orazulike@icloud.com"
        className="border-b border-b-gray-400 hover:border-b-white text-gray-400 hover:text-white font-light text-[1rem] transition-colors duration-300 flex items-center"
      >
        <span className="inline-block">Get in touch</span>
      </a>
    </nav>
  );
}
