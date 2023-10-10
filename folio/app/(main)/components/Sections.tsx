"use client";
import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { name, role, avatar, bio, ann } from "../lib/info";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineArrowLeft } from "react-icons/md";

export const Intro = () => {
  return (
    <>
      <div className="w-[90%] md:w-[90%] lg:w-[90%] mx-auto mt-4 pt-28 flex flex-col justify-center">
        <h1 className="w-full md:text-6xl sm:text-5xl text-4xl font-bold tracking-wide md:py-2 ease-in-out duration-500">
          {name}
        </h1>
        <span className="text-blue-200 italic text-2xl">{ann}</span>
        <p className="text-slate-400 md:text-md sm:text-md text-sm tracking-wide font-light my-1">
          {role}
        </p>
        {avatar()}
        <AiOutlineArrowDown className="mx-auto text-xl animate-bounce" />
      </div>
    </>
  );
};

export const ActionCall = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center tracking-wide py-16">
      {/* <div className="w-[50%]">{bio()}</div> */}
      <div
        className="mx-auto flex flex-row justify-evenly items-center uppercase"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/projects"
          className="cursor-pointer md:text-4xl sm:text-3xl text-3xl font-bold transition-all ease-in duration-200 text-white/60 hover:text-white"
        >
          View my Projects
        </a>
      </div>
    </div>
  );
};
