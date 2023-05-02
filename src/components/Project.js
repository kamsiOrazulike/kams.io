
export const Projects = () => {
  return (
    <>
      <div class="bg-gray-300 dark:bg-gray-900 h-screen">
        <div class="w-1/2 mx-auto pt-16">
          <h1 class="md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide md:py-2 ease-in-out duration-500">
            Featured Projects
          </h1>
          <p className="mb-8 md:text-md sm:text-md text-sm tracking-wide font-light my-1">
            Most recent | Favourite
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <figure className="relative w-[80%] md:w-[50%] mx-auto my-2 md:mx-4 transition-all duration-300 cursor-pointer filter grayscale-[0.7] hover:grayscale-0">
              <a href="/inHandy">
                <img
                  class="rounded-lg"
                  src="./static/imgs/mockup/inHandyMockup.jpg"
                  alt="projectimg"
                />
              </a>
              <figcaption class="mt-2 text-sm text-center">
                My Final Year: Joi de Vivre <br /> inHandy
              </figcaption>
            </figure>

            <figure className="relative w-[80%] md:w-[50%] mx-auto my-2 md:mx-4 transition-all duration-300 cursor-pointer filter grayscale-[0.7] hover:grayscale-0">
              <a href="/genesis">
                <img
                  class="rounded-lg"
                  src="./static/imgs/mockup/GenesisMockup.jpg"
                  alt="projectimg"
                />
              </a>
              <figcaption class="mt-2 text-sm text-center">
                Genesis Restaurant <br /> Food Delivery app
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
