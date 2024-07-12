"use client";
import React from "react";
import { name } from "./lib/info";
import Projects from "./projects/page";
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
import { GetInTouchProps } from "./interface/types";

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
      link: "https://cal-plus.vercel.app/",
      icon: (
        <p className="font-thin text-sm border-b border-b-off-green text-off-green transition-all ease-in duration-150 hover:scale-105">
          Cal+
        </p>
      ),
    },
    {
      link: "https://www.linkedin.com/in/kamsiyonnaorazulike?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <AiFillLinkedin className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "http://be.net/kamsi_orazulike",
      icon: (
        <AiOutlineBehance className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "https://github.com/kamsiOrazulike/kams.io",
      icon: (
        <AiFillGithub className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
    {
      link: "https://www.instagram.com/k0.design/",
      icon: (
        <AiFillInstagram className="w-8 text-2xl text-off-green/50 hover:text-off-green transition-all duration-150" />
      ),
    },
  ];
  return (
    <div className="">
      <div className="text-off-green w-full h-screen bg-off-white">
        <div id="top">
          <div className="absolute left-6 top-12">
            <div className="w-2/5 flex flex-col justify-center py-4">
              {/* <p className="w-auto text-sm p-0 m-0 font-light italic ease-in-out duration-500 mb-4">
                Hey! I am a Product designer with a passion for web development
                & UX/UI Design. Currently pursuing an MSc/MA in <br />
                <a
                  href="https://www.imperial.ac.uk/study/courses/postgraduate-taught/innovation-design-engineering/"
                  className="border-b border-b-off-green"
                >
                  {" "}
                  Innovation Design Engineering at Imperial College London & Royal College of Art
                </a>
                .
              </p> */}
            </div>
          </div>
          <div className="absolute right-5 top-8">
            {getInTouch({ contactIcons: socialMediaItems })}
          </div>
          <div className="absolute leading-none bottom-0">
            <div className="relative">
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
