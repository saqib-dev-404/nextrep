// app/page.js
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard"); // Navigate to the dashboard if the user is authenticated
}
