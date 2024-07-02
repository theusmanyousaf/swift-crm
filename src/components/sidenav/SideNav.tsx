import Image from "next/image"
import Logo from '/public/assets/Company.svg'
import { RxDashboard } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { BsPeople, BsCart2, BsBarChartLine, BsBell, BsFileEarmarkRuled, BsInfoCircle } from "react-icons/bs";

export default function SideNav() {
    return (
        <div className="ml-[72px] mt-[22px] h-[752px] w-[220px] bg-white shadow-xl rounded-md absolute px-4 py-8">
            <div className="pb-8 pl-4 text-left">
                <Image src={Logo} alt="SwiftCRM" />
            </div>
            <nav>
                <div className="py-2 text-xs text-gray-500 font-semibold mb-4">GENERAL</div>
                <div className="flex flex-col gap-4">
                    <div>
                        <a href="/dashboard" className="flex items-center py-2 px-4 bg-purple-100 text-purple-600 border-l-4 border-purple-600">
                            <RxDashboard className="mr-3" />
                            Dashboard
                        </a>
                    </div>
                    <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                        <BsBell className="mr-3" />
                        Notifications
                    </div>
                    <div>
                        <a href="/customers" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                            <BsPeople className="mr-3" />
                            Customers
                        </a>
                    </div>
                    <div>
                        <a href="/order-overview" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                            <BsCart2 className="mr-3" />
                            Order Overview
                        </a>
                    </div>
                    <div>
                        <a href="/analytics" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                            <BsBarChartLine className="mr-3" />
                            Analytics
                        </a>
                    </div>
                    <div>
                        <a href="/documents" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                            <BsFileEarmarkRuled className="mr-3" />
                            Documents
                        </a>
                    </div>
                </div>
                <div className="py-2 text-xs text-gray-500 font-semibold mb-4 mt-8">SUPPORT</div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                        <BsInfoCircle className="mr-3" />
                        Help
                    </div>
                    <div className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                        <FiSettings className="mr-3" />
                        Settings
                    </div>
                </div>
            </nav>
            <div className="pt-8">
                <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-purple-100 hover:text-purple-600">
                    <TbLogout2 className="mr-3" />
                    Log Out
                </a>
            </div>
        </div>
    )
}
