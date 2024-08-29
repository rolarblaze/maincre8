import React from "react";

interface ContentServiceIconProps {
  fillColor: string;
}

const ContentServiceIcon: React.FC<ContentServiceIconProps> = ({
  fillColor,
}) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.68216 3.42537L3.08216 9.42537C3.03801 9.86689 3.38473 10.25 3.82844 10.25H8.2497V15.5H5.9997C5.58549 15.5 5.2497 15.8358 5.2497 16.25C5.2497 16.6642 5.58549 17 5.9997 17H11.9997C12.4139 17 12.7497 16.6642 12.7497 16.25C12.7497 15.8358 12.4139 15.5 11.9997 15.5H9.7497V10.25H14.171C14.6147 10.25 14.9614 9.86689 14.9172 9.42537L14.3172 3.42537C14.2789 3.04197 13.9563 2.75 13.571 2.75H4.42844C4.04313 2.75 3.7205 3.04197 3.68216 3.42537Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ContentServiceIcon;
