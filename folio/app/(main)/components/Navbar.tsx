import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="fixed bg-transparent top-0 left-0 w-full flex justify-between items-center p-4 z-40">
      <div>
        <a
          href="/"
          className="no-underline bg-white text-black px-4 py-2 rounded-md hover:bg-transparent border border-white hover:border hover:text-white transition-colors duration-300 flex items-center"
        >
          <AiOutlineHome className="text-xl mr-2" />
          Home
        </a>
      </div>
      <div>
        <a
          href="mailto:kamsi_orazulike@icloud.com"
          className="no-underline bg-white text-black px-4 py-2 rounded-md hover:bg-transparent border border-white hover:border hover:text-white transition-colors duration-300 flex items-center"
        >
          <AiOutlineMail className="text-xl mr-2" />
          Contact
        </a>
      </div>
    </nav>
  );
}
