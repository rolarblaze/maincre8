"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { getBundlesClass } from "@/components/NewPages/LandingPage/sections/PackagesSection/helperFunc";
import moment from "moment";
import { trackUserOrder } from "@/redux/servicesTracker/features";

interface ServiceCardProps {
  bundleId?: number;
  category: string;
  title: string;
  description?: string;
  color: string;
  id: number;
  isPaid?: boolean;
  transactionId?: number;
  transactionDate?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  bundleId,
  category,
  title,
  description,
  color,
  id,
  isPaid,
  transactionId,
  transactionDate,
}) => {
  const dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const linkUrl = isPaid
    ? `/dashboard/my-services/track-services/${transactionId}`
    : `/dashboard/services/${bundleId}`;

  return (
    <>
      {bundlesData
        .filter((bundle) => bundle.bundle_id === bundleId)
        .map(
          ({
            bundle_id,
            bundle_image_link,
            bundle_name,
            description,
            packages,
          }) => {
            return (
              <Link
                key={bundle_id}
                href={linkUrl}
                className={`group flex w-[30%] min-w-80 flex-col justify-between overflow-hidden rounded-lg border !border-ash xs:max-md:w-[45%] xs:max-md:min-w-64 ${getBundlesClass[bundle_id - 1].tabClass}`}
              >
                <figure
                  className={`relative min-h-60 w-full xs:max-md:h-40 xs:max-md:min-h-0 ${getBundlesClass[bundle_id - 1].bgClass}`}
                >
                  <Image
                    src={bundle_image_link as string}
                    alt={description}
                    fill={true}
                    priority
                    className="object-cover"
                  />
                </figure>

                <div className="flex items-center justify-between p-4 font-manrope">
                  <div>
                    <p className="text-lg font-semibold text-[#101928] flex flex-nowrap items-center">
                      {bundle_name}{" "}
                      {packages.find((pkg) => pkg.package_id === id)
                        ?.package_name === "Starter Package" && (
                        <span className=" leading-0 ml-2 rounded-xl bg-[#4490EA] px-2 py-[2px] text-xs font-medium text-white">
                          Basic
                        </span>
                      )}
                    </p>
                    <p className="text-sm font-medium text-[#667185]">
                      {
                        packages.find((pkg) => pkg.package_id === id)
                          ?.package_name
                      }
                    </p>
                    <p className="text-sm font-medium text-[#667185]">
                      {moment(transactionDate).format("DD MMMM YYYY")}
                    </p>
                  </div>
                  <div>
                    <p className="xs:max-sm:hidden text-nowrap text-sm font-medium text-[#4490EA]">
                      See plan
                    </p>
                  </div>
                </div>
              </Link>
            );
          },
        )}
    </>
  );
};

export default ServiceCard;
