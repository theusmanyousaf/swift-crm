'use client'
import { useState } from "react";
import Image from "next/image";
import Logo from '/public/assets/Company.svg';
import Link from "next/link";
import { RxDashboard, RxCross1 } from "react-icons/rx";
import { FiSettings, FiMenu } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { BsPeople, BsCart2, BsBarChartLine, BsBell, BsFileEarmarkRuled, BsInfoCircle, BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toggleNav } from "@/store/slices/navSlice";
import { logout } from "../../../actions/auth";

export default function SideNav() {
    const menuOpen = useSelector((state: RootState) => state.nav.menuOpen);
    const dispatch: AppDispatch = useDispatch();

    const [activeLink, setActiveLink] = useState<string>('/dashboard');

    const handleMenuClick = () => {
        dispatch(toggleNav());
    };

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <div className="xl:mt-[22px] lg:mt-[21px] h-auto sm:h-[752px] sm:min-w-[220px] sm:max-w-[220px] bg-white sm:shadow-xl rounded-md sm:px-4 sm:py-8 mb-5">
            <div className="flex justify-between items-center py-2 sm:py-0 sm:px-0 px-11">
                <div className="sm:mb-8 py-[5px] sm:py-0 pr-4 sm:pr-0 sm:px-4 sm:text-left">
                    <Link href="/dashboard"><Image src={Logo} alt="SwiftCRM" /></Link>
                </div>
                <div className="sm:hidden block">
                    {
                        menuOpen
                            ? <button onClick={handleMenuClick} className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md border border-blue-500"><RxCross1 className="text-white" /></button>
                            : <button onClick={handleMenuClick} className="flex bg-purple-600 w-14 h-10 items-center justify-center rounded-md"><FiMenu className="text-white text-3xl" /></button>
                    }
                </div>
            </div>
            <div className={`absolute sm:static z-[10] bg-white w-full sm:w-auto sm:opacity-100 sm:top-auto ${menuOpen ? "opacity-100" : "top-[-1000px] opacity-0"}`}>
                <nav className="ml-3 sm:ml-0 max-w-[351px]">
                    <div className="hidden sm:block py-2 text-xs text-gray-500 font-albert-sans font-bold mb-4">GENERAL</div>
                    <div className="flex flex-col sm:gap-4 gap-2">
                        <div>
                            <Link href="/dashboard">
                                <div
                                    onClick={() => handleLinkClick('/dashboard')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/dashboard' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <RxDashboard className="mr-2" />
                                    Dashboard
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/notifications">
                                <div
                                    onClick={() => handleLinkClick('/notifications')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/notifications' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsBell className="mr-2" />
                                    Notifications
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/customers">
                                <div
                                    onClick={() => handleLinkClick('/customers')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/customers' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsPeople className="mr-2" />
                                    Customers
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/order-overview">
                                <div
                                    onClick={() => handleLinkClick('/order-overview')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/order-overview' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsCart2 className="mr-2" />
                                    Order Overview
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/analytics">
                                <div
                                    onClick={() => handleLinkClick('/analytics')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/analytics' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsBarChartLine className="mr-2" />
                                    Analytics
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/documents">
                                <div
                                    onClick={() => handleLinkClick('/documents')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md ${activeLink === '/documents' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsFileEarmarkRuled className="mr-2" />
                                    Documents
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:block py-2 text-xs text-gray-500 font-albert-sans font-bold mb-4 mt-8">SUPPORT</div>
                    <div className="flex flex-col sm:gap-4 gap-2">
                        <div>
                            <Link href="/help">
                                <div
                                    onClick={() => handleLinkClick('/help')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md cursor-pointer ${activeLink === '/help' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <BsInfoCircle className="mr-2" />
                                    Help
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/settings">
                                <div
                                    onClick={() => handleLinkClick('/settings')}
                                    className={`flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md cursor-pointer ${activeLink === '/settings' ? 'bg-purple-100 text-purple-600' : ''}`}
                                >
                                    <FiSettings className="mr-2" />
                                    Settings
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="sm:pt-8 pt-2 ml-3 sm:ml-0 max-w-[351px]">
                    <div onClick={() => logout()} className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-md cursor-pointer">
                        <TbLogout2 className="mr-2" />
                        Log Out
                    </div>
                </div>
                <div className="flex justify-between mt-6 sm:hidden ml-3 sm:ml-0 mb-2 max-w-[351px]">
                    <input id="search" type="text" placeholder="Type here" className="h-[30px] border border-grey-50 rounded-md pl-2 min-w-40" />
                    <button className="bg-purple-500 text-white flex items-center justify-evenly w-24 h-7 rounded-md">
                        <BsSearch />Search
                    </button>
                </div>
            </div>
        </div>
    );
}
