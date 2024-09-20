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
    <div className={`md:py-5 space-y-8 ${className}`}>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={90}
        height={90}
        className="w-[90px] h-[90px]"
      />
      <div className="space-y-4">
        <h4 className="text-grey900 font-semibold">{title}</h4>
        <p className="text-grey500">{body}</p>
      </div>
    </div>
  );
}

export default WhyCard;
