import type { Metadata } from "next";
import "../../styles/globals.css";
import Footer from "@/components/footer/Footer";
import SideNav from "@/components/sidenav/SideNav";
import Providers from "@/store/Provider";
import { FaUserSlash } from "react-icons/fa6";
import { auth } from "@/auth"

export const metadata: Metadata = {
    title: "Swift CRM",
    description: "A Swift Customer Relationship Management Application",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth()

    if (!session) return (
        <div className="h-screen w-screen flex items-center justify-center text-5xl gap-4">
            <FaUserSlash />
            <div className="font-semibold">| Not Authenticated</div>
        </div>
    )

    return (
        <Providers>
            <div className="sm:flex bg-no-repeat bg-gray-50 bg-custom-bg sm:px-[5%]">
                <SideNav />
                <div className="w-full pl-[43px] sm:pl-0">
                    {children}
                </div>
            </div>
            <Footer />
        </Providers>
    );
}
