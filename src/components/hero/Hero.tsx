import { auth } from "@/auth"
import Avatar from "/public/assets/avatar.png"
import Image from "next/image"
import { BsSearch } from "react-icons/bs"

export default async function Hero() {
    const session = await auth();
    return (
        <div className="flex items-center justify-between mt-[17px] mb-5 lg:mt-[31px] lg:mb-10 xl:mt-10 xl:mb-[60px] ml-[10.28%] sm:ml-0">
            <div className="flex items-center sm:gap-3 gap-5 lg:gap-5 xl:gap-6 w-auto">
                {session?.user?.image && <Image src={session?.user?.image || Avatar} alt="Avatar" width={500} height={500} className="xl:w-[89px] xl:h-[89px] lg:w-20 lg:h-20 w-[61px] h-[61px] rounded-full" />}
                <div>
                    <h1 className="font-bold font-albert-sans text-base lg:text-xl xl:text-2xl">Welcome Back, <span className="text-purple-500">{session?.user?.name}</span></h1>
                    <p className="text-gray-500 font-semibold text-xs lg:text-sm xl:text-base">Here are you monthly store updates.</p>
                </div>
            </div>
            <div className="md:flex hidden">
                <input id="search-hero" type="text" placeholder="Type here" className="border border-grey-50 max-w-32  lg:max-w-[201px] md:px-3 lg:py-1.5 rounded-l-md" /> <button className="bg-purple-500 text-sm lg:text-base text-white flex items-center justify-evenly w-auto xl:w-[99px] px-3 py-1.5 rounded-r-md"><BsSearch />Search</button>
            </div>
        </div>
    )
}
