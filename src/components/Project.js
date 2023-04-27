export const UXProject = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="cursor-default font-light text-left text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              A User first approach.
            </h2>
            <p class="mb-8">
              By doing this, I can make sure my end product meets the needs of
              my target audience. It's all about getting to know the users and
              understanding what they want and need. By doing this, I can make
              sure your design is easy to use, enjoyable to interact with, and
              solves real problems. It's a key part of creating a product that
              people will love and find useful!
            </p>
            <div className="py-2 px-4 text-gray-700 dark:text-slate-300 border border-gray-700 dark:border-slate-300 rounded-lg text-center">
              <a href="/projects"> All projects</a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <figure>
              <img
                class="w-full rounded-lg hover:scale-[1.05] transition-all duration-500"
                src="/static/imgs/mockup/inHandyMockup.jpg"
                alt="projectimg"
              />
              <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                My Final Year: Joi de Vivre Project <br /> inHandy
              </figcaption>
            </figure>
            <figure>
              <img
                class="mt-4 w-full lg:mt-10 rounded-lg hover:scale-[1.05] transition-all duration-500"
                src="/static/imgs/mockup/GenesisMockup.jpg"
                alt="projectimg"
              />
              <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Food Delivery Application <br /> Genesis Restaurant
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
