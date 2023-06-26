"use client";
import Head from "next/head";
import { AiFillVideoCamera, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaFigma, FaPinterestP } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { BiPencil } from "react-icons/bi";

const Intro = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-300 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
              className="overflow-visible fill-gray-300 dark:fill-gray-900"
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
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Learn British Sign Language
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Introduction
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Sign Language is a valuable tool for communicating with the
                  deaf or hard-of-hearing, and learning it can bring a host of
                  benefits.
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 dark:text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-600 dark:text-green-400" />
                    Improving spatial awareness
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-600 dark:text-green-400" />
                    Enhance cognitive function
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-600 dark:text-green-400" />{" "}
                    Bridge the communication gaps
                  </li>
                </ul>
                <p>
                  Whether you're interested in learning Sign Language as a
                  personal hobby or as a professional skill, its benefits are
                  clear.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[32rem] max-w-none rounded-xl sm:w-[48rem]"
              src="/static/imgs/inHandyMockup.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Goal
                </h1>
                <p className="text-gray-400">
                  The aim of this project is to combine two important concepts
                  when it comes to learning:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <MdOutlineVideogameAsset className="mx-4 text-indigo-600" />{" "}
                    Gamification
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillVideoCamera className="mx-4 text-indigo-600" />{" "}
                    Contextual/Applied learning
                  </li>
                </ul>
                <p>
                  Providing a more engaging learning experience of the language
                  is paramount for users. As well the options to pursue their
                  learning further as well as how to do so.
                </p>

                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Roles
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li>User Researcher</li>
                      <li>Product Designer</li>
                      <li>Product Analyst</li>
                      <li>Graphic Designer</li>
                      <li>Character Illustrator</li>
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
                        <FaPinterestP className="mr-4" />
                        Pinterest
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFigma className="mr-4" />
                        Figma
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <DiIllustrator className="mr-4" />
                        Adobe Illustrator
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <BiPencil className="mr-4" />
                        Procreate for iPad
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

export default function InHandy() {
  return (
    <>
      <Head>
        <title>InHandy</title>
      </Head>
      <div className="bg-inhandy-img bg-cover bg-no-repeat dark:text-white text-black">
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1 className="md:text-5xl text-3xl my-[80px] mx-auto transition-all duration-300">
            inHandy
          </h1>
        </div>

        <Intro />
      </div>
    </>
  );
}
