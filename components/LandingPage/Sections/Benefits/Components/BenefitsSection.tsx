"use client";
import React from "react";
import Button from "@/components/Button";
import {
  HighlightDown,
  HighlightDownMobile,
  HighlightUp,
  HighlightUpMobile,
} from "@/public/icons";
import { Benefit, BenefitIndividual } from "@/public/imgs";
import Card from "./BenefitsCard";
import { motion } from "framer-motion";
import { BenefitImages } from "./BenefitsData";

interface Benefit {
  title: string;
  description: string;
  icons: React.ReactNode;
}

interface SectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  buttonLabel: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  benefits,
  buttonLabel,
  reverse = false,
}) => {
  const selectImg = BenefitImages.find((img) => {
    return img.title === title;
  });

  return (
    <div className="max-sm:py-10 py-20 max-xl:px-5">
      <div className="flex -mb-1 items-start justify-center">
        <HighlightDown className="max-md:hidden" />
        <HighlightDownMobile className="md:hidden" />
        <h2 className="text-center text-[1.3rem] md:text-4xl lg:text-5.5xl">
          Benefits for <span className="text-[1.3rem] md:text-4xl lg:text-5.5xl text-primary500">{title}</span>
        </h2>
        <HighlightUp className="max-md:hidden" />
        <HighlightUpMobile className="md:hidden" />
      </div>
      <p className="text-center lg:-mt-6">{subtitle}</p>
      <div
        className={`w-full flex max-lg:flex-col max-lg:gap-8 items-center justify-between my-8 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          className="flex flex-col gap-8 max-w-[591px]"
          initial={{ x: reverse ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icons}
            />
          ))}
        </motion.div>

        <motion.img
          src={selectImg?.src?.src}
          alt="benefits"
          width={"430px"}
          height={"100%"}
          initial={{ y: reverse ? 50 : 0, x: reverse ? 0 : 50, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div>
      <Button label={buttonLabel} classNames="mt-4 mb-6 w-max mx-auto" />
    </div>
  );
};

export default Section;
