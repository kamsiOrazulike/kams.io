import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="text-white w-full h-screen bg-slate-950">
        <div className="min-h-screen flex flex-col items-center text-center justify-center bg-black/60">
          <h2 className="text-woes text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            Such a page doesn't exist
          </h2>
          <h2 className="text-woes text-md md:text-lg font-light mb-4 text-gray-200">
            ...yet?
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
