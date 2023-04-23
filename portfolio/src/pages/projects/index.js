import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="dark:text-white dark:bg-slate-900 bg-gray-300 text-black">
        <div className="max-w-[800px] w-full m-auto text-center flex flex-row justify-start">
          <div className="flex flex-row my-10">
            <h1 className="font-bold text-3xl capitalize">My projects</h1>
          </div>
        </div>
      </div>
    </>
  );
}
