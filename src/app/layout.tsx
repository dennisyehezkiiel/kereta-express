import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "toastify-js/src/toastify.css"

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
