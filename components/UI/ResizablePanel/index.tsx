"use client"
import useMeasure from "react-use-measure";
import { motion, AnimatePresence } from "framer-motion";
import { ignoreCircularReferences } from "./helperFunc";

function ResizablePanel({ children }: { children: React.ReactNode }) {
  let duration = 0.5;
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: duration / 2 },
          }}
          className={height ? "absolute" : "relative"}
        >
          <div ref={ref}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ResizablePanel;
