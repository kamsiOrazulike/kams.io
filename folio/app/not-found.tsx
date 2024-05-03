import Link from "next/link";
import "../public/static/css/all.css";

export default function NotFound() {
  return (
    <>
      <div className="text-white w-full h-screen bg-[#46443d]">
        <div className="min-h-screen flex flex-col items-center text-center justify-center bg-black/60">
          <h2 className="text-woes text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            If you are reading this, you're on a page that doesn't exist yet
          </h2>

          <div className="w-full mt-8 flex flex-row justify-center mx-auto md:text-md">
            <Link
              href="/"
              className="text-lg px-4 py-2 text-black font-thin bg-white hover:scale-105 transition-all duration-150"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
