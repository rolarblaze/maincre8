"use client";
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
    <div className="bg-white py-4 px-8 rounded-lg border border-grey200">
      <div className="flex items-center justify-center gap-2 bg-grey50 rounded-lg py-1.5 mb-4">
        <p>{icon}</p>
        <p className="font-semibold text-grey500">{title}</p>
      </div>
      <p className="text-black">
        <span className="font-bold leading-10 text-3xl">{price}</span> /month
      </p>
      <p>{description}</p>

      <Button label="Get Started" classNames="!py-2 !text-xs mt-4 mb-6" />
      <AnimatePresence>
        {visibleFeatures.map((feature, index) => (
          <motion.div
            className="flex gap-2 mb-4"
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ListCheck /> <span>{feature}</span>
          </motion.div>
        ))}
      </AnimatePresence>
      <p
        className="span text-primary500 text-left cursor-pointer"
        onClick={onShowAllToggle}
      >
        {showAll ? "Show less" : "Read more"}
      </p>
    </div>
  );
};

export default Card;
