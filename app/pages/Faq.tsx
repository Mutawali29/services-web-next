"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

const items = [
  {
    question: "What is the purpose of your service?",
    answer:
      "Our service helps you monitor your website's performance and provides insights to enhance your online presence. We offer a customizable dashboard to keep you updated.",
  },
  {
    question: "How can I get support if I encounter issues?",
    answer:
      "You can reach out to our dedicated support team via live chat or email. We strive to resolve any issues you may have as quickly as possible.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial for new users to explore our features. Sign up today to experience the benefits of our service without any commitment.",
  },
  {
    question: "What kind of analytics can I track?",
    answer:
      "You can track various metrics, including visitor behavior, traffic sources, and conversion rates. Our dashboard provides a comprehensive view of your website's performance.",
  },
  {
    question: "Are there any setup fees?",
    answer:
      "No, we do not charge any setup fees. You can start using our service immediately after signing up.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base xs:text-center lg:text-left">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] xs:text-center lg:text-left">
          Let's clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px] xs:text-center lg:text-left">
          We're here to help you find the answers you need quickly and easily.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <Accordion.Item
              key={`faq-item-${index}`}
              value={`item-${index + 1}`}
              className="bg-[#E3F1FF] p-[16px] border border-[#BFD3E7] rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between">
                  <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                    {item.question}
                  </p>
                  <span>
                    <Image
                      src="/assets/plus.svg"
                      alt="See more"
                      width={24}
                      height={24}
                      className="transition-transform duration-200 transform hover:rotate-45"
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content>
                <p className="pt-2 text-[#36485C]">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
