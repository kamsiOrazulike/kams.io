"use client";
import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineBehance,
} from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showFooter && (
        <footer className="fixed bg-transparent bottom-0 justify-between right-100 w-full md:justify-center flex flex-row items-center p-4 z-40">
          {/* Footer info */}
          <div>
            <LinkScroll
              to="top"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}
              className="to-top relative bg-white border border-black cursor-pointer p-2 m-2 text-black font-light text-lg transition-all duration-150"
            >
              <AiOutlineArrowUp />
            </LinkScroll>
          </div>
          <div
            className={`bg-white mx-auto text-black border border-black shadow-md transition-all duration-150 font-light text-xs px-4 py-2 `}
          >
            <ul className="flex flex-row items-center">
              <li className="mr-2 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a
                  href="https://www.linkedin.com/in/kamsiyonnaorazulike?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  className="text-xl"
                >
                  <AiFillLinkedin className="text-black hover:text-blue-500 transition-all duration-150" />
                </a>
              </li>
              <li className="mr-2 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a
                  href="http://be.net/kamsi_orazulike"
                  target="_blank"
                  className="text-xl"
                >
                  <AiOutlineBehance className="text-black hover:text-blue-500 transition-all duration-150" />
                </a>
              </li>
              <li className="mr-2 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a
                  href="https://github.com/kamsiOrazulike"
                  target="_blank"
                  className="text-xl"
                >
                  <AiFillGithub className="text-black hover:text-green-500 transition-all duration-150" />
                </a>
              </li>
              <li className="my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a
                  href="https://www.instagram.com/k0.design/"
                  target="_blank"
                  className="text-xl"
                >
                  <AiFillInstagram className="text-black hover:text-indigo-700 transition-all duration-150" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
