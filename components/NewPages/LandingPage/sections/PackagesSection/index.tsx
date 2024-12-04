"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBundlesClass } from "./helperFunc";
import { FadeUpDiv, ResizablePanel } from "@/components";
import { FillArrowIcon } from "@/public/svgs";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { getBundles } from "@/redux/shop/features";
import Image from "next/image";
import HomeBundleListLoadingState from "@/components/Shop/components/HomeBundleListLoadingState";

const PackagesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );

  useEffect(() => {
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }
  }, []);

  return (
    // DESKTOP FIRST STYLING WAS USED HERE
    <FadeUpDiv className="flex gap-4 xs:max-md:flex-wrap xs:max-md:justify-start xs:max-md:gap-4">
      {bundlesData.length === 0 ? (
        <HomeBundleListLoadingState />
      ) : (
        bundlesData.map(
          ({ bundle_name, bundle_id, bundle_image_link, description }) => (
            <Link
              href={`/shop/${bundle_id}`}
              key={bundle_name}
              onFocus={() => setHovered(bundle_name)}
              onMouseEnter={() => setHovered(bundle_name)}
              onMouseLeave={() => setHovered(null)}
              className={`group flex size-fit h-full xs:h-auto w-[20%] xs:max-w-[180px] md:max-w-full xs:w-full cursor-pointer flex-col justify-between rounded-2xl border px-2 pb-2 pt-3.5 transition-colors duration-700 ease-out ${getBundlesClass[bundle_id - 1].focusClass} ${getBundlesClass[bundle_id - 1].tabClass} `}
            >
              <h3 className="box-content text-wrap bg-opacity-30 px-2.5 pb-5 text-xl font-bold leading-[1.6875rem] text-grey900 xs:max-lg:text-lg">
                {bundle_name}
              </h3>

              <div>
                <figure
                  className={`relative aspect-square w-full overflow-hidden rounded-[0.625rem] transition-colors duration-700 ease-out xs:max-md:max-h-[250px] ${getBundlesClass[bundle_id - 1].bgClass} `}
                >
                  <Image
                    fill={true}
                    src={bundle_image_link as string}
                    alt={description}
                    className="object-cover object-bottom"
                  />
                </figure>

                <ResizablePanel className="w-full">
                  {hovered === bundle_name && (
                    <div className="mt-2 flex w-full items-center justify-between px-2 pb-2">
                      <p
                        className={`text-xs font-semibold capitalize sm:text-sm ${getBundlesClass[bundle_id - 1].underClass}`}
                      >
                        {getBundlesClass[bundle_id - 1].underText}
                      </p>

                      <FillArrowIcon
                        fillColor={getBundlesClass[bundle_id - 1].arrowClass}
                      />
                    </div>
                  )}
                </ResizablePanel>
              </div>
            </Link>
          ),
        )
      )}
    </FadeUpDiv>
  );
};
export default PackagesSection;
