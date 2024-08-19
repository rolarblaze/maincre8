import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyState = ({
  imgSrc,
  text,
  link,
  to,
  alt = "Empty state",
}: {
  imgSrc: string;
  alt?: string;
  text: string;
  link?: string;
  to?: string;
}) => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col max-w-max justify-center items-center ">
        <Image
          src={imgSrc} 
          alt={alt}
          width={190}
          height={160}
          className="mb-5"
        />

        <p className="text-grey600 font-semibold text-lg mb-2">{text}</p>

        {link && to && (
          <Link href={to} className="text-sm text-primary500">
            {link}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
