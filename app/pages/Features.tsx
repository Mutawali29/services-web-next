import { FaCheck } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import Image from "next/image";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] bg-gradient-to-r from-blue-100 to-blue-50">
      {/* Feature 1 */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse shadow-lg rounded-lg p-6 bg-white">
        <div className="hidden w-1/2 sm:block">
          <Image
            src="./assets/feature-1.svg"
            alt="Illustration of sales monitoring feature"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085ff] lg:text-[18px] xs:text-center lg:text-left">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] xs:text-center lg:text-left">
            Simplify your sales monitoring
          </h1>
          <div className="pt-[24px] sm:hidden">
            <Image
              src="./assets/feature-1.svg"
              alt="Illustration of sales monitoring feature"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="py-[24px] text-[#36485C] lg:text-[18px] xs:text-center lg:text-left">
            Stay on top of things and revamp your work process with our game-changing feature. Get a bird&apos;s-eye view with our customizable dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-20 lg:ml-0">
              <FaCheck />
              Stay on top of tasks in real time.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-20 lg:ml-0">
              <FaCheck />
              Revamp your workflow easily.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-20 lg:ml-0">
              <FaCheck />
              Get full control with a custom dashboard.
            </li>
          </ul>
          <div className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px] xs:ml-36 lg:ml-0">
            <p>Learn more</p>
            <IoArrowForwardCircle className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col gap-x-6 sm:flex-row shadow-lg rounded-lg p-6 bg-white">
        <div className="hidden w-1/2 sm:block">
          <Image
            src="./assets/feature-2.svg"
            alt="Illustration of customer support feature"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] xs:text-center lg:text-left">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] xs:text-center lg:text-left">
            Get in touch with your customers
          </h1>
          <div className="pt-[24px] sm:hidden">
            <Image
              src="./assets/feature-2.svg"
              alt="Illustration of customer support feature"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="py-[24px] text-[#36485C] lg:text-[18px] xs:text-center lg:text-left">
            Your satisfaction is our top priority. Count on us for efficient solutions and enjoy 24/7 support for all your inquiries.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-16 lg:ml-0">
              <FaCheck />
              Your satisfaction is our top priority.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-16 lg:ml-0">
              <FaCheck />
              Count on us for efficient solutions.
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] xs:ml-16 lg:ml-0">
              <FaCheck />
              Enjoy 24/7 support for all your inquiries.
            </li>
          </ul>
          <div className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px] xs:ml-36 lg:ml-0">
            <p>Learn more</p>
            <IoArrowForwardCircle className="text-[#00A424]" />
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse shadow-lg rounded-lg p-6 bg-white">
        <div className="hidden w-1/2 sm:block">
          <Image
            src="./assets/feature-3.svg"
            alt="Illustration of growth monitoring feature"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] xs:text-center lg:text-left">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] xs:text-center lg:text-left">
            Track your subscriber growth
          </h1>
          <div className="pt-[24px] sm:hidden">
            <Image
              src="./assets/feature-3.svg"
              alt="Illustration of growth monitoring feature"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <p className="py-[24px] text-[#36485C] lg:text-[18px] xs:text-center lg:text-left">
            Stay on top of your audience&apos;s growth with our advanced tracking tools, designed to help you understand your subscriber dynamics.
          </p>
          <div className="flex w-full gap-x-[24px] pt-[24px] xs:text-center lg:text-left">
            <div className="w-1/2 flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C]">Join us today!</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">Unlock your potential!</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px] xs:ml-36 lg:ml-0">
            <p>Learn more</p>
            <IoArrowForwardCircle className="text-[#EB2891]" />
          </div>
        </div>
      </div>
    </div>
  );
}
