"use client";
import { AshArrowDown, AshArrowUp } from "@/public/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import AnimatePresence for smooth transitions

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
    <section className="flex flex-col items-center gap-8 bg-grey50 px-5 py-6 md:px-0 md:py-10">
      <div className="flex w-full max-w-[900px] flex-col gap-4 text-textMain md:gap-8">
        {activeFAQData.map((faq, index) => (
          <motion.div
            key={index}
            layout // Animate layout changes smoothly without explicit height animation
            initial={false} // Prevent animation on first render
            className={`overflow-hidden rounded-lg border border-grey300 bg-white`} // Use overflow-hidden to ensure smoothness
          >
            {/* Question section */}
            <div
              className="flex cursor-pointer items-center justify-between px-4 py-6"
              onClick={() => toggleAnswer(index)}
            >
              <p
                className={`font-medium ${activeIndex === index ? "" : "text-text-main"}`}
              >
                {faq.question}
              </p>
              <span
                className={`text-2xl ${activeIndex === index ? "" : "mb-3 text-grey700"}`}
              >
                {activeIndex === index ? <AshArrowUp /> : <AshArrowDown />}
              </span>
            </div>

            {/* Animate answer content and labels */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: -10 }} // Start slightly shifted up
                  animate={{ opacity: 1, y: 0 }} // Fade in and slide down
                  exit={{ opacity: 0, y: -10 }} // Fade out and slide up on collapse
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                  className="px-4"
                >
                  {/* Answer content */}
                  <motion.div className="py-4">
                    <p className="text-sm">{faq.answer}</p>
                  </motion.div>

                  {/* Labels */}
                  <motion.div className="flex gap-[10px] pb-6">
                    {faq.labels.map((label, labelIdx) => (
                      <span
                        key={labelIdx}
                        className="flex w-auto items-center justify-center rounded-lg bg-primary50 px-[6px] py-[6px] text-primary500"
                      >
                        {label}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
