"use client"

import Link from "next/link";

export default function Custom500() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
          <p className=" mb-6">
            Oops! Something went wrong on our end.
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