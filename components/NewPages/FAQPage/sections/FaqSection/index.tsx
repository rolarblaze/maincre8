"use client";
import { useState } from "react";
interface ActiveFAQProps {
  question: string;
  answer: string;
  labels: string[];
}

type ActiveFAQDataProps = ActiveFAQProps[];

const FaqSection = ({
  activeFAQData,
}: {
  activeFAQData: ActiveFAQDataProps;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="full-width z-20 flex flex-col items-center gap-8 bg-grey50 py-10 max-xl:px-5">
      <div className="text-textMain flex w-full max-w-[818px] flex-col gap-4 md:gap-8">
        {/* Each faq cards */}
        {activeFAQData.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border border-grey300 bg-white py-6 transition-all duration-300 ${
              activeIndex === index ? "" : ""
            }`}
            style={{
              gridRow: activeIndex === index ? "span 3" : "span 1",
            }}
          >
            {/* Question plus icon */}
            <div
              className="flex cursor-pointer items-center justify-between px-4"
              onClick={() => toggleAnswer(index)}
            >
              {/* Question */}
              <p
                className={`font-medium ${
                  activeIndex === index ? "" : "text-text-main"
                }`}
              >
                {faq.question}
              </p>
              {/* icon drop down and drop up */}
              <span
                className={`text-2xl ${
                  activeIndex === index ? "" : "mb-3 text-grey700"
                }`}
              >
                {activeIndex === index ? "^" : "⌄"}
              </span>
            </div>

            {/* Answer content */}
            {activeIndex === index && (
              <div className="border-t border-white px-4 py-5 pb-8">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}

            {/* Labels */}
            {activeIndex === index && (
              <div className="flex gap-[10px] px-4">
                {faq.labels.map((label, labelIdx) => {
                  return (
                    <span
                      key={labelIdx}
                      className="flex w-auto items-center justify-center rounded-lg bg-primary50 px-[6px] py-[6px] text-primary500"
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
