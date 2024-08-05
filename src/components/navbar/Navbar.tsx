import Link from "next/link";
import Logo from '/public/assets/Company.svg'
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex font-bold justify-between px-3 sm:px-10 mb-12">
            <Image src={Logo} alt="Swift CRM" className="w-20 sm:w-auto"/>
            <div className="flex gap-4">
                <Link href={"/auth/signin"}><button className="px-4 sm:px-8 py-2 text-xs sm:text-base border border-violet-500 rounded-md" >Sign In</button></Link>
                <Link href={"/auth/signup"}><button className="px-4 sm:px-8 py-2 text-xs sm:text-base bg-violet-500 text-white rounded-md">Sign Up</button></Link>
            </div>
        </div>
    )
}