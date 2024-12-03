import Link from "next/link";
import { Frown } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <Frown className="h-16 w-16 text-gray-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <span className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}
