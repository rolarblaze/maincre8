"use client";
import React, { useEffect, useState } from "react";

interface CheckboxIconProps {
  fillColor: string;
  className?: string;
  unchecked?: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  fillColor,
  className,
  unchecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(!unchecked);

  useEffect(() => {
    setIsChecked(!unchecked);
  }, [unchecked]);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div onClick={toggleCheckbox} style={{ cursor: "pointer" }}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {isChecked && (
          <path
            d="M13.9313 8.58038C14.2519 8.25012 14.244 7.72254 13.9137 7.402C13.5835 7.08147 13.0559 7.08935 12.7353 7.41962L8.48058 11.8035L7.26466 10.5507C6.94413 10.2204 6.41655 10.2125 6.08628 10.533C5.75602 10.8536 5.74813 11.3812 6.06867 11.7114L7.88258 13.5804C8.03952 13.7421 8.25524 13.8333 8.48058 13.8333C8.70591 13.8333 8.92164 13.7421 9.07857 13.5804L13.9313 8.58038Z"
            fill={fillColor}
          />
        )}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.83333 3C3.99238 3 2.5 4.49238 2.5 6.33333V14.6667C2.5 16.5076 3.99238 18 5.83333 18H14.1667C16.0076 18 17.5 16.5076 17.5 14.6667V6.33333C17.5 4.49238 16.0076 3 14.1667 3H5.83333ZM4.16667 6.33333C4.16667 5.41286 4.91286 4.66667 5.83333 4.66667H14.1667C15.0871 4.66667 15.8333 5.41286 15.8333 6.33333V14.6667C15.8333 15.5871 15.0871 16.3333 14.1667 16.3333H5.83333C4.91286 16.3333 4.16667 15.5871 4.16667 14.6667V6.33333Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default CheckboxIcon;
