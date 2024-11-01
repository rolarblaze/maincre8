"use client";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence, animate } from "framer-motion";

function ResizablePanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let duration = 0.75;
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: "-10px",
          }}
          animate={{
            opacity: 1,
            y: "4px",
            transition: {
              duration: duration,
              delay: duration / 0.5,
            },
          }}
          exit={{
            opacity: 0,
            y: "-10px",
            transition: { duration: duration / 2 },
          }}
          className={`absolute ${className}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ResizablePanel;
