export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-700 mb-6">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="text-blue-500 hover:underline text-lg"
          >
            Go back to the homepage
          </a>
        </div>
      );
}