"use client";
import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  message: string;
  image: string;
  href?: string;
}

const ProjectCard = ({ title, subtitle, message, image, href }: CardProps) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl hover:scale-105 transition-all duration-200 ease-in-out">
      <a href={href} className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-40 bg-gray-600 rounded-md overflow-hidden">
          <img
            src={image}
            className="object-cover object-center w-full h-full"
            alt="cover"
            draggable={false}
          />
        </div>
        <div className="flex flex-col justify-center text-left md:w-2/3 p-4">
          <h3 className="mb-1 text-gray-100 font-semibold text-xl md:text-2xl transition-all duration-200 ease-in-out">
            {title}
          </h3>
          <h3 className="mb-2 text-blue-300 font-semibold text-sm md:text-md transition-all duration-200 ease-in-out">
            {subtitle}
          </h3>
          <p className="text-sm text-gray-400 mb-4">{message}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
