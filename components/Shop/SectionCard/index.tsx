"use client";
import React from "react";
import Button from "@/components/Button";
import { ListCheck } from "@/public/icons";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  price: string;
  features: string[];
  showAll: boolean;
  onShowAllToggle: () => void;
}

const Card = ({
  title,
  description,
  icon,
  price,
  features,
  showAll,
  onShowAllToggle,
}: CardProps) => {
  const visibleFeatures = showAll ? features : features.slice(0, 5);

  return (
    <main className="max-w-96 w-full min-h-[524px] h-fit flex flex-col gap-6 items-start bg-white py-4 px-8 rounded-md border border-grey200">
      <section className="flex-grow flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 bg-grey50 rounded-lg py-1.5">
          <div>{icon}</div>
          <p className="font-semibold text-grey500 text-lg">{title}</p>
        </div>
        <div className="flex flex-col gap-2 text-grey900 text-left">
          <p className="font-bold text-3xl">
            {price}
            <span className="text-base font-medium">/year</span>
          </p>
          <p className="text-grey800 font-normal text-base">{description}</p>
        </div>
        <Button label="Get Started" classNames="!py-2 !text-xs" />
      </section>

      <div className="space-y-3 flex flex-col justify-start flex-grow">
        <AnimatePresence>
          {visibleFeatures.map((feature, index) => (
            <motion.div
              className="flex gap-2"
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <ListCheck />
              </div>
              <p className="text-sm text-left">{feature}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-auto">
        <p
          className="span text-primary500 text-sm font-medium text-left cursor-pointer"
          onClick={onShowAllToggle}
        >
          {showAll ? "Show less" : "Read more"}
        </p>
      </div>
    </main>
  );
};

export default Card;
