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
        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#0B0B0B" />
        <g clip-path="url(#clip0_3749_25594)">
          <path
            d="M17.4256 14.5351L22.6521 8.58572H21.414L16.874 13.7504L13.2505 8.58572H9.07031L14.5508 16.3964L9.07031 22.6345H10.3084L15.0997 17.1792L18.9271 22.6345H23.1073M10.7552 9.5H12.6572L21.4131 21.7651H19.5106"
            fill="#0B0B0B"
          />
        </g>
        <defs>
          <clipPath id="clip0_3749_25594">
            <rect
              width="14.037"
              height="14.0488"
              fill="white"
              transform="translate(9.07031 8.58572)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export default XIcon;
