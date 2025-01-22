"use client";
import React from "react";
import { name } from "./lib/info";
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
import {
  AiFillLinkedin,
  AiOutlineBehance,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { GetInTouchProps } from "./interface/types";
import Projects from "./projects/page";

const getInTouch = ({ contactIcons }: GetInTouchProps) => {
  return (
    <div className="w-[10em] flex flex-col justify-center py-4">
      <ul className="flex flex-col items-end">
        {contactIcons.map((item, index) => (
          <li
            key={index}
            className="my-2 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <a href={item.link} target="_blank" className="text-xl">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Hero() {
  const socialMediaItems = [
    {
      link: "https://www.linkedin.com/in/kamsiyonnaorazulike?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <AiFillLinkedin className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "https://github.com/kamsiOrazulike/kams.io",
      icon: (
        <AiFillGithub className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "https://leetcode.com/u/kamsi_orazulike/",
      icon: (
        <SiLeetcode className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "https://www.instagram.com/canvas.px/",
      icon: (
        <AiFillInstagram className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
  ];

  return (
    <div className="">
      <div className="text-off-green w-full min-h-screen bg-gradient-to-l from-[#2a2a2a] to-[#080808]">
        <div id="top" className="relative w-full h-screen">
          {/* Profile Section */}
          <div className="absolute w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center lg:left-12">
            {/* Profile Image */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden mb-8 lg:mb-12 bg-profile bg-center bg-cover border-4 border-off-green/20" />
          </div>

          {/* Social Media Icons */}
          <div className="absolute right-5 top-8">
            {getInTouch({ contactIcons: socialMediaItems })}
          </div>

          {/* Rotating Cubes */}
          <div className="absolute leading-none bottom-0">
            <div className="relative bottom-0">
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
            <h1 className="text-size p-0 m-0 text-center font-thin ease-in-out duration-500">
              {name}
            </h1>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
}
