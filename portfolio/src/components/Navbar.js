"use client";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DarkModeToggle from "./theme";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex fixed top-0 z-50 dark:text-white text-black w-screen justify-between align-middle items-center h-24 max-w-[1840px] mx-auto px-4">
        <a
          href="/"
          className="text-5xl font-bold dark:text-yellow-500 text-gray-700 cursor-pointer"
        >
          K
        </a>
        <ul className="hidden md:flex">
          <li className="py-2 mx-4 cursor-pointer">
            <a href="/projects">Projects</a>
          </li>
          <li className="py-2 mx-4 border dark:border-yellow-500 border-gray-700 w-[150px] hover:scale-105 rounded-md font-medium text-center transition-all duration-500 cursor-pointer">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Get in touch
            </LinkScroll>
          </li>
          <li className="mx-4 cursor-pointer">
            <div>
              <DarkModeToggle />
            </div>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden z-40 fixed right-4">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            nav
              ? "z-30 flex flex-col fixed left-0 top-0 w-full h-full bg-gray-300 dark:bg-gray-900 border-r border-r-gray-900 transition-all ease-in-out duration-300"
              : "fixed top-[-500em]"
          }
        >
          <h1 className="w-auto text-2xl font-bold mx-auto my-4 dark:text-yellow-500 text-gray-700">
            K
          </h1>
          <ul className="flex flex-col pt-14 uppercase p-4 align-middle">
            <li className="p-4 border-b border-gray-600">Projects</li>
            <li className="p-4">Get in touch</li>
          </ul>
        </div>
      </div>
    </>
  );
}
