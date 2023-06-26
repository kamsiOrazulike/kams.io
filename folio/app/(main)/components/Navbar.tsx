"use client";
import { DropdownMenu } from "./Dropdowns";
import React, { useState } from "react";
import { MdFlight, MdOutlineSportsCricket } from "react-icons/md";
import { FaTheaterMasks, FaMusic, FaLaughBeam } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const upgrades = [
    { id: 1, icon: <FaTheaterMasks />, label: "Theatre" },
    { id: 2, icon: <FaLaughBeam />, label: "Comedy" },
    { id: 3, icon: <MdOutlineSportsCricket />, label: "Sports" },
    { id: 4, icon: <MdFlight />, label: "Travel" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed bg-transparent text-gray-200 shadow-lg top-0 left-0 w-full md:flex-row md:flex-nowrap md:justify-between flex items-center p-4 z-40">
        <div className="m-0 px-4">
          <a className="z-40 lg:inline-block text-5xl font-bold cursor-pointer" href="/">
            K
          </a>
        </div>
        <div className="w-[100%] md:w-full">
          <ul
            className={`flex flex-row justify-center md:justify-end ${
              isMenuOpen ? "hidden md:flex" : "md:flex hidden"
            }`}
          >
            <li className="cursor-pointer px-4 py-2 mx-4 bg-transparent hover:text-upseat-purple hover:scale-105 focus:text-purple-300 transition-all duration-200">
              <a href="/about">About Me</a>
            </li>
            <li className="cursor-pointer px-4 py-2 mx-4 bg-transparent hover:text-upseat-purple hover:scale-105 focus:text-purple-300 transition-all duration-200">
              <a href="/projects">Projects</a>
            </li>
          </ul>
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
