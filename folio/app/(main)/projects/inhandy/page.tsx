"use client";
import Head from "next/head";
import {
  AiFillDollarCircle,
  AiFillSetting,
  AiFillVideoCamera,
  AiOutlineCheck,
  AiOutlineMobile,
} from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaBrain, FaFigma, FaPinterestP } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { BiPencil } from "react-icons/bi";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 my-12 sm:py-18 lg:overflow-visible lg:px-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Ideation = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 my-12 sm:py-24 lg:overflow-visible lg:px-0">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  inHandy
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  The Story
                </h1>
                <p className="mt-6 text-small italic leading-8 text-gray-400">
                  Having a cousin that was born and grew up deaf and without
                  proper treatment is something I’m reminded of every time I
                  come home. The issue of accessibility and/or awareness of
                  methods to provide help rendered his ability to communicate
                  limited to loud hums and hand movements that are most times
                  difficult to understand. This communication barrier between
                  him and I prompted me to ask the question, “Why wasn’t aid
                  possible as he was growing up?”
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  Some of the most popular methods for treating hearing
                  impairment involve:
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Earwax treatment
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Assistive Listening Devices (ALD’s)
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />{" "}
                    Purchasing hearing aids or hearing implants
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" /> Sign
                    Language and Lip reading
                  </li>
                </ul>
                <p className="leading-8">
                  These are all in many ways, effective alternative solutions to
                  bridging the communication gap between individuals that are
                  hearing impared and those that are not. However not all
                  solutions are accessible, and some are not as known.
                </p>
                <a
                  className="flex flex-row justify-center items-center bg-blue-500 mx-auto my-2 rounded-full"
                  href="https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/hearing-loss#about-hearing-loss"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source &nbsp;{" "}
                  <img
                    src="/static/imgs/inHandy/NHSLogo.png"
                    className="relative h-auto w-6"
                    alt="nhslogo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Why inHandy?
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-400">
                  I decided which solution to focus on by process of
                  elimination. My process depending mainly on two factors:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineMobile className="mx-4 text-blue-400" />
                    Accessibility
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillDollarCircle className="mx-4 text-green-400" />
                    Cost
                  </li>
                </ul>
                <p className="text-small italic leading-8 text-gray-400 mb-2">
                  This left{" "}
                  <span className="text-white">Sign Language/Lip reading</span>{" "}
                  most favourable amongst the list. Not only is it the cheapest
                  option, but the process of learning can be done anywhere.
                  Learning Sign language is also especially helpful in
                  situations where hearing aids are too pricey and a hospital
                  operation is not favourable. It is the easiest solution to
                  result to and also the most effective when it comes to
                  learning about the d/Deaf community.
                </p>

                <p className="text-small italic leading-8 text-gray-400 mb-2">
                  This is important because not only does it act as a bridge for
                  the communication gaps between deaf and hearing, it raises
                  awareness of the communities as well. Which is necessary in
                  order to avoid unintentional offence or discrimination and
                  reach a point where inclusivity is the foundation of the
                  community.
                </p>

                <p className="text-small italic leading-8 text-gray-400">
                  Sign Language is also very beneficial for the development of
                  communication with children as they grow older. One of the
                  benefits of children learning sign language is that it gives
                  them the ability to communicate their needs during their
                  development years. I believe that Sign Language has the
                  potential to be a privilege a handful of families would
                  benefit from even if it is just learning it to a basic level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Design = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 my-12 sm:py-24 lg:overflow-visible lg:px-0">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                  <img
                    className="w-[22rem] max-w-none hover:scale-110 transition-all duration-150 rounded-xl sm:w-[28rem] object-fit bg-white p-2"
                    src={"/static/imgs/inHandy/Project_Plan.jpg"}
                    alt=""
                  />
                  <img
                    className="w-[22rem] max-w-none rounded-xl sm:w-[28rem] object-fit bg-gray-500 p-2 my-2"
                    src={"/static/imgs/inHandy/handDesign.png"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Ideation process
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Brainstorming + Design{" "}
                  <span>
                    <FaBrain className="text-red-200" />
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-400">
                  In my analysis of existing applications/methods of learning
                  BSL, most existing applications lacked in:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <FaBrain className="mx-4 text-red-200" />
                    Interactivity - To maintain User interest whilst learning
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillSetting className="mx-4 text-gray-200" />
                    Memory - User retention of the information being taught to
                    memory.
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillSetting className="mx-4 text-gray-200" />
                    Cognitive Overload - Too much information given over a time
                    period.
                  </li>
                </ul>
                <p className="text-small italic leading-8 text-gray-400 mb-2">
                  Organisation and presentation of this information is important
                  Studies have shown that students in a classroom regardless of
                  age benefit from a more engaging and 'fun' learning
                  experience. Fun in learning allows an individual to develop a
                  love for learning, having a knock on effect on their
                  motivation levels.
                </p>
                <p className="text-small italic leading-8 text-gray-400 mb-2">
                  Growth Engineering mentions an example where the company
                  Volkswagen, as part of their Fun theory', turned a staircase
                  into a giant functioning piano keyboard. A recorded 66% more
                  people chose the piano stairs over the normal one. This study
                  is a prime example of how fun, engaging and interactive
                  technologies can transform the way people behave in situations
                  that would normally be seen as tiring.
                </p>
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
          <h1 className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300">
            inHandy
          </h1>
        </div>
        <Overview />
        <Ideation />
        <Design />
      </div>
    </>
  );
}
