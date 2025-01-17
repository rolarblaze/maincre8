import React from "react";

const BigCancelIcon = ({
  width = "25",
  height = "24",
  stroke = "#140227",
  strokeWidth = "1.5",
}: {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25781 17.2431L12.5008 12.0001L17.7438 17.2431M17.7438 6.75708L12.4998 12.0001L7.25781 6.75708"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BigCancelIcon;
