"use client"
import React, { ReactNode, useEffect, useRef } from 'react';

interface DropdownWrapperProps {
  children: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  isVisible: boolean;
  onClose: () => void;
}

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({
  children,
  top,
  left,
  right,
  bottom,
  isVisible,
  onClose,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    top: top || "auto",
    left: left || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute w-fit pt-8 px-8 pb-5 bg-white rounded-[20px] shadow-custom-strong ${
        isVisible ? "animate-fadeInDown" : "animate-fadeOutUp"
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default DropdownWrapper;
