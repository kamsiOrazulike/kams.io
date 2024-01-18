import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "inHandy",
      subtitle: "UX/UI Design project",
      message: "Your brief introduction to BSL",
      image: "./static/imgs/inHandyMockup.png",
      href: "/projects/inhandy",
    },
    {
      title: "Genesis FDA",
      subtitle: "UX/UI Design project",
      message: "Genesis Restaurants food delivery application",
      image: "./static/imgs/GenesisMockup.png",
      href: "/projects/genesis-fda",
    },
    {
      title: "GenHRM",
      subtitle: "Dev project",
      message: "Genesis Group Human Resources Management Portal/System",
      image: "./static/imgs/genHRM/login.png",
      href: "/projects/genhrm",
    },
    {
      title: "The First Theatre",
      subtitle: "IDE Project",
      message: "Programmed using Arduino, Processing and Wekinator",
      image: "./static/imgs/ide/thefirsttheatre.jpg",
      href: "/projects/the-first-theatre",
    },
  ];

  return (
    <>
      <div className="relative bg-svg-3 bg-fixed bg-gray-900 text-white h-full">
        <div className="pt-20 pb-12">
          <div className="w-full mt-12 text-center mx-auto flex flex-col justify-center">
            <h1 className="w-full md:text-6xl sm:text-5xl text-4xl font-bold tracking-wide md:py-2 ease-in-out duration-500">
              All Projects
            </h1>
            <span className="text-blue-200 italic text-md">Featured</span>
          </div>
          <div className="w-full mx-auto text-center flex flex-col items-center py-16 px-14">
            <div className="max-w-5xl w-full">
              <ul className="space-y-8">
                {projects.map((project, index) => (
                  <li key={index}>
                    <a href={project.href} className="no-underline">
                      <h2 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg font-light">{project.subtitle}</p>
                      <p className="text-gray-500 mt-2">{project.message}</p>
                      <img
                        className="mt-4"
                        src={project.image}
                        alt={project.title}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
