import type { Metadata } from "next";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Albert_Sans, Barlow } from 'next/font/google'

const albertSans = Albert_Sans({
  subsets: ['latin'], // Specify the subset if needed
  variable: '--font-albert-sans', // Optional: define a CSS variable for the font
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: "400"
})

export const metadata: Metadata = {
  title: "Swift CRM",
  description: "A Swift Customer Relationship Management Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body  className={`${albertSans.variable} ${barlow.variable} bg-gray-50`}>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
