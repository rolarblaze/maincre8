"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  up?: boolean;
  className?: string;
}

const FadeUpDiv: React.FC<Props> = ({
  children,
  delay = 0,
  duration = 0.8,
  up = true,
  className,
}) => {
  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
          y: up ? 15 : 0,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default FadeUpDiv;
