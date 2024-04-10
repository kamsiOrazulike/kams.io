import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-audit bg-cover bg-center bg-no-repeat h-screen">
        <div className="min-h-screen flex flex-col items-center text-center justify-center bg-black/60">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            Woah there! This page is currently in the works
          </h2>
          <div className="w-full mt-8 flex flex-row justify-center mx-auto md:text-md">
            <Link
              href="/"
              className="text-lg px-4 py-2 text-black bg-white hover:scale-105 transition-all duration-150"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
