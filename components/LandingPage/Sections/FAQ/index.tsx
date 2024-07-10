"use client"
import { useState } from "react";
import { faqData } from "./faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`border border-grey300 rounded-lg p-4 transition-all duration-300 ${
            activeIndex === index ? "bg-primary500 text-white" : ""
          }`}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <p className={`font-medium ${activeIndex === index ? "text-white" : "text-grey900"}`}>
              {faq.question}
            </p>
            <span className={`text-lg ${activeIndex === index ? "text-white" : "text-primary500"}`}>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2">
              <p className="text-sm">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
