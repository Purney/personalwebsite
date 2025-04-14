import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className=" mb-6">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="text-blue-500 hover:underline text-lg"
          >
            Go back to the homepage
          </Link>
        </div>
      );
}