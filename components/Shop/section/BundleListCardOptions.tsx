"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { changePageData } from "@/redux/shop";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/data/bundle-pricing-data";

type bundleCardsDetailsType = {
  title: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  activeBorderColor: string;
  hover: string;
};

type BundleListCardOptionsPropsType = {
  bundleCardsDetails: bundleCardsDetailsType[];
};

type BundlesType =
  | "brand-design"
  | "graphic-designs"
  | "digital-marketing"
  | "content-writing"
  | "all-in-one-bundle";

const BundleListCardOptions = ({
  bundleCardsDetails,
}: BundleListCardOptionsPropsType) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData,
  ).data;

  const pageViewDataTitle = pageViewData.title;

  // const bundleOptions = [
  //   "brand-design",
  //   "graphic-designs",
  //   "digital-marketing",
  //   "content-writing",
  //   "all-in-one-bundle",
  // ];

  const mapBundles = {
    "brand-design": BrandDesign,
    "graphic-designs": GraphicDesigns,
    "digital-marketing": DigitalMarketing,
    "content-writing": ContentWriting,
    "all-in-one-bundle": AllInOneBundle,
  };

  // function to handle updating the page data view
  const updatePageViewData = (title: string) => {
    title = title.toLowerCase().replaceAll(" ", "-");
    let bundle = mapBundles[title as BundlesType];
    dispatch(changePageData(bundle));
    router.push(`/shop/${title}`);
  };

  return (
    <section>
      <ul className="no-scrollbar sticky top-0 flex w-full flex-wrap justify-between gap-4 xs:max-md:sticky xs:max-md:top-60 xs:max-md:gap-5 xs:max-md:overflow-auto">
        {bundleCardsDetails.map((bundleCard) => {
          return (
            <li
              key={bundleCard.title}
              className="h-24 min-w-[12rem] xl:min-w-[13.5rem]"
            >
              <button
                onClick={() => updatePageViewData(bundleCard.title)}
                className={`${bundleCard.hover} ${
                  pageViewDataTitle === bundleCard.title
                    ? `border-2 ${bundleCard.activeBorderColor}`
                    : `border ${bundleCard.borderColor} `
                } ${
                  pageViewDataTitle === bundleCard.title
                    ? bundleCard.bgColor
                    : "bg-white"
                } group flex size-full items-center justify-between rounded-2xl p-2 transition-all`}
              >
                <ul
                  className={`${
                    pageViewDataTitle === bundleCard.title
                      ? "font-bold"
                      : "font-light"
                  } w-1/2 px-2 text-left text-base transition-all`}
                >
                  {bundleCard.title.split(" ").map((text) => (
                    <li key={text}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
                <figure
                  className={`${
                    pageViewDataTitle === bundleCard.title
                      ? "bg-white"
                      : bundleCard.bgColor
                  } relative h-full w-[40%] rounded-lg transition-all group-hover:bg-white`}
                >
                  <Image
                    fill={true}
                    src={bundleCard.icon}
                    alt={bundleCard.title}
                    className="object-cover"
                  />
                  {/* {bundleCard.icon} */}
                </figure>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BundleListCardOptions;
