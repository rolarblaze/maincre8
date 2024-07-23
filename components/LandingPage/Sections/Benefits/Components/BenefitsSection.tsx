"use client";
import React from "react";
import Button from "@/components/Button";
import { HighlightDown, HighlightUp } from "@/public/icons";
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
  })
  
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <HighlightDown />
        <h2>
          Benefits for <span className="h2 text-primary500">{title}</span>
        </h2>
        <HighlightUp />
      </div>
      <p>{subtitle}</p>
      <div
        className={`w-full flex items-center justify-between my-8 ${
          reverse ? "flex-row-reverse" : ""
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
        
        {}

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
