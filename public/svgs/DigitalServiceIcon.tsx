import React from "react";

interface DigitalServiceProps {
  fillColor: string;
}

const DigitalService: React.FC<DigitalServiceProps> = ({ fillColor }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 2H3.75C2.50736 2 1.5 3.00736 1.5 4.25V11.75C1.5 12.9926 2.50736 14 3.75 14H7.93934L5.46967 16.4697C5.17678 16.7626 5.17678 17.2374 5.46967 17.5303C5.76256 17.8232 6.23744 17.8232 6.53033 17.5303L9 15.0607L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303C12.8232 17.2374 12.8232 16.7626 12.5303 16.4697L10.0607 14H14.25C15.4926 14 16.5 12.9926 16.5 11.75V4.25C16.5 3.00736 15.4926 2 14.25 2ZM3.96967 11.2804C3.67678 10.9875 3.67678 10.5126 3.96967 10.2197L6.96967 7.21974C7.24194 6.94747 7.67616 6.92561 7.9744 7.16917L8.92978 7.9494L11.4509 5.23924C11.5924 5.08708 11.7907 5.00047 11.9985 5.00007C12.2064 4.99967 12.405 5.08551 12.5472 5.23711L14.0472 6.83711C14.3305 7.1393 14.3151 7.61392 14.013 7.89722C13.7108 8.18052 13.2361 8.16521 12.9528 7.86302L12.0021 6.84893L9.54914 9.4859C9.27979 9.77545 8.8319 9.80611 8.5256 9.55597L7.55083 8.7599L5.03033 11.2804C4.73744 11.5733 4.26256 11.5733 3.96967 11.2804Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default DigitalService;