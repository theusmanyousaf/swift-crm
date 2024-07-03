import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from '/public/assets/Company.svg'

const Footer = () => {
    {/* I can use Grid layout for footer in mobile display then adjust the y of every element in grid */ }
    return (
        <footer className="xl:pb-7 xl:pt-[17px] px-8 py-[17px] md:px-[62px] xl:px-[70.5px] bg-white">
            {/* Upper Part */}

            <div className="flex flex-col mb-10 sm:mb-0 sm:flex-row gap-5 sm:gap-0 justify-between sm:py-2.5">
                <div>
                    <a href="/dashboard"><Image src={Logo} alt="SwiftCRM" /></a>
                </div>

                {/* visible in moblie only */}
                <div className="sm:hidden text-gray-600">
                    <p className="text-sm">
                        Crafting Connections,<br /> One Customer at a Time.
                    </p>
                </div>

                {/* hidden in mobile view */}
                <div className="hidden sm:flex gap-8 text-gray-600 items-center">
                    <div>
                        <a href="/dashboard" className="block text-sm hover:text-gray-800">Dashboard</a>
                    </div>
                    <div>
                        <a href="/customers" className="block text-sm hover:text-gray-800">Customers</a>
                    </div>
                    <div>
                        <a href="/order-overview" className="block text-sm hover:text-gray-800">Order Overview</a>
                    </div>
                    <div>
                        <a href="/analytics" className="block text-sm hover:text-gray-800">Analytics</a>
                    </div>
                    <div>
                        <a href="/documents" className="block text-sm hover:text-gray-800">Documents</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:items-center md:mb-6 md:mt-3.5 xl:my-4">
                {/* hidden in moblie view */}
                <div className="hidden sm:block sm:text-gray-600">
                    <p className="text-sm">
                        Crafting Connections, One Customer at a Time.
                    </p>
                </div>

                {/* visible in mobile view */}
                <div className="sm:hidden flex flex-col gap-6 text-gray-600 items-left">
                    <div>
                        <a href="#" className="block text-sm hover:text-gray-800">Dashboard</a>
                    </div>
                    <div>
                        <a href="#" className="block text-sm hover:text-gray-800">Customers</a>
                    </div>
                    <div>
                        <a href="#" className="block text-sm hover:text-gray-800">Order Overview</a>
                    </div>
                    <div>
                        <a href="#" className="block text-sm hover:text-gray-800">Analytics</a>
                    </div>
                    <div>
                        <a href="#" className="block text-sm hover:text-gray-800">Accounting</a>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="text-purple-600 text-3xl w-[29px] h-[29px]">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-purple-600 text-3xl w-[29px] h-[29px]">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-purple-600 text-3xl w-[29px] h-[29px]">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            {/* Lower Part */}

            <div className="flex flex-col justify-between gap-3 sm:gap-0 sm:items-center sm:flex-row sm:border-t-2 my-10 sm:my-0 sm:pt-[22px] xl:pt-[30px] border-gray-200">
                <div className="text-gray-600 text-sm py-[5px]">
                    <p>Privacy Policy</p>
                </div>
                <div className="order-last sm:order-none text-gray-600 text-sm sm:py-[5px]">
                    <p>&copy; 2023 Mugna Technologies, Inc.</p>
                </div>
                <div className="text-gray-600 text-sm py-[5px]">
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
