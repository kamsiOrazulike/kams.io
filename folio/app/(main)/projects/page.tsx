import ProjectCard from "../components/Cards";

export default function Projects() {
  return (
    <>
      <div className="relative bg-svg-3 bg-fixed bg-gray-900 text-white h-full">
        <div className="w-full h-screen mx-auto text-center flex flex-col items-center py-36 px-14">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="inHandy"
              message="Your brief introduction to BSL"
              image={`./static/imgs/inHandyMockup.png`}
              href="/projects/inhandy"
            />
            <ProjectCard
              title="Genesis Group"
              message="Genesis Restaurant food delivery application"
              image={`./static/imgs/GenesisMockup.png`}
              href="/projects/genesis"
            />
            {/* <ProjectCard
              title="GenHRM"
              message="Genesis Group Human Resources Management Portal/System"
              image={`./static/imgs/GenHRM.png`}
              href="/projects/genesis"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
