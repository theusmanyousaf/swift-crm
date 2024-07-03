'use client'
import Image from "next/image"
import Logo from '/public/assets/Company.svg'
import { RxDashboard,RxCross1 } from "react-icons/rx";
import { FiSettings, FiMenu } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { BsPeople, BsCart2, BsBarChartLine, BsBell, BsFileEarmarkRuled, BsInfoCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleNav } from "@/store/slices/navSlice";

export default function SideNav() {

    const menuOpen = useSelector((state: RootState) => state.nav.menuOpen);
    const dispatch: AppDispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleNav());
    };

    return (
        <div className="md:ml-[72px] md:mt-[22px] h-[550px] md:h-[752px] w-full md:w-[220px] bg-white shadow-xl rounded-md absolute px-4 py-8">
            <div className="flex justify-between">
                <div className="pb-8 md:pl-4 md:text-left">
                    <Image src={Logo} alt="SwiftCRM" />
                </div>
                <div className="md:hidden block">
                    {/* <button className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md"><FiMenu className="text-white text-3xl" /></button> */}
                    <button className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md border border-blue-500"><RxCross1 className="text-white" /></button>
                </div>
            </div>
            <nav>
                <div className="hidden md:block py-2 text-xs text-gray-500 font-semibold mb-4">GENERAL</div>
                <div className="flex flex-col md:gap-4">
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
                <div className="hidden md:block py-2 text-xs text-gray-500 font-semibold mb-4 mt-8">SUPPORT</div>
                <div className="flex flex-col md:gap-4">
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
            <div className="md:pt-8">
                <a href="/" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md">
                    <TbLogout2 className="mr-3" />
                    Log Out
                </a>
            </div>
        </div>
    )
}
