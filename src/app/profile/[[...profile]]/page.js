import { currentUser } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default async function ProfilePage() {
  const user = await currentUser();
  if (!user) {
    return <div>You need to sign in to view your profile.</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Link
        className="mb-4 flex items-center text-blue-600 hover:underline"
        href="/dashboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <div className="mb-6">
        <p className="text-lg">
          Hello, <strong>{user.fullName || user.username || "User"}</strong>!
        </p>
        <p className="text-gray-600">
          Email: {user.emailAddresses[0]?.emailAddress}
        </p>
      </div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
}
