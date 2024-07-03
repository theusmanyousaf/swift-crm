import Avatar from "/public/assets/avatar.png"
import Image from "next/image"
import { BsSearch } from "react-icons/bs"

export default function Hero() {
    return (
        <div className="flex justify-between items-center md:w-[854px] mt-[17px] md:mt[31px] md:mb-10 xl:w-[1048px] xl:mt-10 xl:mb-[60px] ml-7">
            <div className="flex items-center justify-between w-[475px]">
                <Image src={Avatar} alt="Avatar" width={89} height={89} className="xl:w-[89px] xl:h-[89px] md:w-20 md:h-20 w-[61px] h-[61px]" />
                <div>
                    <h1 className="font-bold text-base md:text-xl xl:text-2xl">Welcome Back, <span className="text-purple-500">Sophia Chester</span></h1>
                    <p className="text-gray-500 text-xs md:text-sm xl:text-base">Here are you monthly store updates.</p>
                </div>
            </div>
            <div className="sm:flex hidden">
                <input id="search" type="text" placeholder="Type here" className="border border-grey-50 px-3 py-1.5 rounded-l-md" /> <button className="bg-purple-500 text-white flex items-center justify-evenly w-[99px] px-3 py-1.5 rounded-r-md"><BsSearch />Search</button>
            </div>
        </div>
    )
}
