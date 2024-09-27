"use client";
import { BagIcon } from "@/public/svgs";
import { ButtonProps } from "@/types/button";
import { AnimatePresence, delay, motion } from "framer-motion";

interface CartButtonProps extends Omit<ButtonProps, "children"> {
  click: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({ click, onClick }) => {
  let duration = 0.25;

  const pingVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      type: "spring",
      transition: {
        duration: duration,
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg bg-grey300 p-2 transition-all duration-200 ease-linear ${click && "bg-primary500"}`}
    >
      <AnimatePresence initial={false}>
        {click && (
          <motion.div
            variants={pingVariants}
            className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-white"
          >
            <motion.div className="size-2.5 rounded-full bg-warning-400" />
          </motion.div>
        )}
      </AnimatePresence>

      <BagIcon />
    </button>
  );
};
export default CartButton;
