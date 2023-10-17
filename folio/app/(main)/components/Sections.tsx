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
    <div className="bg-black w-full h-full flex flex-col lg:flex-row justify-center items-center tracking-wide py-16">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-14 py-12">
        {/* Work Experience */}
        <div className="mb-4">
          <h2 className="text-gray-500 italic text-sm my-4">Work experience</h2>
          <div className="flex flex-row">
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/GenesisLogo.png"}
                className="w-28 md:w-44 grayscale-[0.8] hover:grayscale-0 transition-all duration-150 ease-in"
                alt="Work experience 1"
              />
            </div>
            <div className="mx-2">
              <img
                src={
                  "https://www.maritimelondon.com/wp-content/uploads/2017/04/Berenberg-Logo_UK_UZ-8pt-Standard_300dpi_rgb.png"
                }
                className="w-28 md:w-44 rounded-lg"
                alt="Work experience 2"
              />
            </div>
          </div>
        </div>
        {/* Education */}
        <div>
          <h2 className="text-gray-500 italic text-sm my-4">Education</h2>
          <div className="flex flex-row">
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/CranleighSchoolCrest.png"}
                className="w-14 md:w-28"
                alt="Education 1"
              />
            </div>
            <div className="mx-4 flex flex-col">
              <img
                src={"./static/imgs/logos/QueenMaryLogo.png"}
                className="w-32 md:w-44"
                alt="Education 2"
              />
              <img
                src={"./static/imgs/logos/ImperialCollegeLogo.png"}
                className="w-32 md:w-44 mt-4"
                alt="Education 2"
              />
            </div>
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/RCALogo.png"}
                className="w-16 md:w-32 bg-white p-2 rounded-md"
                alt="Education 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-auto mx-auto lg:mx-0 flex flex-col justify-evenly items-center uppercase ${
          isHovered ? "lg:order-1" : "lg:order-2"
        }`}
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
