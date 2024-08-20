import React from "react";

interface BrushIconProps {
  strokeColor: string;
}

const BrushIcon: React.FC<BrushIconProps> = ({ strokeColor }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1799_24607)">
        <path
          d="M9.31336 14.3763C8.42874 13.3445 6.99003 11.7968 5.57724 10.6516C5.30613 10.4318 4.93401 10.3797 4.61879 10.5295C2.26234 11.6491 2.81448 12.9968 3.36662 17.966C3.5133 19.2862 5.92979 17.1368 9.1065 15.4076C9.48481 15.2016 9.59371 14.7033 9.31336 14.3763V14.3763ZM9.31336 14.3763C11.5898 12.0999 16.6225 6.49708 17.627 3.32901C17.7939 2.80255 17.3526 2.37335 16.8349 2.56569C13.9197 3.64876 8.17798 8.54582 5.79093 10.8277"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1799_24607">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BrushIcon;
