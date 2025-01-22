"use client";
import Head from "next/head";
import {
  FaFigma,
  FaReact,
  FaFileExcel,
  FaGitAlt,
  FaCogs,
  FaInstagram,
} from "react-icons/fa";
import { CldImage } from "next-cloudinary";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-white inline-block bg-[#fff]/10 border border-[#fff]/20 px-3 py-1 rounded mb-4 uppercase text-xs">
                  IDE Module: Cyberphysical Systems
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Introduction
                </h1>
                <p className="mt-6 text-xl leading-8 text-off-green/60">
                  Built around the idea of playful nostalgia; The mission of my
                  Cyperphysical Systems project revolves around combining the
                  charm of traditional shadow puppetry with cutting-edge
                  innovations.
                </p>
                <p className="mt-6 text-xl leading-8 text-off-green/60">
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
            <div className="rounded-md">
              <CldImage
                draggable="false"
                width="1040"
                height="1000"
                className="rounded-md w-[56rem]"
                preserveTransformations
                src={
                  "https://res.cloudinary.com/dolduzhix/image/upload/v1712363336/Portfolio%20images/IDE/arduinome3_rdp3py.jpg"
                }
                alt={"Meet the team"}
              />
            </div>
          </div>
          <div className="text-off-green lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Roles
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-off-green/60"
                    >
                      <li>Electronics</li>
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
                      className="mt-8 space-y-8 text-off-green/60"
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
                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-off-green hover:bg-off-green hover:text-off-white transition-all duration mx-auto"
                  href="https://drive.google.com/file/d/1IK4dLqSMh1khLxkzpLCPW2blz3Ci3qxG/view"
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

export default function Genesis() {
  return (
    <>
      <Head>
        <title>The First Theatre</title>
      </Head>
      <div className="bg-off-white-2 text-off-green">
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
