import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "CANVAS.PX",
      subtitle: "Founder | Software Developer",
      message:
        "CANVAS.px specializes in creating simple, cutting-edge websites and apps tailored to client needs. From design to development, we focus on delivering seamless, user-centered digital experiences that bring brand ideas to life.",
      href: "https://canvasbyko.vercel.app/",
      date: "2024",
    },
    {
      title: "The First Theatre",
      subtitle: "Product Design | HUMAN-COMPUTER INTERACTION",
      message:
        "For my Cyberphyscial systems module at Imperial College London, our group decided to combine the power of arduino programming with Machine Learning in order to create a unique Human-Computer interaction inspired by shadow puppetry",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363317/Portfolio%20images/IDE/thefirsttheatre_tgy4xc.jpg",
      href: "/projects/the-first-theatre",
      date: "2023",
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
      title: "Genesis Group",
      subtitle: "Software | Full-stack",
      message:
        "Check out different projects I worked on during my time at Genesis Group.",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712362998/Portfolio%20images/UXUI/GenesisMockup_cuy2vz.png",
      href: "/projects/genesis",
      date: "2023",
    },
    {
      title: "@ The Afrikan Store",
      subtitle: "Product Design",
      message:
        "A summary of Product design projects completed for The Afrikan Store.",
      image:
        "https://res.cloudinary.com/dolduzhix/image/upload/v1712343005/Portfolio%20images/TheAfrikanStore/Front_face_h22jsb.png",
      href: "/projects/tas",
      date: "2024",
    },
  ];

  return (
    <div className="bg-off-white-2 z-10 text-off-green pt-12 pb-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className="border border-white rounded pt-4 pb-8 px-8 h-full flex flex-col">
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
              <p className="mt-6 mb-8 text-sm md:text-md leading-6 font-light flex-grow">
                {project.message}
              </p>
              <div className="mt-auto">
                {project.href !== "#" ? (
                  <a
                    href={project.href}
                    className="inline-block no-underline text-sm font-normal bg-transparent text-off-green px-4 py-2 rounded-md border border-off-green hover:scale-105 transition-all ease-in duration-150"
                  >
                    See More
                  </a>
                ) : (
                  <button
                    disabled
                    className="no-underline text-sm font-normal bg-transparent text-off-green px-4 py-2 rounded-md border border-off-green hover:scale-105 transition-all ease-in duration-150 cursor-wait"
                  >
                    Coming soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
