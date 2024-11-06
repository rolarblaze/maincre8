"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { packages } from "./constants";
import {
  getTabClass,
  getBackgroundClass,
  getUnderClass,
  getArrowClass,
  getFocusClass,
} from "./helperFunc";
import { FadeUpDiv, ResizablePanel } from "@/components";
import { FillArrowIcon } from "@/public/svgs";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import { getBundles } from "@/redux/shop/features";
import { PageViewData } from "@/redux/shop/interface";
import Image from "next/image";

const PackagesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [bundlesName, setBundlesName] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );

  useEffect(() => {
    // alert(JSON.stringify(data))
    dispatch(getBundles());

    // if (data as PageViewData[]) {
    //   let names = data.map((bundle) => bundle.bundle_name);
    //   alert(names)
    //   setdata.map((bundle) => bundle.bundle_name)(names);
    // }
    // alert(JSON.stringify(data))
  }, []);

  return (
    <FadeUpDiv className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 lg:min-h-7 lg:justify-between">
      {/* <p>p{JSON.stringify(data)}</p> */}
      {data.map(({ bundle_name, bundle_image_link, description }) => (
        <Link
          onClick={() =>
           dispatch(changePageData(bundle_name.toLowerCase().replaceAll(" ", "-")))
          }
          href={`/shop/${bundle_name.toLowerCase().replaceAll(" ", "-")}`}
          key={bundle_name}
          onFocus={() => setHovered(bundle_name)}
          onMouseEnter={() => setHovered(bundle_name)}
          onMouseLeave={() => setHovered(null)}
          className={`group flex size-fit max-w-[18%] cursor-pointer flex-col justify-start rounded-2xl border px-2 pb-2 pt-3.5 transition-colors duration-700 ease-out sm:px-2.5 sm:pb-2.5 sm:pt-5 ${getFocusClass(
            bundle_name,
            data.map((bundle) => bundle.bundle_name),
          )} ${getTabClass(
            bundle_name,
            data.map((bundle) => bundle.bundle_name),
          )} `}
        >
          <h3 className="box-content h-12 text-wrap px-2.5 pb-5 text-sm font-bold leading-[1.6875rem] text-grey900 sm:text-xl">
            {bundle_name}
          </h3>

          <div>
            <figure
              className={`relative flex w-36 items-center justify-center overflow-hidden rounded-[0.625rem] transition-colors duration-700 ease-out sm:h-40 sm:w-[12.25rem] ${getBackgroundClass(
                bundle_name,
                data.map((bundle) => bundle.bundle_name),
              )} `}
            >
              <Image
                fill={true}
                src={bundle_image_link as string}
                alt={description}
                className="object-cover object-top"
              />
            </figure>

            <ResizablePanel className="w-full"> 
              {hovered === bundle_name && (
                <div className="mt-2 flex w-full items-center justify-between px-2 pb-2">
                  <p
                    className={`text-xs font-semibold sm:text-sm ${getUnderClass(
                      bundle_name,
                      data.map((bundle) => bundle.bundle_name),
                    )}`}
                  >
                    {description}
                  </p>

                  <FillArrowIcon
                    fillColor={getArrowClass(
                      bundle_name,
                      data.map((bundle) => bundle.bundle_name),
                    )}
                  />
                </div>
              )}
            </ResizablePanel>
          </div>
        </Link>
      ))}
    </FadeUpDiv>
  );
};
export default PackagesSection;
