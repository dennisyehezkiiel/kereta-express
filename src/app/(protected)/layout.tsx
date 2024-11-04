import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/navigation";
import UserLog from "@/components/userLog";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Kereta Express",
  description: "Pusat pembelian tiket kereta api",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="bg-slate-50 w-full min-h-screen space-y-12 pb-12">
          <Navigation />
          <UserLog />
          {children}
        </div>
      </body>
    </html>
  );
}
