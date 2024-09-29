import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px] bg-gray-100">
      <div className="flex items-center justify-center gap-x-[12px]">
        <img src="/assets/shop.png" alt="shop" style={{ width: '50px', height: 'auto' }} />
        <p className="font-bold text-[#36485C] text-[17px]"></p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li className="hover:text-[#4328EB] transition duration-300">Features</li>
        <li className="hover:text-[#4328EB] transition duration-300">Pricing</li>
        <li className="hover:text-[#4328EB] transition duration-300">Enterprise</li>
        <li className="hover:text-[#4328EB] transition duration-300">Careers</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        Qusay Mutawali© Copyright 2024. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <a 
          href="https://www.instagram.com/qusaymutawali?igsh=MWs4cDZ5ZHN3ZXVzdw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#5F7896] hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a 
          href="https://www.linkedin.com/in/qusay-mutawali-585495288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#5F7896] hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://github.com/Mutawali29?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#5F7896] hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}
