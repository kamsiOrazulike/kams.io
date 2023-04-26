import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="bg-gray-300 dark:bg-gray-800 bg-fixed bg-top bg-cover bg-no-repeat text-white dark:text-white">
        <div className="max-w-[800px] w-full h-screen m-auto text-center flex flex-row justify-start">
          <div className="flex flex-row my-6">
            <h1 className="font-bold text-4xl tracking-wide m-1">MY PROJECTS</h1>
          </div>
        </div>
      </div>
    </>
  );
}
