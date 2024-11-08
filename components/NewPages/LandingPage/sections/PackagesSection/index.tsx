"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBundlesClass, getUnderText } from "./helperFunc";
import { FadeUpDiv, ResizablePanel } from "@/components";
import { FillArrowIcon } from "@/public/svgs";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import { getBundles } from "@/redux/shop/features";
import Image from "next/image";

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
    // DESKTOP FIRST styling
    <FadeUpDiv className="flex flex-wrap items-start justify-center gap-4 xs:max-md:gap-0 xs:max-md:justify-between">
      {bundlesData.map(
        ({ bundle_name, bundle_id, bundle_image_link, description }) => (
          <Link
            onClick={() =>
              dispatch(
                changePageData(bundle_name.toLowerCase().replaceAll(" ", "-")),
              )
            }
            href={`/shop/${bundle_id}`}
            key={bundle_name}
            onFocus={() => setHovered(bundle_name)}
            onMouseEnter={() => setHovered(bundle_name)}
            onMouseLeave={() => setHovered(null)}
            className={`group flex size-fit w-[18%] cursor-pointer flex-col justify-start rounded-2xl border px-2 pb-2 pt-3.5 transition-colors duration-700 ease-out xs:max-md:w-[48%] sm:px-2.5 sm:pb-2.5 sm:pt-5 ${getBundlesClass[bundle_id - 1].focusClass} ${getBundlesClass[bundle_id - 1].tabClass} `}
          >
            <h3 className="box-content h-12 text-wrap px-2.5 pb-5 text-sm font-bold leading-[1.6875rem] text-grey900 sm:text-xl">
              {bundle_name}
            </h3>

            <div>
              <figure
                className={`relative h-40 w-full overflow-hidden rounded-[0.625rem] transition-colors duration-700 ease-out xs:max-md:h-32  ${getBundlesClass[bundle_id - 1].bgClass} `}
              >
                <Image
                  fill={true}
                  src={bundle_image_link as string}
                  alt={description}
                  className="object-cover xs:max-md:px-2"
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
      )}
    </FadeUpDiv>
  );
};
export default PackagesSection;
