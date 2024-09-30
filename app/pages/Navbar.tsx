import Image from "next/image"; // Importing Image from Next.js
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Careers" },
];

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[28px] py-[16px] lg:container lg:mx-auto lg:px-20 bg-gray-50 shadow-lg transition duration-300">
            <div className="flex items-center">
                {/* Updated to use Next.js Image component */}
                <Image
                    src="./assets/shop.png" // Make sure the path is correct
                    alt="shop"
                    width={48} // Width in pixels
                    height={48} // Height in pixels
                    className="w-12 h-auto"
                />

                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <div key={index} className="relative group"> {/* Added key prop */}
                            <p 
                                className="text-[#36485C] font-medium transition duration-200 cursor-pointer group-hover:text-blue-600 transform group-hover:scale-105">
                                {item.name}
                            </p>
                            <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] hover:text-blue-600 cursor-pointer transition duration-200">
                    Open an Account
                </p>

                <div className="flex items-center gap-x-2 cursor-pointer">
                    <FaUserCircle className="text-[#36485C] w-8 h-8 hover:text-blue-600 transition duration-200" />
                    <span className="hidden font-medium text-[#36485C] lg:block hover:text-blue-600 transition duration-200">Sign in</span>
                </div>

                <IoMenu className="text-[#36485C] w-8 h-8 lg:hidden hover:text-blue-600 transition duration-200 cursor-pointer" />
            </div>
        </nav>
    );
}
