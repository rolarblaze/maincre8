"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CancelIcon } from "@/public/icons";
import { twMerge } from "tailwind-merge";

interface SliderModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  cancelBtnStyles?: string;
  cancelIconStyles?: string;
  title: string;
  showCancelIcon?: boolean;
}

const SliderModal: React.FC<SliderModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  cancelBtnStyles,
  cancelIconStyles,
  title,
  showCancelIcon = true,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center">
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
          />

          {/* Sliding Modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "50%" }}
            exit={{ x: "150%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className={twMerge(
              "noScrollbar fixed right-[35vw] z-10 h-screen w-[70vw] bg-white shadow-lg",
              className,
            )}
          >
            {/* Close Icon */}
            {showCancelIcon && (
              <div
                onClick={onClose}
                className={twMerge(
                  "absolute right-4 top-4 z-40 cursor-pointer rounded-full border border-gray-300 p-2",
                  cancelBtnStyles,
                )}
              >
                <CancelIcon
                  className={twMerge("stroke-gray-500", cancelIconStyles)}
                />
              </div>
            )}

            {/* Modal Content */}
            <div className="noScrollbar h-full w-full overflow-y-auto px-8 pb-40 pt-[6.5rem]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SliderModal;
