"use client";
import React from "react";
import { name, role, avatar, ann, place } from "./lib/info";
import Projects from "./projects/page";
import { CldImage } from "next-cloudinary";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-full">
      <div className="text-white w-full bg-birdseye bg-cover bg-bottom text-center">
        <div id="top" className="w-full bg-black/70">
          {/* Intro */}
          <div className="flex md:flex-row flex-col justify-between align-middle items-start pt-24 pb-12">
            <div className="w-full md:w-2/5 px-12 flex flex-col">
              <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold tracking-wide md:py-2 ease-in-out duration-500">
                {name}
              </h1>
              <p className="md:text-md sm:text-md text-sm tracking-wide font-light mb-2">
                {role}
              </p>
              {avatar()}
            </div>
            <div className="relative w-full md:w-1/3 flex flex-col px-8 py-4">
              <div className="cube-container">
                <div className="frontendcube cube1">
                  <div className="box face1">
                    <FaHtml5 color="#F06529" />
                  </div>
                  <div className="box face2">
                    <FaCss3 color="#28A4D9" />
                  </div>
                  <div className="box face3" />
                  <div className="box face4" />
                  <div className="box face5">
                    <FaReact color="#5ED4F4" />
                  </div>
                  <div className="box face6">
                    <FaFigma color="#FFFFFF" />
                  </div>
                </div>
                <div className="backendcube cube2">
                  <div className="box face1">
                    <FaPython color="#646464" />
                  </div>
                  <div className="box face2">
                    <FaNodeJs color="#68A063" />
                  </div>
                  <div className="box face3" />
                  <div className="box face4" />
                  <div className="box face5">
                    <FaGitAlt color="#EC4D28" />
                  </div>
                  <div className="box face6">
                    <FaJsSquare color="#EFD81D" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
}

{
  /* Education */
}
//  <div className="text-center md:text-left">
//  <h2 className="text-white italic text-sm my-4">Education</h2>
//  <div className="flex flex-row">
//    <div className="mx-2">
//      <img
//        src={"./static/imgs/logos/CranleighSchoolCrest.png"}
//        className="w-12 md:w-28"
//        alt="Education 1"
//      />
//    </div>
//    <div className="mx-4 flex flex-col">
//      <img
//        src={"./static/imgs/logos/QueenMaryLogo.png"}
//        className="w-20 md:w-44"
//        alt="Education 2"
//      />
//      <img
//        src={"./static/imgs/logos/ImperialCollegeLogo.png"}
//        className="w-20 md:w-44 mt-4"
//        alt="Education 2"
//      />
//    </div>
//    <div className="mx-2">
//      <img
//        src={"./static/imgs/logos/RCALogo.png"}
//        className="w-12 md:w-32 bg-white p-2 rounded-md"
//        alt="Education 3"
//      />
//    </div>
//  </div>
// </div>
{
  /* Work Experience */
}
{
  /* <div className="text-center md:text-left mb-4">
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
</div> */
}
