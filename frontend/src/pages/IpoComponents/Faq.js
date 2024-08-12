import { Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    questionText: "How to Subscribe to an IPO?",
    questionIcon: "-",
    answerText: `
      Step 1: Login to your respective service provider. 
      Step 2: Click on the IPO button. 
      Step 3: Select the IPO you want to bid and enter the relevant details.
      Step 4: Your subscription will be completed once you make the payment or give permission.`,
  },
  {
    questionText: "Should I buy an IPO on the first day?",
    questionIcon: "+",
    answerText: "It depends on your investment strategy and the demand for the IPO.",
  },
  {
    questionText: "How do you know if an IPO is good?",
    questionIcon: "+",
    answerText: "Research the company's fundamentals, financials, and market potential.",
  },
  {
    questionText: "How to check the IPO start date?",
    questionIcon: "+",
    answerText: "Check the official exchange website or your broker's platform for details.",
  },
  {
    questionText: "What is issue size?",
    questionIcon: "+",
    answerText: "Issue size refers to the total value of the shares offered in an IPO.",
  },
  {
    questionText: "How many shares in a lot?",
    questionIcon: "+",
    answerText: "The lot size varies by IPO and is defined by the issuing company.",
  },
  {
    questionText: "How is the lot size calculated?",
    questionIcon: "+",
    answerText: "The lot size is determined based on the IPO price band and total shares offered.",
  },
  {
    questionText: "Who decides the IPO price band?",
    questionIcon: "+",
    answerText: "The price band is decided by the company's promoters and underwriters.",
  },
  {
    questionText: "What is IPO GMP?",
    questionIcon: "+",
    answerText: "GMP stands for Grey Market Premium, an indicator of demand before the listing.",
  },
  {
    questionText: "How many lots should I apply for IPO?",
    questionIcon: "+",
    answerText: "This depends on your budget and investment goals.",
  },
];

export default function FAQSection() {
  return (
    <>
      {/* FAQ section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[378px] lg:gap-[283px] lg:px-5 md:gap-[283px] md:px-5 sm:gap-[189px]">
          <div className="flex flex-col gap-[110px] lg:gap-[110px] md:gap-[82px] sm:gap-[55px]">
            <div className="flex flex-col items-start">
              <Heading size="text3xl" as="h2" className="lg:text-[34px] md:text-[34px] sm:text-[32px]">
                Frequently Asked Questions
              </Heading>
              <Heading size="text2xl" as="h3" className="font-normal lg:text-[20px]">
                Find answers to common questions that come to your mind related to IPO.
              </Heading>
            </div>
            <Accordion preExpanded={[0]} className="ml-1 flex flex-col gap-[74px] md:ml-0">
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`ExpandableList${i}`}>
                  <div className="mr-1 flex flex-1 flex-col items-center gap-5 rounded-[10px] bg-white-a700 p-[38px] md:mr-0 sm:p-4">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="ml-2 mr-2.5 flex w-[96%] flex-wrap items-start justify-between gap-5 lg:w-full md:mx-0 md:w-full">
                                <Heading
                                  size="heading1"
                                  as="h4"
                                  className="lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                >
                                  {d.questionText}
                                </Heading>
                                <Heading
                                  size="heading4"
                                  as="h5"
                                  className="self-center text-blue-a200 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                                >
                                  {d.questionIcon}
                                </Heading>
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="mb-12 flex w-[96%] lg:w-full md:w-full">
                        <Heading size="headinglg" as="h6" className="w-[70%] leading-9 lg:text-[20px]">
                          {d.answerText}
                        </Heading>
                      </div>
                    </AccordionItemPanel>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="ml-10 mr-[38px] flex justify-center bg-white-a700 p-[18px] md:mx-8">
            <Heading size="text4xl" as="p" className="mt-[18px] lg:text-[48px]">
              Add / Extend Footer
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
