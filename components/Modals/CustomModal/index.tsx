import { CancelIcon } from "@/public/icons";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`max-w-[744px] rounded-[20px] shadow-dark-blue z-10 bg-white py-14 px-32 ${className}`}
      >
        {showCancelIcon && (
          <div onClick={onClose} className="w-fit ml-auto mb-4 cursor-pointer">
            <CancelIcon />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
