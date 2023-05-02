"use client";
import Head from "next/head";

export default function Genesis() {
  return (
    <>
      <Head>
        <title>Genesis</title>
      </Head>
      <div className="bg-gray-300 dark:bg-gray-900 dark:text-white text-black">
        <div className="max-w-[900px] w-full h-screen mx-auto text-center flex flex-row justify-center align-middle">
          <h1 className="w-[80%] md:w-[50%] sm:w-[50%] text-3xl mt-8 mx-auto">
            Genesis Food Delivery Application
          </h1>
        </div>
      </div>
    </>
  );
}
