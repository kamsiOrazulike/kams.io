import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "inHandy",
      subtitle: "DICE Project",
      message:
        "Your brief introduction to BSL. An Education app designed to focus on the utilisation of engaging visuals as well as gamification to improve the learning experience.",
      image: "./static/imgs/inHandyMockup.png",
      href: "/projects/inhandy",
    },
    {
      title: "The First Theatre",
      subtitle: "IDE Project",
      message:
        "Built around the idea of playful nostalgia; our group aimed to combine the charm of traditional shadow puppetry with cutting-edge innovations. Utilising Hand-pose recognition technology, Machine Learning...",
      image: "./static/imgs/ide/thefirsttheatre.jpg",
      href: "/projects/the-first-theatre",
    },
    {
      title: "Products",
      subtitle: "@ Genesis group",
      message:
        "Different projects developed during my time at Genesis Group. Including UX/UI design for a food delivery application",
      image: "./static/imgs/GenesisMockup.png",
      href: "/projects/genesis",
    },
  ];

  return (
    <div className="bg-audit bg-cover text-white">
      <div className="pt-20 pb-18 bg-black/90">
        <div className="w-full mx-auto py-16 px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <section
                key={index}
                className="bg-transparent w-full mb-8 md:mb-0"
              >
                <div className="flex flex-wrap items-center justify-between py-6 px-8">
                  <div className="w-full text-justify md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                    <a href={project.href} className="no-underline">
                      <h2 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-md font-light">{project.subtitle}</p>
                      <p className="text-gray-500 text-md mt-2 mb-8 md:mr-4">
                        {project.message}
                      </p>
                    </a>
                    <a
                      href={project.href}
                      className="no-underline mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-black border border-white hover:border hover:text-white transition-colors duration-300"
                    >
                      See More
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <img
                      className="w-full h-auto object-cover bg-gray-700"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
