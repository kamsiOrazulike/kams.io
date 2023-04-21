import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <div className="dark:text-white dark:bg-slate-900 bg-gray-300 text-black">
        <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center"></div>
      </div>
    </>
  );
}
