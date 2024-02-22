"use client";
import React from "react";
import { Intro } from "./components/Sections";

export default function Hero() {
  return (
    <div className="text-white w-full h-screen bg-audit text-center">
      <div className="bg-black/80 w-full h-full">
        <Intro />
      </div>
    </div>
  );
}
