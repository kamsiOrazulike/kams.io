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
              height="1000"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712363004/Portfolio%20images/UXUI/inHandyMockup_a9tly6.png"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Introduction = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
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
                <div className="w-full flex flex-row mt-6">
                  <a
                    className="w-1/3 flex flex-row justify-center items-center bg-blue-500 mr-2 py-2 rounded-full"
                    href="https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/hearing-loss#about-hearing-loss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source &nbsp;{" "}
                    <CldImage
                      width="24"
                      height="10"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363220/Portfolio%20images/inHandy/NHSLogo_d1ai6g.png"
                      }
                      alt={"nhs-logo"}
                    />
                  </a>
                  <a
                    className="w-2/3 text-sm text-center border border-blue-500 ml-2 py-2 rounded-full"
                    href="mailto:kamsi_orazulike@icloud.com?subject=inHandy full report"
                  >
                    Enquire for full report
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <CldImage
                  width="650"
                  height="200"
                  className="mb-4"
                  crop="fill"
                  preserveTransformations
                  src={
                    "https://res.cloudinary.com/dolduzhix/image/upload/v1712363192/Portfolio%20images/inHandy/inHandyPhoneMock_hawfox.png"
                  }
                  alt={"3d mockup"}
                />
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
      <div className="relative isolate overflow-hidden bg-black px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                  <CldImage
                    width="700"
                    height="400"
                    className="rounded-md mb-2"
                    preserveTransformations
                    src={
                      "https://res.cloudinary.com/dolduzhix/image/upload/v1712363117/Portfolio%20images/inHandy/Project_Plan_bqkldr.jpg"
                    }
                    alt={"Project plan"}
                  />
                  <CldImage
                    width="700"
                    height="700"
                    className="rounded-md mb-2 bg-gray-300"
                    preserveTransformations
                    src={
                      "https://res.cloudinary.com/dolduzhix/image/upload/v1712363186/Portfolio%20images/inHandy/handDesign_izb0qm.png"
                    }
                    alt={"Hand design"}
                  />
                  <CldImage
                    width="700"
                    height="700"
                    className="rounded-md mb-2"
                    preserveTransformations
                    src={
                      "https://res.cloudinary.com/dolduzhix/image/upload/v1712363098/Portfolio%20images/inHandy/characterInspiration_wb7gzs.jpg"
                    }
                    alt={"Character inspiration"}
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
                  <span className="text-white">Organisation</span> and{" "}
                  <span className="text-white">presentation</span> of this
                  information is important Studies have shown that students in a
                  classroom regardless of age benefit from a more engaging and
                  'fun' learning experience. Fun in learning allows an
                  individual to develop a love for learning, having a knock on
                  effect on their motivation levels.
                </p>
                <p className="text-small italic leading-8 text-gray-400 mb-2">
                  Growth Engineering mentions an example where the company
                  Volkswagen, as part of their Fun theory', turned a staircase
                  into a giant functioning piano keyboard. A recorded 66% more
                  people chose the piano stairs over the normal one. This study
                  is a prime example of how{" "}
                  <span className="text-white">fun</span>,{" "}
                  <span className="text-white">engaging</span> and{" "}
                  <span className="text-white">interactive </span>
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

const Method = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Method I
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Contextual Learning
                </h1>
                <p className="mt-6 text-small italic leading-8 text-gray-400">
                  Imagine Learning Sign Language through the use of imagery and
                  videos. Demonstrating the language being used in real world
                  scenarios.
                </p>
                <p className="mt-6 text-small italic leading-8 text-gray-400">
                  It is a common misconception that memory techniques only work
                  when it comes to learning vocabulary. Studies have shown that
                  once a memory technique formula is created and understood, one
                  can apply the same formulae and use them to learn more.
                </p>
                <img
                  src="https://files.tofugu.com/articles/japanese/2014-09-03-learn-katakana/%E3%82%AA-opera.jpg"
                  className="w-[22rem] max-w-none rounded-xl sm:w-[28rem] object-fit p-2 my-2"
                  alt="tofuguimage"
                />
                <p className="figuretext">
                  オ is the katakana for お (o). Looks like an Opera singer.
                </p>
                <a
                  className="text-sm py-2 flex flex-row justify-center items-center border border-orange-500 hover:bg-orange-500 transition-all duration mx-auto my-2 rounded-full"
                  href="https://www.tofugu.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - Tofugu
                </a>

                <p className="mt-6 text-small leading-8 text-gray-400">
                  When learning and memorising the Japanese writing styles
                  Hiragana and Katakana. A popular method used to teach these
                  writing styles is known as{" "}
                  <span className="text-white">Visual Mnemonics</span>.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  This memory technique involves choosing a word or term that
                  you want to memorise and associating that word with an object
                  or character that you imagine sounds like the word you want to
                  memorise. Visual Mnemonics associate words with visual clues
                  and make them easier to memorise or learn.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  The use of Visual Mnemonics in teaching highlights the
                  importance of developing a visually stimulating learning
                  experience for the user in order for them to retain what they
                  have learnt as well as hold their interest.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  When it comes to learning Sign Language it is important to
                  consider the way in which the elements are designed. Designing
                  to simplify the process of making reasonable connections in
                  the language is key to developing a valuable learning
                  experience.
                </p>

                <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
                  Gamification
                </h1>
                <p className="mt-6 text-small italic leading-8 text-gray-400">
                  Adopting certain game elements when it comes to e-learning
                  allows the user to learn effectively. Game elements that
                  provide this encouraging feedback and the way they are
                  rendered ultimately play a part in boosting the learning
                  experience.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  It's important in any learning context/situation to provide
                  feedback. How this is done can vary from specifically or a
                  combination of:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Levelling up
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" />
                    Gathering of points
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-green-400" /> Unlocking
                    of new features
                  </li>
                </ul>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  Game-like elements are very important to incorporate in the
                  product design as it would be a powerful way to connect the
                  user to the learning experience. The process of learning Sign
                  Language does not have to be limited to watching a
                  professional repeat signs on a screen, it can be made
                  enjoyable and more interactive in order to maintain the user
                  interest.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Language + Movies <FaFilm className="text-gray-400" />
                </h1>
                <CldImage
                  width="700"
                  height="700"
                  className="rounded-md my-2"
                  preserveTransformations
                  src={
                    "https://res.cloudinary.com/dolduzhix/image/upload/v1712363123/Portfolio%20images/inHandy/screenshotnetflix_w0zggg.jpg"
                  }
                  alt={"Netflix Screenshot"}
                />
                <p className="mt-6 text-small italic leading-8 text-gray-400">
                  Another example of how the use of a visual stimulus improves
                  the User learning experience is in foreign movies.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  Watching a foreign movie with subtitles is known as a good way
                  to pick up certain words or phrases in that foreign language.
                  Examples include the screenshot above taken from the TV series
                  'Lupin' which was originally filmed in French. Watching the
                  series on Netflix gives the option to watch in French with
                  English subtitles which is great for both English individuals
                  trying to learn French and French individuals trying to learn
                  English.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  Studies demonstrate that one of the main benefits of films in
                  a foreign language is the fact that it provides the most
                  authentic example of the language being used in a real-world
                  scenario. It exposes the natural expressions and
                  conversational cues hence placing the user in an environment
                  where information can be received and retained in a more
                  engaging manner.
                </p>

                <p className="mt-8 text-base font-semibold leading-7 text-indigo-600">
                  Inspiration: Language learning application
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Duolingo
                </h1>
                <img
                  src="https://1000logos.net/wp-content/uploads/2020/10/Duolingo-logo.png"
                  className="w-[100px] mt-2"
                  alt="duolingologo"
                />

                <p className="mt-6 text-small leading-8 text-gray-400">
                  The popular language learning application,
                  <span className="text-white"> Duolingo</span> is the perfect
                  example of how teaching using game-design and game principles
                  is an effective way for a user to learn an entirely new
                  language.
                </p>
                <img
                  src={
                    "https://media.cntraveler.com/photos/5859aff8b9f6ae2472e32578/master/w_1169,h_586,c_limit/duolingo-cr-courtesy.jpg"
                  }
                  className="w-30 mt-2 rounded-lg"
                />
                <p className="mt-6 text-small leading-8 text-gray-400">
                  The screenshot on above displays the formatting of a test like
                  question providing graphics that are also visually
                  stimulating. This keeps any user active and engaged throughout
                  the learning experience.
                </p>
                <p className="mt-6 text-small leading-8 text-gray-400">
                  <b className="text-white">Feedback</b> on the User progress
                  can also be noticed at the top. This is incredibly helpful in
                  informing the user of exactly how much work they are doing and
                  can act as either a source of motivation or discouragement.
                </p>

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="mailto:kamsi_orazulike@icloud.com?subject=inHandy Project report enquiry"
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire for full report
                </a>
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
      <div className="bg-indigo-700 dark:text-white text-black">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300"
          >
            inHandy
          </h1>
        </div>
        <Overview />
        <Introduction />
        <Design />
        <Method />
      </div>
    </>
  );
}
