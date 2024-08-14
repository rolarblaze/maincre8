import React from "react";

const BlueModalArrowRight: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289L15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893C13.9024 0.683418 13.9024 1.31658 14.2929 1.70711L16.5858 4L1 4C0.447716 4 0 4.44772 0 5C0 5.55229 0.447716 6 1 6L16.5858 6L14.2929 8.29289C13.9024 8.68342 13.9024 9.31658 14.2929 9.70711C14.6834 10.0976 15.3166 10.0976 15.7071 9.70711L19.7071 5.70711Z"
        fill="#1574E5"
      />
    </svg>
  );
};

export default BlueModalArrowRight;
