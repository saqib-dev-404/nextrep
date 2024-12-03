import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">NextRep</h1>
        <div className="space-x-4 items-center flex">
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/profile">
            <span>Profile</span>
          </Link>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
