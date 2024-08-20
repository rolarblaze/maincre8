import React from "react";

interface PackageIconProps {
  fillColor: string;
}

const PackageIcon: React.FC<PackageIconProps> = ({ fillColor }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99984 5.50008C10.4601 5.50008 10.8332 5.87318 10.8332 6.33342V12.1667C10.8332 12.627 10.4601 13.0001 9.99984 13.0001C9.5396 13.0001 9.1665 12.627 9.1665 12.1667V6.33342C9.1665 5.87318 9.5396 5.50008 9.99984 5.50008Z"
        fill={fillColor}
      />
      <path
        d="M8.95817 14.4584C8.95817 15.0337 9.42454 15.5001 9.99984 15.5001C10.5751 15.5001 11.0415 15.0337 11.0415 14.4584C11.0415 13.8831 10.5751 13.4167 9.99984 13.4167C9.42454 13.4167 8.95817 13.8831 8.95817 14.4584Z"
        fill={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.6665 10.5001C1.6665 5.89771 5.39746 2.16675 9.99984 2.16675C14.6022 2.16675 18.3332 5.89771 18.3332 10.5001C18.3332 15.1025 14.6022 18.8334 9.99984 18.8334C5.39746 18.8334 1.6665 15.1025 1.6665 10.5001ZM9.99984 3.83341C6.31794 3.83341 3.33317 6.81818 3.33317 10.5001C3.33317 14.182 6.31794 17.1667 9.99984 17.1667C13.6817 17.1667 16.6665 14.182 16.6665 10.5001C16.6665 6.81818 13.6817 3.83341 9.99984 3.83341Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default PackageIcon;