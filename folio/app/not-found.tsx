import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-4 text-gray-200">404 - Not Found</h2>
      <p className="text-gray-400 mb-8">
        Sorry, the requested page is still in the works! Bear with me :)
      </p>
      <Link href="/" className="rounded-full px-4 py-2 text-white bg-blue-400 hover:bg-blue-500">
        Return Home
      </Link>
    </div>
  );
}
