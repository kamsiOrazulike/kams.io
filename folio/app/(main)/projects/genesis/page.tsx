"use client";
import Head from "next/head";
import { AiOutlineCheck } from "react-icons/ai";
import {
  FaFigma,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaFileExcel,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiMiro, SiTailwindcss } from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { CldImage } from "next-cloudinary";

const GenesisFoodDeliveryApp = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  UI Design Project
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Food Delivery Mobile App
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-200 font-thin">
                  Genesis Restaurants wish to offer customers a Food Delivery
                  application as a method to increase sales and generate revenue
                  for the business.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-200 font-thin">
                  The company has a website for orders, but wants to expand to
                  e-commerce for more order options and building customer
                  loyalty to the brand.
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
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712362998/Portfolio%20images/UXUI/GenesisMockup_cuy2vz.png"
              }
              alt={"Genesis Prototype"}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Goal
                </h1>
                <p className="text-gray-200 font-thin">
                  The application should be designed to keep customers engaged
                  with the brand. This focus should influence the features that
                  go into the product's UI Design.
                </p>
                <p className="text-gray-200 font-thin my-4">
                  Some of the ways in which this can be done is through the
                  implementation of:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />
                    Loyalty programs and rewards
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />{" "}
                    A streamlined ordering process with limited clicks
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />
                    Real time order tracking
                  </li>
                </ul>
                <p>
                  By focusing on these areas, the product can enhance customer
                  satisfaction and retention, leading to increased revenue and
                  growth.
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
                      <li>UI Designer</li>
                      <li>Graphic Designer</li>
                      <li>Prototyping</li>
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
                        <FaFigma className="mr-4" />
                        Figma
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <SiMiro className="mr-4" />
                        Miro
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <DiIllustrator className="mr-4" />
                        Adobe Illustrator
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://www.figma.com/proto/IUecsg1rFqXbgknkNw6CDr/Genesis-QSR-Application?page-id=833%3A913&type=design&node-id=1060-12052&viewport=311%2C393%2C0.11&t=fTXaRcM4l2FCpmj7-1&scaling=scale-down&starting-point-node-id=833%3A936&mode=design"
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

const GenHRM = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  Full Stack Project
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Human Resources Management System
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-200 font-thin">
                  GenHRM is a Human Resources Management system I designed to
                  replace the outdated system that was being used.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <CldImage
              width="1000"
              height="900"
              className="rounded-md mb-2"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712363830/Portfolio%20images/Genesis/login_h027ji.png"
              }
              alt={"GenHRM Prototype"}
            />
            <CldImage
              width="1000"
              height="900"
              className="rounded-md"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712363823/Portfolio%20images/Genesis/annualLeave2_sgybtb.png"
              }
              alt={"GenHRM Ann_leave"}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Achievements
                </h1>
                <p className="text-gray-200 font-thin">
                  <span className="text-off-green">Cleaning of rogue data:</span>{" "}
                  Due to mishandling over time, the data had become inconsistent
                  and inaccurate. There were instances where former employees,
                  who were no longer with the company, remained in the system.
                  It was essential to clean up the data before proceeding with
                  the development of the new system.
                </p>
                <p className="text-gray-200 font-thin my-4">
                  <span className="text-off-green">
                    An improved User Experience:
                  </span>{" "}
                  The system had to be easy to navigate through for all users.
                  Meaning we had to make the most important features easy to
                  find.
                </p>
                <p className="text-gray-200 font-thin my-4">
                  <span className="text-off-green">
                    Project Scalability + Reusable components:
                  </span>{" "}
                  Moving forward it is likely that we would establish an
                  ecosystem of in-house applications used by all staff within
                  the company. It was important that we programmed with this in
                  mind.
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
                      <li>Scrum Master</li>
                      <li>Full stack Developer</li>
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
                        <FaNodeJs className="mr-4" />
                        NodeJS
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaReact className="mr-4" />
                        React (NextJS)
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <SiTailwindcss className="mr-4" />
                        Tailwind CSS
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaGitAlt className="mr-4" />
                        GitHub
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFileExcel className="mr-4" />
                        Excel
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  className="text-sm py-2 mt-8 mb-2 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://genhrm.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out web application (Login required)
                </a>
                <a
                  className="text-sm py-2 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://github.com/uppercase-hussein/GenHRM-FE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out github repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GenesisGOAL = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  Full Stack Project
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  The GOAL platform
                </h1>

                <p className="mt-6 text-xl leading-8 text-gray-200 font-thin">
                  After conducting initial surveys targeted at employees within
                  the company I developed and implemented the Genesis GOAL
                  platform. A product developed based on insights gathered
                  durinng the analysis of responses to an employee experience
                  and satisfaction survey I created. <br />
                  <br /> The GOAL platform is a Single Page Application aimed at
                  bolstering business performance by getting each restaurant
                  outlet to be a part of a league where employees can gain
                  bonuses based on the average monthly sales.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <CldImage
              width="1000"
              height="900"
              className="rounded-md mb-4"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712368066/Portfolio%20images/Genesis/goalfe_fgazms.png"
              }
              alt={"GOAL"}
            />
            <CldImage
              width="1000"
              height="900"
              className="rounded-md"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712529888/Portfolio%20images/Genesis/GOALCode_xavnzy.png"
              }
              alt={"GOAL"}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  How it works
                </h1>
                <p className="text-gray-200 font-thin">
                  <span className="text-off-green font-bold">
                    Uploading of monthly sales:
                  </span>{" "}
                  At the end of each calendar month, the regional manager
                  receives a sales report from each of the restaurant outlets.
                  These reports have to be uploaded to the platform by the
                  regional manager matching each one to its corresponding
                  outlet. In the application this is uploaded to a server
                  endpoint using a POST request with Axios. If the request is
                  successful, the data is stored on the server and now be used.
                </p>
                <p className="text-gray-200 font-thin my-4">
                  <span className="text-off-green font-bold">
                    Point conversion:
                  </span>{" "}
                  Within the code is a function that takes in a 'sales' figure
                  and divides it by a constant value we called a
                  'salesToPointMargin'. We use this to establish the points for
                  each team (Restaurant outlet).
                </p>
                <p className="text-gray-200 font-thin my-4">
                  <span className="text-off-green font-bold">
                    Accessibility and Bonuses:
                  </span>{" "}
                  The GOAL platform is available to view by both staff and
                  frontline employees. Each new season there will be rewards for
                  the top 3 restaurant outlets in their respective divisions.
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
                      <li>Fullstack Developer</li>
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
                        <FaReact className="mr-4" />
                        TypeScript
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaReact className="mr-4" />
                        React + Nextjs
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaGitAlt className="mr-4" />
                        GitHub
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-white hover:bg-white hover:text-black transition-all duration mx-auto"
                  href="https://goal2023.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out web application (Login required)
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
        <title>Genesis</title>
      </Head>
      <div className="bg-off-white-2 text-off-green">
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-col justify-center align-middle">
          <p id="top" className="mt-16 text-md text-off-green/70 font-light">
            A range of products I developed during my time working at Genesis
            group, Nigeria <br />
            Genesis Group is a Nigerian conglomorate in the Hospitality and
            Entertainment business.
          </p>
        </div>
        <GenesisFoodDeliveryApp />
        <GenesisGOAL />
        <GenHRM />
      </div>
    </>
  );
}
