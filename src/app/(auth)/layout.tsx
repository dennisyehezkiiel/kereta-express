import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/navigation";
import UserLog from "@/components/userLog";

export const metadata: Metadata = {
  title: "Kereta Express",
  description: "Pusat pembelian tiket kereta api",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center bg-blue-100 w-full min-h-screen">
      {children}
    </div>
  );
}
