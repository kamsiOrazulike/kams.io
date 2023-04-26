"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { name, role, avatar, bio } from "./lib/info";

const Intro = () => {
  return (
    <div className="h-screen">
      <div className="w-[80%] md:w-[25%] mx-auto mt-4 pt-16">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold tracking-wide md:py-2 ease-in-out duration-500 ">
          {name}
        </h1>
        <p className="dark:text-slate-400 text-gray-700 md:text-md sm:text-md text-sm tracking-wide font-light my-1">
          {role}
        </p>
        {avatar()}
        <div className="mx-auto md:my-4 p-1">{bio()}</div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="bg-gray-300 dark:bg-gray-800 h-screen">
      <div className="w-[90%] mx-auto pt-16">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold tracking-wide md:py-2 ease-in-out duration-500 ">
          About me
        </h1>
        {avatar()}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="dark:text-white text-black">
      <div className="max-w-[900px] w-full h-screen mx-auto text-center flex flex-row justify-center align-middle">
        <Parallax
          pages={2}
          style={{ top: "0", left: "0" }}
          className="animation"
        >
          <ParallaxLayer offset={0} speed={-0.1}>
            <div
              className="animation-layer parallax bg-gray-300 dark:bg-gray-900"
              id="background1"
            >
              <Intro />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation-layer parallax" id="background2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation-layer parallax" id="background3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation-layer parallax" id="background4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div className="animation-layer parallax" id="background5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation-layer parallax" id="background6"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation-layer parallax" id="background7"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <About />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
