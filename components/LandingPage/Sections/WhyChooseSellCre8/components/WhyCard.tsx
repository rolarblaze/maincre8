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
      className={`min-h-[298px] w-[16rem] md:min-h-[386px] md:max-h-none md:py-5 space-y-8 flex-shrink-0 ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={90}
        height={90}
        className="w-[90px] h-[90px]"
      />
      <div className="space-y-4">
        <h4 className="text-grey900 font-semibold text-lg md:text-2xl">
          {title}
        </h4>
        <p className="text-grey500 text-base">{body}</p>
      </div>
    </div>
  );
}

export default WhyCard;
