"use client";
import ProjectCard from "./Cards";
import React, { FC, useState } from "react";
import { name, role, avatar, bio, ann } from "../lib/info";
interface GraphicDesignSectionProps {
  imageSrc: string;
  header: string;
  subheader: string;
  message: string;
}

export const Intro = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between align-middle items-start mt-32">
      <div className="w-full md:w-2/5 px-12 flex flex-col">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold tracking-wide md:py-2 ease-in-out duration-500">
          {name}
        </h1>
        <span className="talic text-2xl">{ann}</span>
        <p className="md:text-md sm:text-md text-sm tracking-wide font-light my-1">
          {role}
        </p>
        {avatar()}
      </div>
      <div className="relative w-full flex flex-row md:block md:w-1/3 h-[200px] px-8 py-4">
        {/* Work Experience */}
        <div className="text-left mb-4">
          <h2 className="text-gray-500 italic text-sm my-4">Work experience</h2>
          <div className="flex flex-row">
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/GenesisLogo.png"}
                className="w-14 md:w-44"
                alt="Work experience 1"
              />
            </div>
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/RHPS.svg"}
                className="w-14 md:w-22"
                alt="Work experience 1"
              />
            </div>
            <div className="mx-2">
              <img
                src={
                  "https://www.maritimelondon.com/wp-content/uploads/2017/04/Berenberg-Logo_UK_UZ-8pt-Standard_300dpi_rgb.png"
                }
                className="w-14 md:w-44 rounded-lg"
                alt="Work experience 2"
              />
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="text-right md:text-left">
          <h2 className="text-gray-500 italic text-sm my-4">Education</h2>
          <div className="flex flex-row">
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/CranleighSchoolCrest.png"}
                className="w-12 md:w-28"
                alt="Education 1"
              />
            </div>
            <div className="mx-4 flex flex-col">
              <img
                src={"./static/imgs/logos/QueenMaryLogo.png"}
                className="w-20 md:w-44"
                alt="Education 2"
              />
              <img
                src={"./static/imgs/logos/ImperialCollegeLogo.png"}
                className="w-20 md:w-44 mt-4"
                alt="Education 2"
              />
            </div>
            <div className="mx-2">
              <img
                src={"./static/imgs/logos/RCALogo.png"}
                className="w-12 md:w-32 bg-white p-2 rounded-md"
                alt="Education 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActionCall = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-800 w-full h-full flex flex-col lg:flex-row justify-center items-center tracking-wide py-16">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-14 py-12">
        <div className="w-full mx-auto text-center flex flex-col items-center py-16 px-14">
          <iframe
            className="border my-4 md:mx-4 shadow-md"
            width="400"
            height="250"
            src="https://www.figma.com/proto/IUecsg1rFqXbgknkNw6CDr/Genesis-QSR-Application?page-id=833%3A913&type=design&node-id=1060-12052&viewport=-454%2C511%2C0.43&t=ZA4ZmR41CSPDPxez-1&scaling=scale-down&starting-point-node-id=833%3A936&mode=design"
          ></iframe>
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
          View all Projects
        </a>
      </div>
    </div>
  );
};

export const GraphicDesignSection: FC<GraphicDesignSectionProps> = ({
  imageSrc,
  header,
  subheader,
  message,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
      {/* ... Background SVG Code ... */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {subheader}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {header}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">{message}</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[32rem] max-w-none rounded-xl sm:w-[48rem]"
            src={imageSrc}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignSection;
