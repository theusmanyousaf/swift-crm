'use client'
import Image from "next/image"
import Logo from '/public/assets/Company.svg'
import { RxDashboard, RxCross1 } from "react-icons/rx";
import { FiSettings, FiMenu } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { BsPeople, BsCart2, BsBarChartLine, BsBell, BsFileEarmarkRuled, BsInfoCircle, BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleNav } from "@/store/slices/navSlice";

export default function SideNav() {

    const menuOpen = useSelector((state: RootState) => state.nav.menuOpen);
    const dispatch: AppDispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleNav());
        console.log(menuOpen)
    };

    return (
        <div className="sm:ml-[72px] sm:mt-[22px] h-auto sm:h-[752px] w-full sm:w-[220px] bg-white shadow-xl rounded-md sm:px-4 sm:py-8">
            <div className="flex justify-between items-center py-2 sm:py-0 sm:px-0 px-11">
                <div className="sm:mb-8 py-[5px] sm:py-0 pr-4 sm:pr-0 sm:px-4 sm:text-left">
                    <a href="/dashboard"><Image src={Logo} alt="SwiftCRM" /></a>
                </div>
                <div className="sm:hidden block">
                    {
                        menuOpen
                            ? <button onClick={handleMenuClick} className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md border border-blue-500"><RxCross1 className="text-white" /></button>
                            : <button onClick={handleMenuClick} className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md"><FiMenu className="text-white text-3xl" /></button>
                    }
                </div>
           </div>
            <div className={`absolute sm:static z-[10] bg-white w-full sm:w-auto sm:opacity-100 sm:top-auto ${menuOpen ? "opacity-100"  : "top-[-1000px] opacity-0"}`}>
                <nav className="ml-3 sm:ml-0 max-w-[351px]">
                    <div className="hidden sm:block py-2 text-xs text-gray-500 font-semibold mb-4">GENERAL</div>
                    <div className="flex flex-col sm:gap-4 gap-2">
                        <div>
                            <a href="/dashboard" className="flex items-center py-2 px-4 bg-purple-100 text-purple-600 hover:text-purple-600 rounded-md">
                                <RxDashboard className="mr-3" />
                                Dashboard
                            </a>
                        </div>
                        <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                            <BsBell className="mr-3" />
                            Notifications
                        </div>
                        <div>
                            <a href="/customers" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                                <BsPeople className="mr-3" />
                                Customers
                            </a>
                        </div>
                        <div>
                            <a href="/order-overview" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                                <BsCart2 className="mr-3" />
                                Order Overview
                            </a>
                        </div>
                        <div>
                            <a href="/analytics" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                                <BsBarChartLine className="mr-3" />
                                Analytics
                            </a>
                        </div>
                        <div>
                            <a href="/documents" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                                <BsFileEarmarkRuled className="mr-3" />
                                Documents
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block py-2 text-xs text-gray-500 font-semibold mb-4 mt-8">SUPPORT</div>
                    <div className="flex flex-col sm:gap-4 gap-2">
                        <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                            <BsInfoCircle className="mr-3" />
                            Help
                        </div>
                        <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                            <FiSettings className="mr-3" />
                            Settings
                        </div>
                    </div>
                </nav>
                <div className="sm:pt-8 pt-2 ml-3 sm:ml-0 max-w-[351px]">
                    <a href="/" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                        <TbLogout2 className="mr-3" />
                        Log Out
                    </a>
                </div>
                <div className="flex justify-between mt-6 sm:hidden ml-3 sm:ml-0 mb-2 max-w-[351px]">
                    <input id="search" type="text" placeholder="Type here" className="h-[30px] border border-grey-50 rounded-md pl-2 min-w-40" /> <button className="bg-purple-500 text-white flex items-center justify-evenly w-24 h-7 rounded-md"><BsSearch />Search</button>
                </div>
            </div>
        </div>
    )
}
