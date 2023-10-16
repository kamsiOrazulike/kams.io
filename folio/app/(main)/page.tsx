"use client";
import React from "react";
import { Intro, ActionCall } from "./components/Sections";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ArrowToTop from "./components/ArrowToTop";

export default function Hero() {
  return (
    <div className="text-gray-200">
      <div className="max-w-[900px] w-full h-full mx-auto text-center flex flex-row justify-center align-middle">
        <Parallax
          pages={2}
          style={{ top: "0", left: "0" }}
          className="animation"
        >
          <ParallaxLayer offset={0} speed={-0.1}>
            <div
              className="animation-layer parallax bg-gray-900"
              id="background7"
            >
              <Intro />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="animation-layer parallax" id="background6"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation-layer parallax" id="background5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation-layer parallax" id="background4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div className="animation-layer parallax" id="background3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation-layer parallax" id="background2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation-layer parallax" id="background1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <ActionCall />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
