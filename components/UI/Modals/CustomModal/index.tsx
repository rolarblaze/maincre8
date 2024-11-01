"use client";
import { AnimatePresence, motion } from "framer-motion";
import { CancelIcon } from "@/public/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showCancelIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  showCancelIcon = true,
}) => {
  // if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
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
            className={`no-scrollbar relative z-10 size-fit max-h-[calc(100dvh-2.5rem)] rounded-2xl min-w-80 overflow-y-scroll ${className}`}
          >
            {showCancelIcon && (
              <div
                onClick={onClose}
                className="absolute right-8 top-8 z-20 mb-4 ml-auto w-fit cursor-pointer rounded-full border border-grey300 p-2"
              >
                <CancelIcon className="stroke-grey200" />
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