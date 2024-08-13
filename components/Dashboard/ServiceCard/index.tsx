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
      className="max-w-[388px] w-full rounded-lg border border-grey300"
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
        <div
          className="absolute top-[8%] right-[-3%] bg-primary500 text-white text-sm font-semibold py-1 px-4 z-20"
          style={{ backgroundColor: color }}
        >
          {category}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-grey900">{title}</h4>
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
