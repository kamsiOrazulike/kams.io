import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-404bg bg-cover bg-center bg-no-repeat h-screen">
        <div className="min-h-screen flex flex-col items-center text-center justify-center bg-black/60">
          <h2 className="text-4xl font-bold mb-4 text-gray-200">
            Woah there! This page is currently in the works
          </h2>
          <p className="text-gray-300 mb-8">
            You now have to choose :)
          </p>
          <div className="w-[80%] md:w-1/3 flex flex-row justify-between text-xs md:text-md">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-white bg-red-400 hover:bg-red-600 hover:scale-105 transition-all duration-150"
            >
              Return Home
            </Link>
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-white bg-blue-400 hover:bg-blue-600 hover:scale-105 transition-all duration-150"
            >
              Head to projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
