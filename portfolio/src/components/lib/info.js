"use client";
// import { Link } from "react-dom";

export const name = "Kamsi Orazulike";
export const role = "Web developer | UI Designer";

export const avatar = () => {
  return (
    <img
      src="/static/imgs/Me.png"
      alt={name}
      className="w-[200px] h-auto mx-auto my-4 dark:bg-slate-800 bg-gray-700 border border-gray-800 hover:scale-105 transition-all duration-500 rounded-full"
    />
  );
};

export const bio = () => {
  return (
    <div className="my-4 font-mono">
      <p className="text-black dark:text-white text-xs text-left ml-6">
        Hi, I'm Kamsi Orazulike. A first class graduate in Design Innovation and
        Creative Engineering from Queen Mary University of London with two years
        of software developer experience.
      </p>
      <button className="py-2 mx-auto w-[150px] hover:scale-105 rounded-md font-xs dark:text-slate-400 text-gray-700 text-center transition-all duration-500">
        <a href="/about">About me</a>
      </button>
    </div>
  );
};
