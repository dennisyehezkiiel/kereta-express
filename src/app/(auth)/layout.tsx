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
    <div className="flex justify-center bg-[url('/public-background.jpeg')] bg-no-repeat bg-cover bg-center w-full min-h-screen">
      {children}
    </div>
  );
}
