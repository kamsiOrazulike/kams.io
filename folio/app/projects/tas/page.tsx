"use client";
import Head from "next/head";
import { CldImage } from "next-cloudinary";
import { AiOutlineCheck } from "react-icons/ai";
import { FaBlenderPhone, FaFigma, FaPinterestP } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-off-white px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-off-green lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-light leading-7 text-off-green">
                  Food snack eCommerce store, London
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  The Afrikan Store
                </h1>
                <p className="mt-6 text-xl leading-8 text-off-green/70">
                  Delivered right to your door. The Afrikan Store is a company
                  on a mission to make ethnic food more accessible throughout
                  the United Kingdom and Northern Ireland. Specifically African
                  and Caribbean traditional snacks.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <CldImage
              draggable="false"
              width="1050"
              height="900"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712770337/Portfolio%20images/TheAfrikanStore/Screenshot_2024-04-10_at_18.21.22_c8bnro.png"
              }
              alt={"Prototype design"}
            />
            <CldImage
              draggable="false"
              width="1050"
              height="900"
              preserveTransformations
              src={
                "https://res.cloudinary.com/dolduzhix/image/upload/v1712770338/Portfolio%20images/TheAfrikanStore/Screenshot_2024-04-10_at_18.21.33_g72j1y.png"
              }
              alt={"Prototype design II"}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Objectives
                </h1>
                <p className="text-off-green">
                  The client needed package designs for their new line of
                  products including:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-off-green/70">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Large snack box packaging (As seen on the right)
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-off-green" />
                    Snack labels, sleeves and stickers for smaller packaging
                  </li>
                </ul>

                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Roles
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-off-green/70"
                    >
                      <li>Product Design</li>
                      <li>Graphic Design</li>
                      <li>3D Modelling</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Tools
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-off-green/70"
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
                        <FaBlenderPhone className="mr-4" />
                        Blender
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  className="text-sm py-2 mt-8 mb-2 flex flex-row justify-center items-center border border-off-green hover:bg-off-green hover:text-off-white transition-all duration mx-auto"
                  href="https://theafrikanstore.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out client website
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
      <div className="bg-off-white-2 text-off-green">
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
