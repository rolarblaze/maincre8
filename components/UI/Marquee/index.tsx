"use client";
import { motion } from "framer-motion";

const Marquee = ({ items }: { items: any[] }) => {
  const oneHalfLength = Math.ceil(items.length / 2);

  return (
    <div className="w-full flex overflow-hidden x-gradient">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 *:mr-6"
      >
        {items.slice(0, oneHalfLength).map(({ width }) => (
          <div
            key={width}
            className={`h-12 bg-primary500 rounded-lg ${width}`}
          ></div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 *:mr-6"
      >
        {items.slice(oneHalfLength).map(({ width }) => (
          <div
            key={width}
            className={`h-12 bg-red-500 rounded-lg ${width}`}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};
export default Marquee;
