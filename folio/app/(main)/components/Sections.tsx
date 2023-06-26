"use client";
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { name, role, avatar, bio, ann } from "../lib/info";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineArrowLeft } from "react-icons/md";

export const Intro = () => {
  return (
    <>
      <div className="w-[70%] md:w-[50%] lg:w-[30%] mx-auto mt-4 pt-28">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold tracking-wide md:py-2 ease-in-out duration-500">
          {name}
        </h1>
        <span className="text-slate-300 italic">{ann}</span>
        <p className="text-slate-400 md:text-md sm:text-md text-sm tracking-wide font-light my-1">
          {role}
        </p>
        {avatar()}
        {bio()}
        <AiOutlineArrowDown className="mx-auto text-xl animate-bounce" />
      </div>
    </>
  );
};

export const ActionCall = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center tracking-wide py-16 uppercase">
      <div
        className="mx-auto flex flex-row justify-evenly items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/projects"
          className="cursor-pointer md:text-4xl sm:text-3xl text-3xl font-bold transition-all ease-in duration-200 text-white/60 hover:text-white"
        >
          View my Projects
        </a>
        {/* <div className="transition-transform duration-500 ease-in-out">
          <AiOutlineArrowRight
            className={`text-white text-xl mx-4 ${
              isHovered ? "translate-x-2" : ""
            }`}
          />
        </div> */}
      </div>
    </div>
  );
};
