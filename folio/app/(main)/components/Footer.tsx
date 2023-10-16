"use client";
import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const scrollY = window.scrollY;
    const scrollPosition = windowHeight + scrollY;

    if (scrollPosition >= documentHeight) {
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
        <footer className="fixed bg-transparent bottom-0 right-0 w-full md:flex-row md:flex-nowrap md:justify-start flex items-start p-4 z-40">
          <div>
            <div
              className={`bg-gray-700/80 text-white transition-all duration-150 font-light text-xs mx-auto rounded-full px-4 py-2 `}
            >
              <ul className="flex flex-row items-center">
                <li className="px-2 my-2 mr-6 cursor-pointer hover:scale-105 transition-all duration-200">
                  Developed by Kamsi Orazulike
                </li>
                <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                  <a
                    href="https://www.linkedin.com/in/kamsiyonnaorazulike?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    className="text-xl"
                  >
                    <AiFillLinkedin className="text-blue-400 hover:text-blue-500 transition-all duration-150" />
                  </a>
                </li>
                <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                  <a
                    href="https://github.com/kamsiOrazulike"
                    target="_blank"
                    className="text-xl"
                  >
                    <AiFillGithub className="text-green-400 hover:text-green-500 transition-all duration-150" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
