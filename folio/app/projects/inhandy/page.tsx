"use client";
import Head from "next/head";
import { CldImage } from "next-cloudinary";
import {
  AiFillDollarCircle,
  AiFillSetting,
  AiFillVideoCamera,
  AiOutlineCheck,
  AiOutlineMobile,
  AiOutlineWarning,
} from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import {
  FaAppStore,
  FaBrain,
  FaFigma,
  FaFilm,
  FaPinterestP,
  FaSearch,
  FaYoutube,
} from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { BiPencil } from "react-icons/bi";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-off-green lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  inHandy: An interactive introduction to British Sign Language!
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Overview
                </h1>
                <p className="mt-6 text-xl leading-8 text-off-green">
                  Sign Language is a valuable tool for communicating with the
                  deaf or hard-of-hearing, and learning it can bring a host of
                  benefits.
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Improving spatial awareness
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Enhance cognitive function
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" /> Bridge
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
              draggable="false"
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
                <p className="text-off-green">
                  The aim of this project is to combine two important concepts
                  when it comes to learning:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <MdOutlineVideogameAsset className="mx-4 text-off-green" />{" "}
                    Gamification
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillVideoCamera className="mx-4 text-off-green" />{" "}
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
                    <ul role="list" className="mt-8 space-y-8 text-off-green">
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
                    <ul role="list" className="mt-8 space-y-8 text-off-green">
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
                  className="text-sm py-2 mt-8 mb-2 flex flex-row justify-center items-center border border-off-green hover:bg-off-green hover:text-off-white transition-all duration mx-auto"
                  href="https://www.figma.com/proto/iLR6o7KWBJGeLR4lMQquv5/inHandy-Mobile?page-id=0%3A1&type=design&node-id=0-56&viewport=361%2C129%2C0.25&t=pDBIU2iiDAulv4Xr-1&scaling=scale-down&starting-point-node-id=0%3A72&show-proto-sidebar=1&mode=design"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out Figma prototype
                </a>
                <a
                  className="text-sm py-2 flex flex-row justify-center items-center border border-off-green hover:bg-off-green hover:text-off-white transition-all duration mx-auto"
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

const Introduction = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  inHandy
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  The Story
                </h1>
                <p className="mt-6 text-small italic leading-8 text-off-green">
                  Having a cousin that was born and grew up deaf and without
                  proper treatment is something I’m reminded of every time I
                  come home. The issue of accessibility and/or awareness of
                  methods to provide help rendered his ability to communicate
                  limited to loud hums and hand movements that are most times
                  difficult to understand. This communication barrier between
                  him and I prompted me to ask the question, “Why wasn’t aid
                  possible as he was growing up?”
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  Some of the most popular methods for treating hearing
                  impairment involve:
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Earwax treatment
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Assistive Listening Devices (ALD’s)
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />{" "}
                    Purchasing hearing aids or hearing implants
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" /> Sign
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
                      draggable="false"
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
                  draggable="false"
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
                <p className="mt-6 text-xl leading-8 text-off-green">
                  I decided which solution to focus on by process of
                  elimination. My process depending mainly on two factors:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineMobile className="mx-4 text-blue-400" />
                    Accessibility
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillDollarCircle className="mx-4 text-off-green" />
                    Cost
                  </li>
                </ul>
                <p className="text-small italic leading-8 text-off-green mb-2">
                  This left{" "}
                  <span className="text-off-green">
                    Sign Language/Lip reading
                  </span>{" "}
                  most favourable amongst the list. Not only is it the cheapest
                  option, but the process of learning can be done anywhere.
                  Learning Sign language is also especially helpful in
                  situations where hearing aids are too pricey and a hospital
                  operation is not favourable. It is the easiest solution to
                  result to and also the most effective when it comes to
                  learning about the d/Deaf community.
                </p>

                <p className="text-small italic leading-8 text-off-green mb-2">
                  This is important because not only does it act as a bridge for
                  the communication gaps between deaf and hearing, it raises
                  awareness of the communities as well. Which is necessary in
                  order to avoid unintentional offence or discrimination and
                  reach a point where inclusivity is the foundation of the
                  community.
                </p>

                <p className="text-small italic leading-8 text-off-green">
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

const Analysis = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-12">
        <div className="mx-auto flex flex-col items-center gap-y-16 lg:flex-row lg:mx-0 lg:items-start lg:gap-x-8 lg:gap-y-10">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                'State of the art'
              </p>
              <h1 className="flex flex-row mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Analysis
                <span>
                  <FaSearch className="text-off-green mx-2" />
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-off-green">
                Conducting general searches led me to find some existing methods
                for learning BSL including:
              </p>
              <ul className="my-12 text-md p-2 text-off-green">
                <li className="m-4 flex flex-row align-middle justify-start items-center">
                  <FaYoutube className="mx-4 text-off-green" />
                  Youtube tutorials | Channel: Commanding Hands
                </li>
                <li className="m-4 flex flex-row align-middle justify-start items-center">
                  <FaAppStore className="mx-4 text-off-green" />
                  Existing BSL Applications | BSL by Saeed Bashir (2016)
                </li>
              </ul>
              {/* Commanding hands */}
              <div className="mb-8 flex flex-col items-center">
                <h1 className="m-4 text-xl font-light flex flex-row">
                  Youtube tutorials | Channel: Commanding Hands
                </h1>
                <img
                  className="w-[15rem] lg:hidden rounded-md"
                  src={
                    "https://i.ytimg.com/vi/o29QtzBuSp4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_Gs5xEYh3wzJbqYSu4UpoLWIKJA"
                  }
                  alt={"Commanding Hands"}
                />
                {/* Pros */}
                <div className="p-4 my-12 text-md shadow-xl text-off-green">
                  <h3 className="text-off-green font-light mb-2 text-md">
                    Pros
                  </h3>
                  <ul>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineCheck className="mr-4 text-off-green" />
                      Wide range of videos that are accessible on YouTube.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineCheck className="mr-4 text-off-green" />
                      Free subscription to professional channels.
                    </li>
                  </ul>
                </div>
                {/* Cons */}
                <div className="p-4 my-12 text-md shadow-xl text-off-green">
                  <h3 className="text-off-green font-light mb-2 text-md">
                    Cons
                  </h3>
                  <ul>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineWarning className="mr-4 text-off-green" />
                      Watching a video repeatedly is not an engaging way to
                      learn.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineWarning className="mr-4 text-off-green" />
                      Lacking interactivity.
                    </li>
                  </ul>
                </div>
              </div>
              {/* BSL */}
              <div className="mb-8 flex flex-col items-center">
                <h1 className="m-4 text-xl font-light flex flex-row">
                  Existing BSL Applications | BSL by Saeed Bashir (2016)
                </h1>
                <img
                  className="w-[15rem] lg:hidden rounded-md"
                  src={
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/f2/6f/46/f26f4628-a59d-5557-bbc1-97476959ad7b/pr_source.png/1200x630wa.png"
                  }
                  alt={"BSL App"}
                />
                {/* Pros */}
                <div className="p-4 my-12 text-md shadow-xl text-off-green">
                  <h3 className="text-off-green font-light mb-2 text-md">
                    Pros
                  </h3>
                  <ul>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineCheck className="mr-4 text-off-green" />
                      All learning topics are listed for user to select from.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineCheck className="mr-4 text-off-green" />
                      Visually stimulating and engaging for User.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineCheck className="mr-4 text-off-green" />
                      Even easier accessibility for learning
                    </li>
                  </ul>
                </div>
                {/* Cons */}
                <div className="p-4 my-12 text-md shadow-xl text-off-green">
                  <h3 className="text-off-green font-light mb-2 text-md">
                    Cons
                  </h3>
                  <ul>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineWarning className="mr-4 text-off-green" />
                      Style of learning the same as Youtube videos
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <AiOutlineWarning className="mr-4 text-off-green" />
                      Visually draining: little to no use of stimulating
                      graphics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="flex flex-col items-center gap-4 lg:sticky lg:top-4">
              <img
                className="w-full rounded-md"
                src={
                  "https://i.ytimg.com/vi/o29QtzBuSp4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_Gs5xEYh3wzJbqYSu4UpoLWIKJA"
                }
                alt={"Commanding Hands"}
              />
              <img
                className="w-full rounded-md"
                src={
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple62/v4/f2/6f/46/f26f4628-a59d-5557-bbc1-97476959ad7b/pr_source.png/1200x630wa.png"
                }
                alt={"BSL App"}
              />
              <img
                className="w-[20rem] rounded-md"
                src={
                  "https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/2b/77/dc/2b77dc4e-23bc-39a7-fada-c8e95ac5c210/pr_source.png/750x750bb.jpeg"
                }
                alt={"BSL App"}
              />
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
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-16">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <div className="-ml-12 -mt-12 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                  <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                    Ideation process
                  </p>
                  <h1 className="flex flex-row mt-2 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Brainstorming + Design
                    <span>
                      <FaBrain className="ml-2 text-off-green" />
                    </span>
                  </h1>
                  {/* Images */}
                  <div className="w-full flex flex-row lg:flex-col">
                    <CldImage
                      draggable="false"
                      width="700"
                      height="700"
                      className="rounded-md mb-2"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363186/Portfolio%20images/inHandy/handDesign_izb0qm.png"
                      }
                      alt={"Hand design"}
                    />
                    <CldImage
                      draggable="false"
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
          </div>

          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <CldImage
                  draggable="false"
                  width="1500"
                  height="700"
                  className="rounded-md mb-2"
                  preserveTransformations
                  src={
                    "https://res.cloudinary.com/dolduzhix/image/upload/v1712363117/Portfolio%20images/inHandy/Project_Plan_bqkldr.jpg"
                  }
                  alt={"Project plan"}
                />
                <p className="mt-6 text-xl leading-8 text-off-green">
                  In my analysis of existing applications/methods of learning
                  BSL, most existing applications lacked in:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <FaBrain className="mx-4 text-off-green" />
                    Interactivity - To maintain User interest whilst learning
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillSetting className="mx-4 text-off-green" />
                    Memory - User retention of the information being taught to
                    memory.
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillSetting className="mx-4 text-off-green" />
                    Cognitive Overload - Too much information given over a time
                    period.
                  </li>
                </ul>
                <p className="text-small italic leading-8 text-off-green mb-2">
                  <span className="text-off-green">Organisation</span> and{" "}
                  <span className="text-off-green">presentation</span> of this
                  information is important Studies have shown that students in a
                  classroom regardless of age benefit from a more engaging and
                  'fun' learning experience. Fun in learning allows an
                  individual to develop a love for learning, having a knock on
                  effect on their motivation levels.
                </p>
                <p className="text-small italic leading-8 text-off-green mb-2">
                  Growth Engineering mentions an example where the company
                  Volkswagen, as part of their Fun theory', turned a staircase
                  into a giant functioning piano keyboard. A recorded 66% more
                  people chose the piano stairs over the normal one. This study
                  is a prime example of how{" "}
                  <span className="text-off-green">fun</span>,{" "}
                  <span className="text-off-green">engaging</span> and{" "}
                  <span className="text-off-green">interactive </span>
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
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-24 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  Method I
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Contextual Learning
                </h1>
                <p className="mt-6 text-small italic leading-8 text-off-green">
                  Imagine Learning Sign Language through the use of imagery and
                  videos. Demonstrating the language being used in real world
                  scenarios.
                </p>
                <p className="mt-6 text-small italic leading-8 text-off-green">
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

                <p className="mt-6 text-small leading-8 text-off-green">
                  When learning and memorising the Japanese writing styles
                  Hiragana and Katakana. A popular method used to teach these
                  writing styles is known as{" "}
                  <span className="text-off-green">Visual Mnemonics</span>.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  This memory technique involves choosing a word or term that
                  you want to memorise and associating that word with an object
                  or character that you imagine sounds like the word you want to
                  memorise. Visual Mnemonics associate words with visual clues
                  and make them easier to memorise or learn.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  The use of Visual Mnemonics in teaching highlights the
                  importance of developing a visually stimulating learning
                  experience for the user in order for them to retain what they
                  have learnt as well as hold their interest.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  When it comes to learning Sign Language it is important to
                  consider the way in which the elements are designed. Designing
                  to simplify the process of making reasonable connections in
                  the language is key to developing a valuable learning
                  experience.
                </p>

                <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
                  Gamification
                </h1>
                <p className="mt-6 text-small italic leading-8 text-off-green">
                  Adopting certain game elements when it comes to e-learning
                  allows the user to learn effectively. Game elements that
                  provide this encouraging feedback and the way they are
                  rendered ultimately play a part in boosting the learning
                  experience.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  It's important in any learning context/situation to provide
                  feedback. How this is done can vary from specifically or a
                  combination of:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Levelling up
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Gathering of points
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" /> Unlocking
                    of new features
                  </li>
                </ul>
                <p className="mt-6 text-small leading-8 text-off-green">
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
                  Language + Movies <FaFilm className="text-off-green" />
                </h1>
                <CldImage
                  draggable="false"
                  width="700"
                  height="700"
                  className="rounded-md my-2"
                  preserveTransformations
                  src={
                    "https://res.cloudinary.com/dolduzhix/image/upload/v1712363123/Portfolio%20images/inHandy/screenshotnetflix_w0zggg.jpg"
                  }
                  alt={"Netflix Screenshot"}
                />
                <p className="mt-6 text-small italic leading-8 text-off-green">
                  Another example of how the use of a visual stimulus improves
                  the User learning experience is in foreign movies.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  Watching a foreign movie with subtitles is known as a good way
                  to pick up certain words or phrases in that foreign language.
                  Examples include the screenshot above taken from the TV series
                  'Lupin' which was originally filmed in French. Watching the
                  series on Netflix gives the option to watch in French with
                  English subtitles which is great for both English individuals
                  trying to learn French and French individuals trying to learn
                  English.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  Studies demonstrate that one of the main benefits of films in
                  a foreign language is the fact that it provides the most
                  authentic example of the language being used in a real-world
                  scenario. It exposes the natural expressions and
                  conversational cues hence placing the user in an environment
                  where information can be received and retained in a more
                  engaging manner.
                </p>

                <p className="mt-8 text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
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

                <p className="mt-6 text-small leading-8 text-off-green">
                  The popular language learning application,
                  <span className="text-off-green"> Duolingo</span> is the
                  perfect example of how teaching using game-design and game
                  principles is an effective way for a user to learn an entirely
                  new language.
                </p>
                <img
                  src={
                    "https://media.cntraveler.com/photos/5859aff8b9f6ae2472e32578/master/w_1169,h_586,c_limit/duolingo-cr-courtesy.jpg"
                  }
                  className="w-30 mt-2 rounded-lg"
                />
                <p className="mt-6 text-small leading-8 text-off-green">
                  The screenshot on above displays the formatting of a test like
                  question providing graphics that are also visually
                  stimulating. This keeps any user active and engaged throughout
                  the learning experience.
                </p>
                <p className="mt-6 text-small leading-8 text-off-green">
                  <b className="text-off-green">Feedback</b> on the User
                  progress can also be noticed at the top. This is incredibly
                  helpful in informing the user of exactly how much work they
                  are doing and can act as either a source of motivation or
                  discouragement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Sketching = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-off-green lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  Sketch prototyping, Storyboarding
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Lo-Fi Prototypes
                </h1>
                <div className="hidden lg:block">
                  <div>
                    <CldImage
                      draggable="false"
                      width="541"
                      height="1056"
                      className="rounded-md mb-2"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363243/Portfolio%20images/inHandy/pageDesign_qq0lxb.png"
                      }
                      alt={"Lofi-sketching"}
                    />
                    <p className="font-light mb-8">
                      To maintain the interest of the User the interface must
                      display interesting and captivating graphic design
                      elements. The image above is a sketch prototype of what
                      the loading screen would look like upon opening the
                      application. Unlike the existing applications that lack
                      this feature; InHandy would capture the users attention by
                      opening with a loading screen or a short animation. Both
                      the loading screen and/or animation would be used to
                      maximise awareness by displaying facts about d/Deaf
                      culture.
                    </p>
                  </div>
                  <div>
                    <CldImage
                      draggable="false"
                      width="541"
                      height="1056"
                      className="rounded-md mb-2"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363248/Portfolio%20images/inHandy/pageDesign2_ispkuf.png"
                      }
                      alt={"Lofi-sketching"}
                    />
                  </div>
                  <div>
                    <CldImage
                      draggable="false"
                      width="512"
                      height="917"
                      className="rounded-md mb-2"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363254/Portfolio%20images/inHandy/pageDesign3_ahcup3.png"
                      }
                      alt={"Lofi-sketching"}
                    />
                    <p className="font-light mb-8">
                      Based on research done, one of the best ways to learn or
                      pick up a new language is through seeing the language
                      being used in context. Exposing the conversational cues
                      would give the user a better understanding of when to use
                      a particular word of phrase. InHandy would do this by
                      having the user select the 'correct' response option in
                      order to progress in the animated short. This provides a
                      visually engaging way to learn as it places the user in a
                      situation as opposed to a professional behind a screen
                      repeating a sign.
                    </p>
                  </div>
                  <div>
                    <CldImage
                      draggable="false"
                      width="493"
                      height="800"
                      className="rounded-md mb-2"
                      preserveTransformations
                      src={
                        "https://res.cloudinary.com/dolduzhix/image/upload/v1712363260/Portfolio%20images/inHandy/pageDesign4_xh18of.png"
                      }
                      alt={"Lofi-sketching"}
                    />
                    <p className="font-light mb-8">
                      Inspired by the similar set up of the 'Duolingo' language
                      learning application, InHandy will use similar game-like
                      testing methods to keep the user engaged through the
                      learning experience. One of the in-app games InHandy would
                      provide is a test to determine the User knowledge of
                      British Sign Language. The interface would be programmed
                      to unlock access to the game only after the User has
                      completed the topic learning stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
            <CldImage
              draggable="false"
              width="1708"
              height="1056"
              className="mx-auto"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712363136/Portfolio%20images/inHandy/allPages_guarni.png"
              }
              alt={"Sketches of pages"}
            />{" "}
            <p className="block lg:hidden font-light my-4">
              To maintain the interest of the User the interface must display
              interesting and captivating graphic design elements. The image
              above is a sketch prototype of what the loading screen would look
              like upon opening the application. Unlike the existing
              applications that lack this feature; InHandy would capture the
              users attention by opening with a loading screen or a short
              animation. Both the loading screen and/or animation would be used
              to maximise awareness by displaying facts about d/Deaf culture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SketchingII = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-8 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-off-green lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  User Persona, Storyboarding
                </p>
                <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
                  User personas
                </h1>
                <p className="font-light mb-8">
                  By creating multiple personas, I aimed to acknowledge the
                  heterogeneity of my target audience. inHandy aims address the
                  diverse needs of different user groups and given more time I
                  would have created more personas representing even more
                  diverse demographics. Creating variations in factors such as
                  age, gender, occupation, or geographic location, as well as
                  psychographic factors like attitudes, values, and specific
                  lifestyles.
                </p>
                <div>
                  <CldImage
                    draggable="false"
                    width="1708"
                    height="1056"
                    className="mx-auto"
                    preserveTransformations
                    src={
                      "https://res.cloudinary.com/dolduzhix/image/upload/v1712363298/Portfolio%20images/inHandy/Persona1_qajog2.jpg"
                    }
                    alt={"Persona1"}
                  />
                  <CldImage
                    draggable="false"
                    width="1708"
                    height="1056"
                    className="mx-auto"
                    preserveTransformations
                    src={
                      "https://res.cloudinary.com/dolduzhix/image/upload/v1712363304/Portfolio%20images/inHandy/Persona2_clshlh.jpg"
                    }
                    alt={"Persona2"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
            <CldImage
              draggable="false"
              width="1708"
              height="1056"
              className="mx-auto"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712363130/Portfolio%20images/inHandy/StoryboardComics_wapwh7.jpg"
              }
              alt={"Storyboard"}
            />
            <div className="mt-8">
              <h1 className="text-5xl mb-2 font-light">Storyboard</h1>
              <p className="font-light mb-8">
                I envisioned two primary use cases for my intervention. The
                first involves a wearable physical product integrated with a
                digital gaming system. The user's motions would be tracked, and
                feedback provided through the game display and haptic feedback
                mechanisms. The second involved the use of a mobile application.
              </p>
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
      <div className="bg-off-white-2 text-off-green">
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
        <Analysis />
        <Design />
        <Method />
        <Sketching />
        <SketchingII />
      </div>
    </>
  );
}
