import Link from "next/link";
import Logo from '/public/assets/Company.svg'
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex sm:flex-col h-full font-bold sm:w-36 xl:w-[20%] sm:px-10">
            <Image src={Logo} alt="Swift CRM" className="sm:mb-12"/>
            <div className="flex gap-4">
                <div><Link href={"/auth/signin"}><button className="px-4 py-2 text-xs sm:text-base border border-violet-500 rounded-md">Sign In</button></Link></div>
                <Link href={"/auth/signup"}><button className="px-4 py-2 text-xs sm:text-base bg-violet-400 text-white rounded-md">Sign Up</button></Link>
            </div>
        </div>
    )
}