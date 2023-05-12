import { AiOutlineArrowRight } from "react-icons/ai";

export const Projects = () => {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-900 w-[100%] h-[100%]">
        <div className="mx-auto pt-16">
          <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide md:py-2 ease-in-out duration-500">
            Featured Projects
          </h1>
          <p className="mb-8 md:text-md sm:text-md text-sm tracking-wide font-light my-1"></p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="card md:mx-6 sm:mx-6 my-4">
              <a href="/inHandy">
                <div className="card-details">
                  <img
                    src="./static/imgs/mockup/inHandyMockup.png"
                    className="w-[100%]"
                  />
                  <p className="text-title">inHandy</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    BSL Learning app
                  </p>
                </div>
                <span className="card-button">
                  <AiOutlineArrowRight className="mx-auto" />
                </span>
              </a>
            </div>

            <div className="card md:mx-6 sm:mx-6 my-4">
              <a href="/genesis">
                <div className="card-details">
                  <img
                    src="./static/imgs/mockup/GenesisMockup.png"
                    className="w-[100%]"
                  />
                  <p className="text-title">Genesis Restaurant</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Food Delivery app
                  </p>
                </div>
                <span className="card-button">
                  <AiOutlineArrowRight className="mx-auto" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
