"use client";
import { skillList } from "./lib/info";
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
      <div className="bg-transparent dark:text-white text-gray-900 flex fixed top-0 z-50 w-screen justify-between align-middle items-center h-24 max-w-[1840px] mx-auto px-4">
        <a
          href="/"
          className="text-5xl font-bold cursor-pointer"
        >
          K
        </a>
        <ul className="hidden md:flex">
          <li className="py-2 mx-4 cursor-pointer">
            <a href="/projects">Projects</a>
          </li>
          <li className="py-2 mx-4 border dark:border-gray-500 border-gray-700 w-[150px] hover:scale-105 rounded-md font-medium text-center transition-all duration-500 cursor-pointer">
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
          <div className="my-8 mx-auto">
            <DarkModeToggle />
          </div>
          <ul className="flex flex-col mx-auto text-center pt-14 uppercase p-4 align-middle">
            <li className="p-4">
              <a href="/">Home</a>
            </li>
            <li className="p-4">
              <a href="/projects">Projects</a>
            </li>
          </ul>
          <div className="flex flex-row justify-center px-4">{skillList()}</div>
        </div>
      </div>
    </>
  );
}
