import Navbar from "@/components/navbar";
import DashboardContent from "@/components/dashboard-content";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <SignedIn>
        <Navbar />
        <DashboardContent />
      </SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold">
            You need to sign in to access the dashboard
          </h1>
        </div>
      </SignedOut>
    </div>
  );
}
