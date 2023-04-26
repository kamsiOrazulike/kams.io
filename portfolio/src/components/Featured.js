export default function Featured() {
  return (
    <>
      <div className="dark:text-white dark:bg-slate-900 bg-gray-300 text-black">
        <div className="max-w-[800px] w-[90%] h-auto mx-auto mt-[-200px]">
          <div className="flex flex-row mx-8 mb-8 tracking-wide">
            <h1 className="font-bold text-3xl capitalize">Featured</h1>
          </div>
          <div className="flex md:flex-row flex-col align-middle justify-start pb-8">
            <figure class="relative w-[200px] transition-all duration-300 mb-6 md:mb-0 md:mx-2 cursor-pointer filter grayscale-[0.7] hover:grayscale-0">
              <a href="#">
                <img
                  class="rounded-lg"
                  src="/static/imgs/mockup/GenesisMockup.jpg"
                  alt="Genesis Restaurant UI design"
                />
              </a>
            </figure>
            <figure class="relative w-[200px] transition-all duration-300 mb-6 md:mb-0 md:mx-2 cursor-pointer filter grayscale-[0.7] hover:grayscale-0">
              <a href="#">
                <img
                  class="rounded-lg"
                  src="/static/imgs/mockup/inHandyMockup.jpg"
                  alt="inHandy UI design"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
