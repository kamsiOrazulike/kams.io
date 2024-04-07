"use client";
import React from "react";
import { name, role, avatar, ann, place } from "./lib/info";
import Projects from "./projects/page";
import { CldImage } from "next-cloudinary";

export default function Hero() {
  return (
    <div className="text-white w-full h-screen bg-audit bg-cover text-center">
      <div className="bg-black/90 w-full">
        {/* Intro */}
        <div className="flex md:flex-row flex-col justify-between align-middle items-start pt-32">
          <div className="w-full md:w-2/5 px-12 flex flex-col">
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold tracking-wide md:py-2 ease-in-out duration-500">
              {name}
            </h1>
            <span className="talic text-2xl">{ann}</span>
            <p className="md:text-md sm:text-md text-sm tracking-wide font-light my-1">
              {role}
            </p>
            <p className="md:text-md sm:text-md text-sm tracking-wide font-light my-1">
              {place}
            </p>
            {avatar()}
          </div>
          <div className="relative w-full flex flex-row md:block md:w-1/3 h-[200px] px-8 py-4">
            {/* Education */}
            <div className="text-center md:text-left">
              <h2 className="text-white italic text-sm my-4">Education</h2>
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
            {/* Work Experience */}
            <div className="text-center md:text-left mb-4">
              <h2 className="text-white italic text-sm my-4">
                Work experience
              </h2>
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
                    alt="Work experience 2"
                  />
                </div>
                <div className="mx-2">
                  <img
                    src={
                      "https://www.maritimelondon.com/wp-content/uploads/2017/04/Berenberg-Logo_UK_UZ-8pt-Standard_300dpi_rgb.png"
                    }
                    className="w-14 md:w-44 rounded-lg"
                    alt="Work experience 3"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-2">
                  <img
                    src={
                      "https://www.fashionworkie.com/sites/default/files/new-logos/afrikan_store_the_01.png"
                    }
                    className="w-20 md:w-24 rounded-md"
                    alt="Work experience 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
}
