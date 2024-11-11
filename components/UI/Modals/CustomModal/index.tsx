"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CancelIcon } from "@/public/icons";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  cancelBtnStyles?: string;
  cancelIconStyles?: string;
  showCancelIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  cancelBtnStyles,
  cancelIconStyles,
  showCancelIcon = true,
}) => {
  // if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, scale: 0, translateY: 100 }}
            className={`no-scrollbar relative z-10 size-fit max-h-[calc(100dvh-2.5rem)] min-w-80 rounded-2xl ${className}`}
          >
            {showCancelIcon && (
              <div
                onClick={onClose}
                className={twMerge(
                  "absolute right-8 top-8 z-20 mb-4 ml-auto w-fit cursor-pointer rounded-full border border-grey300 p-2",
                  cancelBtnStyles,
                )}
              >
                <CancelIcon
                  className={twMerge("stroke-grey200", cancelIconStyles)}
                />
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
