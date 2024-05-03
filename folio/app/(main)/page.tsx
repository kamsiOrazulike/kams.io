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
import {
  AiFillLinkedin,
  AiOutlineBehance,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { SocialMediaItem, GetInTouchProps } from "./interface/types";

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
        <AiFillLinkedin className="w-8 text-2xl text-white/50 hover:text-white transition-all duration-150" />
      ),
    },
    {
      link: "http://be.net/kamsi_orazulike",
      icon: (
        <AiOutlineBehance className="w-8 text-2xl text-white/50 hover:text-white transition-all duration-150" />
      ),
    },
    {
      link: "https://github.com/kamsiOrazulike",
      icon: (
        <AiFillGithub className="w-8 text-2xl text-white/50 hover:text-white transition-all duration-150" />
      ),
    },
    {
      link: "https://www.instagram.com/k0.design/",
      icon: (
        <AiFillInstagram className="w-8 text-2xl text-white/50 hover:text-white transition-all duration-150" />
      ),
    },
  ];
  return (
    <div className="">
      <div className="text-white w-full h-screen bg-[#46443d]">
        <div id="top">
          <div className="absolute left-6 top-12">
            <div className="w-2/5 flex flex-col justify-center py-4">
              <p className="w-auto text-sm p-0 m-0 font-light italic ease-in-out duration-500 mb-4">
                Hey, I am a Product designer with a passion for all things
                digital currently pursuing a joint masters in Innovation Design
                Engineering at Imperial College London & Royal College of Art.
              </p>
            </div>
          </div>
          <div className="absolute right-5 top-12">
            {getInTouch({ contactIcons: socialMediaItems })}
          </div>
          <div className="absolute leading-none bottom-0">
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
