"use client";
import React from "react";
import Featured from "./Featured";
import { name, role, avatar, bio } from "./lib/info";

export default function Hero() {
  return (
    <div className="dark:text-white dark:bg-slate-900 bg-gray-300 text-black relative">
      <div className="max-w-[900px] w-full h-[80vh] mx-auto text-center flex flex-row justify-center align-middle">
        <div className="w-[50%] flex flex-col justify-start align-middle cursor-default mt-8">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold tracking-wide md:py-2 ease-in-out duration-500 ">
            {name}
          </h1>
          <p className="dark:text-slate-400 text-gray-700 md:text-md sm:text-md text-sm tracking-wide font-light my-1">
            {role}
          </p>
          <div className="flex flex-col items-center md:flex-row w-[100%]">
            {avatar()}
            <div className="mx-auto md:my-4 p-1">{bio()}</div>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  );
}
