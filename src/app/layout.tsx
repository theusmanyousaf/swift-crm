import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import bg from '/public/assets/Topology-1.png'
import SideNav from "@/components/sidenav/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift CRM",
  description: "Swift Customer Relationship Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <SideNav />
        {children}
        <div className="bg-custom-bg h-[1190px] w-[940px] bg-fixed">

        </div>
        <Footer />
      </body>
    </html>
  );
}
