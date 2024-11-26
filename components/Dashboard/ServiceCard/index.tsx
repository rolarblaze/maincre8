"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { getBundlesClass } from "@/components/NewPages/LandingPage/sections/PackagesSection/helperFunc";
import moment from "moment";
import { trackUserOrder } from "@/redux/servicesTracker/features";
import TrackServicesIcon from "@/public/svgs/TrackServicesIcon";

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
                href={`/dashboard/services/${bundleId}`}
                className={`group flex w-[32%] max-w-[25rem] min-w-80 flex-col justify-between overflow-hidden rounded-lg border !border-ash xs:max-md:w-full xs:max-md:min-w-0 xs:max-md:max-w-[300px] xs:max-md:mx-aut ${getBundlesClass[bundle_id - 1].tabClass}`}
              >
                <figure
                  className={`relative min-h-60 w-full xs:max-md:h-60 xs:max-md:min-h-0 ${getBundlesClass[bundle_id - 1].bgClass}`}
                >
                  <Image
                    src={bundle_image_link as string}
                    alt={description}
                    fill={true}
                    priority
                    className="object-cover"
                  />
                </figure>

                <div className="flex items-center justify-between p-2 font-manrope ">
                  <div>
                    <div>
                      <div className="flex items-center">
                        <p className="text-base font-semibold text-[#101928] text-nowra xs:max-md:text-base">
                          {bundle_name}
                        </p>

                        {packages.find((pkg) => pkg.package_id === id)
                          ?.package_name === "Starter Package" && (
                          <span className="leading-0 ml-2 rounded-xl bg-[#4490EA] px-2 py-[2px] text-xs font-medium text-white xs:max-md:hidden">
                            Basic
                          </span>
                        )}
                      </div>
                      <p className="hidden text-sm font-medium text-[#667185] xs:max-md:block">
                        {
                          packages.find((pkg) => pkg.package_id === id)
                            ?.package_name
                        }
                      </p>
                      <p className="text-sm font-medium text-[#667185] xs:max-md:hidden">
                        {moment(transactionDate).format("DD MMMM YYYY")}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/dashboard/my-services/track-services/${transactionId}`}
                    className="flex items-center gap-1"
                  >
                    <p className="text-nowrap text-sm xs:max-md:text-xs font-medium text-[#4490EA]">
                      Track Packages
                    </p>
                    <div className="center size-4">
                      <TrackServicesIcon />
                    </div>
                  </Link>
                </div>
              </Link>
            );
          },
        )}
    </>
  );
};

export default ServiceCard;
