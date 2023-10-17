"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed bg-transparent top-0 left-0 w-full md:flex-row md:flex-nowrap md:justify-between flex items-center p-4 z-40">
        <div className="mx-auto">
          <div
            className={`bg-gray-700 text-white transition-all duration-150 font-light uppercase text-sm mx-auto rounded-full px-4 py-2 ${
              isMenuOpen ? "hidden md:flex" : "md:flex hidden"
            }`}
          >
            <ul className="flex flex-row items-center">
              <li className="px-4 my-2 mr-8 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="/" className="">
                  <AiOutlineHome className="text-xl" />
                </a>
              </li>
              <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="/about" className="">
                  About Me
                </a>
              </li>
              <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="/projects" className="">
                  Projects
                </a>
              </li>
              <li className="px-4 my-2 ml-8 cursor-pointer hover:scale-105 transition-all duration-200">
                <a href="mailto:kamsi_orazulike@icloud.com" className="">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-md transition-all duration-200"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 top-16 bg-black/50 h-screen w-full">
              <div className="w-full absolute bg-gray-900 text-gray-200 shadow-lg py-2 px-4">
                <ul className="flex flex-col items-center justify-center">
                  <li className="cursor-pointer px-4 py-4 mx-2 mb-4 bg-transparent hover:scale-105 transition-all duration-200">
                    <a href="/about">About Me</a>
                  </li>
                  <li className="cursor-pointer px-4 py-4 mx-2 mb-4 bg-transparent hover:scale-105 transition-all duration-200">
                    <a href="/projects">Projects</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
