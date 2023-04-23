export default function Featured() {
  return (
    <>
      <div className="dark:text-white dark:bg-slate-900 bg-gray-300 text-black">
        <div className="max-w-[800px] w-[90%] h-screen mx-auto">
          <div className="flex flex-row mx-8 mb-8 tracking-wide">
            <h1 className="font-bold text-3xl capitalize">Featured</h1>
          </div>
          <div className="flex md:flex-row flex-col align-middle justify-center">
            <figure class="relative max-w-sm transition-all duration-300 mb-6 md:mb-0 cursor-pointer filter grayscale-[0.5] hover:grayscale-0">
              <a href="#">
                <img
                  class="rounded-lg"
                  src="/static/imgs/mockup/GenesisMockup.jpg"
                  alt="Genesis Restaurant UI design"
                />
              </a>
            </figure>
            <figure class="relative max-w-sm transition-all duration-300 mb-6 md:mb-0 cursor-pointer filter grayscale-[0.5] hover:grayscale-0">
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
