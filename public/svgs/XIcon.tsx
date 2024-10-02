import Link from "next/link";
import React from "react";

function XIcon({ href }: { href: string }) {
  return (
    <Link href={href}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5455_24100)">
          <path
            d="M18.2849 14.172L27.2209 4H25.1041L17.3417 12.8304L11.1465 4H3.99927L13.3697 17.3544L3.99927 28.02H6.11607L14.3081 18.6928L20.8521 28.02H27.9993M6.88007 5.5632H10.1321L25.1025 26.5336H21.8497"
            fill="#62A2EE"
          />
        </g>
        <defs>
          <clipPath id="clip0_5455_24100">
            <rect
              width="24"
              height="24.0201"
              fill="white"
              transform="translate(4 4)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export default XIcon;
