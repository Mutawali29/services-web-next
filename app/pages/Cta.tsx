import { FaArrowRight } from "react-icons/fa";

export function Cta() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px] shadow-lg">
      <h1 className="text-white text-[32px] font-bold lg:text-[56px] leading-[64px] shadow-md">
        Monitor your website like a pro
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px] opacity-90">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium transition duration-300 transform hover:scale-105 hover:shadow-md">
          Try for free
        </button>

        <button className="flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0 transition duration-300 transform hover:scale-105 hover:shadow-md">
          Contact Sales{" "}
          <span>
            <FaArrowRight className="text-lg" />
          </span>
        </button>
      </div>
    </div>
  );
}
