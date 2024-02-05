import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "inHandy",
      subtitle: "DICE Project",
      message: "Your brief introduction to BSL",
      image: "./static/imgs/inHandyMockup.png",
      href: "/projects/inhandy",
    },
    {
      title: "Genesis FDA",
      subtitle: "@ Genesis group",
      message: "A food delivery application",
      image: "./static/imgs/GenesisMockup.png",
      href: "/projects/genesis-fda",
    },
    {
      title: "GenHRM",
      subtitle: "@ Genesis group",
      message: "A Human Resources Management Portal/System",
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
    <div className="relative bg-svg-3 bg-fixed bg-black text-white h-full">
      <div className="pt-20 pb-12">
        <div className="w-full mx-auto flex flex-col items-center py-16 px-14">
          <div className="max-w-5xl w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="flex items-start bg-transparent hover:bg-white text-white hover:text-black px-2 py-4 transition-all duration-150"
                >
                  <img
                    className="mr-4 w-20 h-24 object-cover bg-white/30"
                    src={project.image}
                    alt={project.title}
                  />
                  <div>
                    <a href={project.href} className="no-underline">
                      <h2 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-md font-light">{project.subtitle}</p>
                      <p className="text-gray-500 text-sm mt-2">
                        {project.message}
                      </p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
