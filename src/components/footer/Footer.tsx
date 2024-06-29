import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from '../../../public/assets/Company.svg'

const Footer = () => {
    return (
        <footer className="pt-8 mb-[29px] mx-[70.5px]">
            {/* Upper Part */}
            <div className="flex justify-between py-[10px] mt-[17px]">
                <div>
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="flex gap-8 text-gray-600 items-center">
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
            </div>

            {/* Lower Part */}
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
                <div className="text-gray-600">
                    <p className="text-sm">
                        Crafting Connections, One Customer at a Time.
                    </p>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="text-purple-600 w-[29px] h-[29px]">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-purple-600 w-[29px] h-[29px]">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-purple-600 w-[29px] h-[29px]">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <div className="flex justify-between items-center border-t-2 pt-[30px] border-gray-200">
                <div className="text-gray-600 text-sm py-[5px]">
                    <p>Privacy Policy</p>
                </div>
                <div className="text-gray-600 text-sm py-[5px]">
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
