import ProjectCard from "../components/Cards";

export default function Projects() {
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
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="inHandy"
                subtitle="UX/UI Design project"
                message="Your brief introduction to BSL"
                image={`./static/imgs/inHandyMockup.png`}
                href="/projects/inhandy"
              />
              <ProjectCard
                title="Genesis FDA"
                subtitle="UX/UI Design project"
                message="Genesis Restaurants food delivery application"
                image={`./static/imgs/GenesisMockup.png`}
                href="/projects/genesis-fda"
              />
              <ProjectCard
                title="GenHRM"
                subtitle="Dev project"
                message="Genesis Group Human Resources Management Portal/System"
                image={`./static/imgs/genHRM/login.png`}
                href="/projects/genhrm"
              />
              <ProjectCard
                title="The First Theatre"
                subtitle="IDE Project"
                message="Programmed using Arduino, Processing and Wekinator"
                image={`./static/imgs/ide/thefirsttheatre.jpg`}
                href="/not-found"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
