import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/sidenav/SideNav";
import Providers from "@/store/Provider";

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
            <body className={inter.className}>
                <Providers>
                    <div className="sm:flex bg-no-repeat bg-gray-50 bg-custom-bg sm:px-[72px]">
                        <SideNav />
                        <div className="w-full pl-[43px] sm:pl-0">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
