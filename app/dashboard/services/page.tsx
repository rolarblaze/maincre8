"use client";

import Link from "next/link";
import Image from "next/image";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { getBundles } from "@/redux/shop/features";
import { getBundlesClass } from "@/components/NewPages/LandingPage/sections/PackagesSection/helperFunc";

const Services = () => {
  let dispatch = useAppDispatch();

  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );

  useEffect(() => {
    // if the redux store for all bundles data is empty, fetch from endpoint
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-6 pl-6 py-10 xs:max-md:px-2">
      {bundlesData.map(
        ({ bundle_id, bundle_image_link, bundle_name, description }) => {
          return (
            <Link
              key={bundle_id}
              href={`/dashboard/services/${bundle_id}`}
              className={`group w-[30%] min-w-60 overflow-hidden rounded-lg border border-ash xs:max-md:w-[45%] xs:max-md:min-w-64 xs:max-md:mx-auto ${getBundlesClass[bundle_id - 1].tabClass}`}
            >
              <figure
                className={`relative min-h-60 w-full ${getBundlesClass[bundle_id - 1].bgClass}`}
              >
                <Image
                  src={bundle_image_link as string}
                  alt={description}
                  fill={true}
                  priority
                  className="object-cover"
                />
              </figure>

              <div className="p-4 font-manrope *:leading-[150%]">
                <h4 className="text-lg font-semibold text-grey900">
                  {bundle_name}
                </h4>
                <p className="text-sm font-medium text-grey500">
                  {description}
                </p>
              </div>
            </Link>
          );
        },
      )}
    </div>
  );
};
export default Services;
