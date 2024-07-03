import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/sidenav/SideNav";
import Providers from "@/store/provider";

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
        <Providers>
          <SideNav />
          {children}
        </Providers>
        <div className="bg-custom-bg h-[1190px] w-[940px] bg-fixed"></div>
        <Footer />
      </body>
    </html>
  );
}
