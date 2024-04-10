"use client";
import Head from "next/head";
import { CldImage } from "next-cloudinary";
import {
  AiFillDollarCircle,
  AiFillSetting,
  AiFillVideoCamera,
  AiOutlineCheck,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaBrain, FaFigma, FaFilm, FaPinterestP } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { BiPencil } from "react-icons/bi";
import ArrowToTop from "../../components/ArrowToTop";

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
            <svg
              x="50%"
              y="-1"
              className="overflow-visible fill-gray-300 dark:fill-black"
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
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  inHandy: Your British Sign Language Learning tool
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Overview
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-400">
                  Sign Language is a valuable tool for communicating with the
                  deaf or hard-of-hearing, and learning it can bring a host of
                  benefits.
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Improving spatial awareness
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Enhance cognitive function
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" /> Bridge
                    the communication gaps
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
            <CldImage
              width="1050"
              height="900"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712770337/Portfolio%20images/TheAfrikanStore/Screenshot_2024-04-10_at_18.21.22_c8bnro.png"
              }
              alt={"InHandy Prototype"}
            />
            <CldImage
              width="1050"
              height="900"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712770338/Portfolio%20images/TheAfrikanStore/Screenshot_2024-04-10_at_18.21.33_g72j1y.png"
              }
              alt={"InHandy Prototype"}
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
                    <ul role="list" className="mt-8 space-y-8 text-gray-300">
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
                    <ul role="list" className="mt-8 space-y-8 text-gray-300">
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

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://www.figma.com/proto/iLR6o7KWBJGeLR4lMQquv5/inHandy-Mobile?page-id=0%3A1&type=design&node-id=0-56&viewport=361%2C129%2C0.25&t=pDBIU2iiDAulv4Xr-1&scaling=scale-down&starting-point-node-id=0%3A72&show-proto-sidebar=1&mode=design"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out Figma prototype
                </a>
                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://drive.google.com/file/d/1If5L01Zu4dGQBaXA7m5G2lE_ShdEz8sE/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  View full report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TASBrand() {
  return (
    <>
      <Head>
        <title>The Afrikan Store</title>
      </Head>
      <div className="bg-green-700 dark:text-white text-black">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300"
          >
            The Afrikan Store
          </h1>
        </div>
        <Overview />
      </div>
    </>
  );
}
