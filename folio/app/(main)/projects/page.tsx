"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

export default function Projects() {
  const projects = [
    {
      title: "@ Genesis Group",
      subtitle: "Product Design (Digital)",
      message:
        "Check out different software projects I worked on during my time at Genesis Group. Including a food delivery mobile application",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712362998/Portfolio%20images/UXUI/GenesisMockup_cuy2vz.png",
      href: "/projects/genesis",
    },
    {
      title: "inHandy",
      subtitle: "Product Design (Digital)",
      message:
        "inHandy is my final year project submission/pitch for a sustainable digital product aimed at teaching BSL in an engaging and stimulating manner",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363004/Portfolio%20images/UXUI/inHandyMockup_a9tly6.png",
      href: "/projects/inhandy",
    },
    {
      title: "The First Theatre",
      subtitle: "Product Design",
      message:
        "For my Cyberphyscial systems module at Imperial College London, our group decided to combine the power of arduino programming with Machine Learning in order to create a unique Human-Computer interaction inspired by shadow puppetry",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363317/Portfolio%20images/IDE/thefirsttheatre_tgy4xc.jpg",
      href: "/projects/the-first-theatre",
    },
    {
      title: "@ The Afrikan Store",
      subtitle: "Product | Brand Design",
      message: "A summary of Product design projects completed for The Afrikan Store.",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712343005/Portfolio%20images/TheAfrikanStore/Front_face_h22jsb.png",
      href: "#",
    },
  ];

  return (
    <div className="bg-black text-white pt-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative text-left isolate overflow-hidden px-6 sm:py-18 lg:overflow-visible lg:px-0"
        >
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-thin leading-7 text-white uppercase">
                    {project.subtitle}
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h1>
                  <p className="mt-6 mb-8 text-xl leading-8 font-thin">
                    {project.message}
                  </p>
                  {project.href !== "#" ? (
                    <a
                      href={project.href}
                      className="no-underline font-normal mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-transparent border border-white hover:border hover:text-white transition-colors duration-300"
                    >
                      See More
                    </a>
                  ) : (
                    <button
                      disabled
                      className="no-underline font-normal bg-gray-300 text-black px-4 py-2 rounded-md border border-white transition-colors duration-300 cursor-wait"
                    >
                      Coming soon
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <CldImage
                width="1050"
                height="1000"
                preserveTransformations
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
