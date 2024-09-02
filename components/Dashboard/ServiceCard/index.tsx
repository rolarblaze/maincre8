import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  category: string;
  title: string;
  description?: string;
  color: string;
  id: number;
  isPaid?: boolean;
  transactionId?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  title,
  description,
  color,
  id,
  isPaid,
  transactionId,
}) => {
  const linkUrl = isPaid
    ? `/dashboard/services/${id}/?transactionId=${transactionId}&tab=my-package`
    : `/dashboard/services/${id}/?tab=package-info`;

  return (
    <Link
      className="w-full rounded-lg"
      href={linkUrl}
    >
      <div className="relative">
        <Image
          src="/images/seo-image.svg"
          alt={title}
          width={358}
          height={240}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[8%] right-[-3%] flex items-center z-20">
          {/* Triangle */}
          <div className="w-0 h-0 border-l-[14px] border-l-transparent border-y-[14px] border-y-primary500 border-r-[14px] border-r-primary500"></div>
          {/* Label */}
          <div
            className={`text-white text-sm font-semibold py-1 pr-4 pl-6 bg-primary500 ${color}`}
          >
            {category}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-grey900">{title}</h4>
        <p className="text-sm text-grey500 mb-4">{description}</p>
        {isPaid && (
          <span className="font-semibold text-primary500 text-sm">
            Track package
          </span>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
