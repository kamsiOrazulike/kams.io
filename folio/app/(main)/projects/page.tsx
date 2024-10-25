"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

export default function Projects() {
  const projects = [
    {
      title: "CANVAS",
      subtitle: "Processing (P5JS)",
      message:
        "Check out different projects I developed using P5JS. My latest passion",
      href: "https://canvasbyko.vercel.app/",
      date: "2024",
    },
    {
      title: "inHandy",
      subtitle: "Product Design | UX/UI",
      message:
        "inHandy is my final year project submission/pitch for a sustainable digital product aimed at teaching BSL in an engaging and stimulating manner",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363004/Portfolio%20images/UXUI/inHandyMockup_a9tly6.png",
      href: "/projects/inhandy",
      date: "2021",
    },
    {
      title: "The First Theatre",
      subtitle: "Product Design | Human-Computer Interaction",
      message:
        "For my Cyberphyscial systems module at Imperial College London, our group decided to combine the power of arduino programming with Machine Learning in order to create a unique Human-Computer interaction inspired by shadow puppetry",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363317/Portfolio%20images/IDE/thefirsttheatre_tgy4xc.jpg",
      href: "/projects/the-first-theatre",
      date: "2023",
    },
    {
      title: "@ The Afrikan Store",
      subtitle: "Product Design | 3D Design",
      message:
        "A summary of Product design projects completed for The Afrikan Store.",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712343005/Portfolio%20images/TheAfrikanStore/Front_face_h22jsb.png",
      href: "/projects/tas",
      date: "2024",
    },
    {
      title: "@ Genesis Group",
      subtitle: "Software Dev | Full-stack",
      message:
        "Check out different software projects I worked on during my time at Genesis Group. Including UX/UI design for food delivery mobile application, A Human Resources Management Portal and more",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712362998/Portfolio%20images/UXUI/GenesisMockup_cuy2vz.png",
      href: "/projects/genesis",
      date: "2023",
    },
  ];

  return (
    <div className="bg-off-white-2 text-off-green pt-12 pb-24 px-6">
      <div>
        <div className="flex flex-col align-middle">
          <h1 className="text-7xl font-thin mb-8">Projects</h1>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col-reverse md:flex-row items-center px-6 sm:py-18 lg:px-0 pb-12"
        >
          <div className="md:w-full border border-black pt-4 pb-8 px-8">
            <div className="md:max-w-full">
              <div className="w-full flex flex-row justify-between">
                <p className="text-xs md:text-base font-light leading-7 text-white uppercase">
                  {project.subtitle}
                </p>
                <p className="text-xs md:text-base font-light leading-7 text-white uppercase">
                  {project.date}
                </p>
              </div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-6 mb-8 text-sm md:text-md leading-6 font-light">
                {project.message}
              </p>
              {project.href !== "#" ? (
                <a
                  href={project.href}
                  className="no-underline text-sm font-normal mt-4 bg-transparent text-off-green px-4 py-2 rounded-md border border-off-green hover:scale-105 transition-all ease-in duration-150"
                >
                  See More
                </a>
              ) : (
                <button
                  disabled
                  className="no-underline text-sm font-normal mt-4 bg-transparent text-off-green px-4 py-2 rounded-md border border-off-green hover:scale-105 transition-all ease-in duration-150 cursor-wait"
                >
                  Coming soon
                </button>
              )}
            </div>
          </div>
          {/* <div className="hidden md:w-1/2 md:pl-12">
            <CldImage
              draggable="false"
              width="1050"
              height="1000"
              preserveTransformations
              src={project.image}
              alt={project.title}
            />
          </div> */}
        </div>
      ))}
    </div>
  );
}
