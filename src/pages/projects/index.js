import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="bg-table-dark bg-fixed bg-top bg-cover bg-no-repeat text-black dark:text-white">
        <div className="max-w-[800px] w-full h-screen m-auto text-center flex flex-row justify-start">
          <div className="w-full flex flex-row my-6">
            <h1 className="font-bold text-4xl tracking-wide m-1 mx-auto">MY PROJECTS</h1>
          </div>
        </div>
      </div>
    </>
  );
}
