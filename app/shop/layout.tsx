"use client";

import bundleCardsDetails from "@/components/Shop/data/bundleCardsDetails";
import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
import { useParams, useRouter } from "next/navigation";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/data/bundle-pricing-data";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bundleParam = useParams<{ slug: string }>();
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData,
  ).data;

  // values to check against whether the route is available or not
  const bundleOptions = [
    "brand-design",
    "graphic-designs",
    "digital-marketing",
    "content-writing",
    "all-in-one-bundle",
  ];

  // function to handle updating the page data view
  const updatePageViewData = (title: string) => {
    title = title.toLowerCase().replaceAll(" ", "-");
    switch (title) {
      case bundleOptions[0]:
        dispatch(changePageData(BrandDesign));
        break;
      case bundleOptions[1]:
        dispatch(changePageData(GraphicDesigns));
        break;
      case bundleOptions[2]:
        dispatch(changePageData(DigitalMarketing));
        break;
      case bundleOptions[3]:
        dispatch(changePageData(ContentWriting));
        break;
      case bundleOptions[4]:
        dispatch(changePageData(AllInOneBundle));
        break;
      default:
        router.push(`/shop/graphic-designs`);
        break;
    }
    router.push(`/shop/${title}`);
  };

  return (
    <main className="space-y-20 px-5 pb-20 xs:max-md:space-y-10 xs:max-md:px-0 xs:max-md:pb-10">
      <h1 className="mt-20 w-full text-center text-3xl font-semibold leading-9 xs:max-md:text-2xl">
        Choose the Right Plan for Your Business
      </h1>

      {/* Bundles Card-List Options To Choose From */}
      <BundleListCardOptions
        bundleCardsDetails={bundleCardsDetails}
        pageViewDataTitle={pageViewData.title}
        updatePageViewData={updatePageViewData}
      />

      <div>{children}</div>
    </main>
  );
}
