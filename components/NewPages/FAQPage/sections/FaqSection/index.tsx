"use client";
import { useState } from "react";
import { newFAQData } from "./faqData";
import { motion } from "framer-motion";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="z-20 flex w-full flex-col items-center gap-8 bg-grey50 py-10 max-xl:px-5">
      <div className="text-textMain flex w-full max-w-[818px] flex-col gap-4 md:gap-8">
        {newFAQData.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border border-grey300 bg-white transition-all duration-300 ${
              activeIndex === index ? "" : ""
            }`}
            style={{
              gridRow: activeIndex === index ? "span 3" : "span 1",
            }}
          >
            <div
              className="flex cursor-pointer items-center justify-between px-4 py-3"
              onClick={() => toggleAnswer(index)}
            >
              <p
                className={`font-medium ${
                  activeIndex === index ? "" : "text-text-main"
                }`}
              >
                {faq.question}
              </p>
              <span
                className={`text-2xl ${
                  activeIndex === index ? "" : "mb-3 text-grey700"
                }`}
              >
                {activeIndex === index ? "^" : "⌄"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="border-t border-white px-4 py-5 pb-8">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
