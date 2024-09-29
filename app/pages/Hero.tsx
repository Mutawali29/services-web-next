import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { PiSlackLogoFill } from "react-icons/pi";
import { SiTrustpilot, SiCnn } from "react-icons/si";
import { GiEggClutch } from "react-icons/gi";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute -top-10 left-10 bg-purple-300 h-20 w-20 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-40 right-10 bg-pink-300 h-16 w-16 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-[60%] left-[20%] bg-blue-400 h-14 w-14 rounded-full animate-floatSlow opacity-50"></div>
      <div className="absolute bottom-20 right-20 bg-yellow-300 h-12 w-12 rounded-full animate-floatFast opacity-80"></div>
      <div className="absolute top-20 left-[80%] bg-green-300 h-14 w-14 rounded-full animate-floatSlow opacity-70"></div>

      {/* Hero Text Section */}
      <div className="px-[20px] lg:px-[280px] text-center">
        <h1 className="text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[74px] animate-fadeIn">
          Start Monitoring Your Website Like a Pro
        </h1>
        <p className="pt-6 text-[#172026] text-[16px] leading-6 lg:text-[18px] lg:leading-7 max-w-[800px] mx-auto animate-slideIn">
          Get a bird-eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
        </p>

        {/* Buttons Section */}
        <div className="flex justify-center gap-4 pt-8 animate-slideUp">
          <button className="bg-[#4328EB] py-4 px-8 text-white rounded-[4px] lg:px-12 hover:bg-[#564ef8] transition-transform transform hover:scale-105 shadow-md">
            Try for Free
          </button>
          <div className="flex items-center gap-x-2">
            <button className="text-[#4328EB] hover:underline">
              View Pricing
            </button>
            <FaArrowRightLong className="text-[#4328EB] bg-blue-200 p-1 rounded-full hover:bg-blue-300 transition-all" />
          </div>
        </div>
      </div>

      {/* Gradient Background with Image */}
      <div className="relative flex h-[130vh] w-full justify-center bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500 min-h-[500px] text-white mt-10 animate-gradientMove">
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/100"></div>

        {/* Hero Image */}
        <div className="absolute top-[0px] bottom-0 w-full flex justify-center">
          <Image
            src="/assets/image.svg" // Adjust path if necessary
            alt="heroImg"
            className="w-[100%] max-w-[1500px] h-auto sm:mb-20 sm:mr-16 sm:mt-[-50px] xs:mr-14 xs:mt-[-150px] sm:h-[700px] lg:mb-28 lg:mr-20 lg:h-[700px] xl:w-[90%] animate-float"
            width={1500} // Specify the width
            height={700} // Specify the height
          />
        </div>

        {/* Trusted Companies Section */}
        <div className="absolute bottom-10 w-full lg:bottom-16 flex flex-col items-center lg:flex-row lg:justify-between lg:px-20 animate-fadeIn">
          <p className="text-white text-center mb-4 lg:mb-0 lg:text-[18px]">
            Trusted by These Companies
          </p>
          <div className="grid grid-cols-3 items-center justify-center gap-8 align-middle px-[20px] lg:grid-cols-5">
            <FaGoogle className="text-2xl lg:text-3xl hover:text-[#fbbc05]" />
            <PiSlackLogoFill className="text-2xl lg:text-3xl hover:text-[#4a154b]" />
            <SiTrustpilot className="text-2xl lg:text-3xl hover:text-[#00b67a]" />
            <SiCnn className="text-2xl lg:text-3xl hover:text-[#cc0000]" />
            <GiEggClutch className="text-2xl lg:text-3xl hover:text-[#d4af37]" />
          </div>
        </div>
      </div>
    </div>
  );
}
