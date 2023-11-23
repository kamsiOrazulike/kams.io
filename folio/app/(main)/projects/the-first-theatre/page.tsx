"use client";
import Head from "next/head";
import {
  FaFigma,
  FaReact,
  FaFileExcel,
  FaGitAlt,
  FaCogs,
} from "react-icons/fa";
import ArrowToTop from "../../components/ArrowToTop";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
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
            <svg
              x="50%"
              y="-1"
              className="overflow-visible fill-gray-200 dark:fill-gray-900"
            >
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
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  IDE Module: Cyberphysical Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Introduction
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Built around the idea of playful nostalgia; The mission of my
                  Cyperphysical System project revolves around combining the
                  charm of traditional shadow puppetry with cutting-edge
                  innovations.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Utilising Hand-pose recognition technology, Machine Learning
                  algorithms using Wekinator, Arduino nano hardware, and a
                  symphony of motors, gears, and linkages, we wish to create a
                  unique fusion that brings the art of shadow puppetry into the
                  digital age.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[32rem] max-w-none rounded-xl sm:w-[48rem]"
              src="/static/imgs/ide/arduinome3.jpg"
              alt="thefirsttheatreimg"
            />
          </div>
          <div className="text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Roles
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li>Electronics Engineer</li>
                      <li>Arduino Programming</li>
                      <li>Machine Learning</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Tools
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
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
                        <FaCogs className="mr-4" />
                        Wekinator
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaCogs className="mr-4" />
                        Handpose OSC
                      </li>
                    </ul>
                  </div>
                </div>
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
        <title>The First Theatre</title>
      </Head>
      <div className="bg-red-800 bg-cover dark:text-white text-black">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300"
          >
            The First Theatre
          </h1>
        </div>
        <Overview />
      </div>
    </>
  );
}
