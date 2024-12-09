import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/navigation";
import UserLog from "@/components/userLog";

export const metadata: Metadata = {
  title: "Kereta Express",
  description: "Pusat pembelian tiket kereta api",
};

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-50 w-full min-h-screen space-y-12 pb-12">
      <Navigation />
      <UserLog />
      {children}
    </div>
  );
}
