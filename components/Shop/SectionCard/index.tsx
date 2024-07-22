"use client";
import React from "react";
import { useRouter } from 'next/navigation'; 
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
  bundleId: number; 
  packageId: number;
}

const Card = ({
  title,
  description,
  icon,
  price,
  features,
  showAll,
  onShowAllToggle,
  bundleId,
  packageId,
  
}: CardProps) => {

  const router = useRouter();
  const visibleFeatures = showAll ? features : features.slice(0, 5);

  const handleTalkToSales = () => {
    console.log('Talk to sales button clicked');
    console.log('Bundle ID:', bundleId);
    console.log('Package ID:', packageId);

    // Store IDs in session storage
    sessionStorage.setItem('bundleId', bundleId.toString());
    sessionStorage.setItem('packageId', packageId.toString());

    // Redirect to /submit-brief
    router.push('/submit-brief');
  };

  return (
    <main className="max-w-96 w-full min-h-[524px] h-fit flex flex-col gap-6 items-start bg-white py-4 px-8 rounded-md border border-grey200">
      <section className="flex-grow flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 bg-grey50 rounded-lg py-1.5">
          <div>{icon}</div>
          <p className="font-semibold text-grey500 text-lg">{title}</p>
        </div>
        <div className="flex flex-col gap-2 text-grey900 text-sm text-left">
          <p className="font-bold text-3xl">
            {price}
            <span className="text-base font-medium">/year</span>
          </p>
          <p className="text-grey800 font-normal text-base">{description}</p>
        </div>
        <Button label="Talk to sales" classNames="!py-2 !text-xs" onClick={handleTalkToSales} />
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
