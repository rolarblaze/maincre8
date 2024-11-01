import Image from "next/image";
import React from "react";

function WhyCard({
  iconSrc,
  iconAlt,
  title,
  body,
  className,
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`min-h-[18.63rem] w-full max-w-[20.9rem] flex-shrink-0 space-y-8 md:max-h-none md:min-h-[24.1rem] md:max-w-[17.5rem] md:py-5 ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={90}
        height={90}
        className="h-[90px] w-[90px]"
      />
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-grey900 md:text-2xl">
          {title}
        </h4>
        <p className="text-base text-grey500">{body}</p>
      </div>
    </div>
  );
}

export default WhyCard;
