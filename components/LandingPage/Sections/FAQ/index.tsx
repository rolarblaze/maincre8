"use client";
import { useState } from "react";
import { faqData } from "./faqData";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-xl:px-5 w-full flex flex-col items-center gap-8 bg-white z-20">
      <motion.div
        className="text-center w-full flex flex-col items-center gap-2 lg:gap-4"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5.5xl">
          Frequently Asked{" "}
          <span className="text-2xl md:text-4xl lg:text-5.5xl text-primary500">
            Questions
          </span>
        </h2>
        {/* <p className="">Customer Reviews</p> */}
      </motion.div>

      <div className="max-w-[1008px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className={`border border-grey300 rounded-lg transition-all duration-300 ${
              activeIndex === index ? "bg-primary900 text-white" : ""
            }`}
            style={{
              gridRow: activeIndex === index ? "span 3" : "span 1",
            }}
            initial={{
              x: index % 2 === 0 ? -50 : 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="flex items-center justify-between py-3 px-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <p
                className={`font-medium ${
                  activeIndex === index ? "text-white " : "text-grey700"
                }`}
              >
                {faq.question}
              </p>
              <span
                className={`text-2xl ${
                  activeIndex === index ? "text-white" : "text-grey700"
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-4 pb-8 py-5 border-t border-white ">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
