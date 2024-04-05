"use client";
import React from "react";
import { Intro } from "./components/Sections";
import Projects from "./projects/page";

export default function Hero() {
  return (
    <div className="text-white w-full h-screen bg-audit bg-cover text-center">
      <div className="bg-black/90 w-full">
        <Intro />
        <Projects />
      </div>
    </div>
  );
}
