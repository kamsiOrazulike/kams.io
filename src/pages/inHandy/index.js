"use client";
import Head from "next/head";

export default function InHandy() {
  return (
    <>
      <Head>
        <title>InHandy</title>
      </Head>
      <div className="bg-inhandy-img bg-cover bg-no-repeat dark:text-white text-black">
        <div className="max-w-[900px] w-full h-screen mx-auto text-center flex flex-row justify-center align-middle">
          <h1 className="text-3xl mt-8 mx-auto"> inHandy </h1>
        </div>
      </div>
    </>
  );
}
