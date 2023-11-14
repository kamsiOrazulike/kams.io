"use client";
import Head from "next/head";
import { AiOutlineCheck } from "react-icons/ai";
import { FaFigma, FaCss3, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import ArrowToTop from "../../components/ArrowToTop";
import GraphicDesignSection from "../../components/Sections";

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
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  Food Delivery App for Genesis Restaurants
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Introduction
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Genesis Restaurants wish to offer customers a Food Delivery
                  application as a method to increment sales and generate
                  revenue.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  The company has a website for orders, but wants to expand to
                  e-commerce for more order options and building customer
                  loyalty to the brand.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[32rem] max-w-none rounded-xl sm:w-[48rem]"
              src="/static/imgs/GenesisMockup.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Goal
                </h1>
                <p className="text-gray-700 dark:text-gray-400">
                  The user experience should be designed to keep customers
                  entertained and engaged with the brand. This should also
                  influence the features in the product's user interface.
                </p>
                <p className="text-gray-700 dark:text-gray-400 my-4">
                  Some of the ways in which this can be done is through the
                  implementation of:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 dark:text-gray-300">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />
                    Loyalty programs and rewards
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />
                    Personalisation
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-red-600 dark:text-red-400" />{" "}
                    A streamlined ordering process
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
                      <li>UX Writer</li>
                      <li>UI Designer</li>
                      <li>Graphic Designer</li>
                      <li>User Researcher</li>
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
                        <FaReact className="mr-4" />
                        React/Native
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaJsSquare className="mr-4" />
                        JavaScript
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <DiIllustrator className="mr-4" />
                        Adobe Illustrator
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-red-500 hover:bg-red-500 transition-all duration mx-auto rounded-full"
                  href="https://www.figma.com/proto/IUecsg1rFqXbgknkNw6CDr/Genesis-QSR-Application?page-id=833%3A913&type=design&node-id=1060-12052&viewport=311%2C393%2C0.11&t=fTXaRcM4l2FCpmj7-1&scaling=scale-down&starting-point-node-id=833%3A936&mode=design"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out - All graphics designed by me!
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
        <title>KO Graphics</title>
      </Head>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-repeat bg-4 dark:text-white text-black">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] mx-auto transition-all duration-300"
          >
            KO Studios
          </h1>
        </div>
        <Overview />

        <GraphicDesignSection
          imageSrc="./static/imgs/inHandyMockup.png"
          header="Section 1 Header"
          subheader="Section 1 Subheader"
          message="Your message for section 1 goes here."
        />
      </div>
    </>
  );
}
