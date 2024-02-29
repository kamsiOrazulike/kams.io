"use client";
import Head from "next/head";
import { AiOutlineCheck, AiOutlineMail } from "react-icons/ai";
import { FaFigma, FaCss3, FaReact, FaCircle, FaCheck } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import ArrowToTop from "../components/ArrowToTop";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-black">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-green-600">
                  Kamsiyonna Orazulike
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  A passion for design
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  <span className="text-sm text-green-400">
                    <FaCircle className="inline-block text-[8px] text-green-400 animate-pulse mr-2" />
                    Imperial College London | Royal College of Art
                  </span>
                  <br /> MSc/MA Innovation Design Engineering <br />
                </p>
                <p className="mt-3 text-lg leading-8 text-gray-400">
                  <span className="text-sm text-green-400">
                    <FaCheck className="inline-block text-[8px] text-green-400 mr-2" />
                    Queen Mary University of London
                  </span>
                  <br /> BEng Design Innovation and Creative Engineering
                  <sup className="text-xs"> (First class)</sup>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <a
              href="https://www.figma.com/file/ZTINRs7F6Y0jmqDzRIxZAG/IDE-Reflective-Summary?type=design&node-id=1%3A2&mode=design&t=GHYo2J8UAT6OwJUz-1"
              target="_blank"
            >
              <img
                className="w-[32rem] hover:opacity-80 transition-all duration-150 border border-green-400 max-w-none rounded-xl sm:w-[48rem]"
                src="/static/imgs/ide/selfAudit.svg"
                alt="self-audit-img"
              />
            </a>
          </div>
          <div className="text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Outcome
                </h1>
                <p className="text-gray-700 dark:text-gray-400">
                  <span className="text-green-400">
                    "A jack of all trades..."
                  </span>
                  <br /> The result of studying Innovation Design Engineering
                  for both my Bachelors and Masters gave me the opportunity to
                  develop different skills that I still make use of today.
                </p>
                <p className="text-gray-700 dark:text-gray-400 mt-4">
                  <span className="text-green-400">
                    "...master of two or three"
                  </span>{" "}
                  <br />
                  Learning and applying different skills where I need them is my
                  true work.
                </p>

                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl text-green-400">
                      Skills
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li>UX/UI Designer</li>
                      <li>Graphic Designer</li>
                      <li>Character Illustrator</li>
                      <li>Product Design</li>
                      <li>Software Developer</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl text-green-400">
                      Tools
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFigma className="mr-4" />
                        Figma
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <DiIllustrator className="mr-4 text-orange-700" />
                        Adobe Illustrator
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaReact className="mr-4 text-blue-400" />
                        React (+ Native)
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaCss3 className="mr-4 text-blue-400" />
                        CSS/SCSS
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <img
                          className="mr-4 w-[30px]"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png"
                        />
                        Arduino
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <img
                          className="mr-4 w-[20px]"
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Processing_4.0b1_Icon.png"
                        />
                        Processing
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <img
                          className="mr-4 w-[20px]"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png"
                        />
                        Blender
                      </li>

                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <img
                          className="mr-4 w-[20px]"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1728px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png"
                        />
                        Microsoft Office
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <img
                          className="mr-4 w-[20px]"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png"
                        />
                        PowerBI
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  className="text-sm py-2 mt-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="mailto:kamsi_orazulike@icloud.com"
                >
                  <AiOutlineMail /> &nbsp;Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Genesis() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="bg-gradient-to-b from-green-800 to-black bg-4 text-white">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300"
          >
            About
          </h1>
        </div>
        <Overview />
      </div>
    </>
  );
}
