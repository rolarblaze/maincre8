"use client";

import ShopWhyChooseSellCre8Data from "@/components/Shop/data/whyChooseUs";
import { useEffect } from "react";
import BundlePreviewBanner from "@/components/Shop/section/BundlePreviewBanner";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import NotSureBanner from "@/components/Shop/section/NotSureBanner";
import WhyChooseUs from "@/components/Shop/section/WhyChooseUs";
import BundleAddOns from "@/components/Shop/section/BundleAddOns";
import { useParams } from "next/navigation";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/data/bundle-pricing-data";

const Shop = () => {
  const dispatch = useAppDispatch();
  const bundleParam = useParams<{ slug: string }>();

  // values to check against whether the route is available or not
  const bundleOptions = [
    "brand-design",
    "graphic-designs",
    "digital-marketing",
    "content-writing",
    "all-in-one-bundle",
  ];

  // gets the current page view data
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData,
  ).data;

  // function to handle updating the page data view
  const updatePageViewData = (title: string) => {
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
        break;
    }
  };

  // loads up the first page data view
  useEffect(() => {
    let bundleName = bundleParam.slug;
    if (bundleOptions.includes(bundleName)) {
      updatePageViewData(bundleName);
    } else {
      window.location.href = "/shop/Brand-Design";
    }
  }, []);

  return (
    <main className="space-y-20 xs:max-md:space-y-10">
      {/* Selected Bundle Banner Preview */}
      <BundlePreviewBanner
        title={pageViewData.title}
        message={pageViewData.message}
        body={pageViewData.body}
        icon={pageViewData.icon}
      />

      {/* Selected Bundle Packages Plan */}
      <BundlePackagesPlan packagesPlans={pageViewData.packagePlans} />

      {/* Not sure of the right plan banner */}
      <NotSureBanner />

      {/* Why choose us section */}
      <WhyChooseUs reasons={ShopWhyChooseSellCre8Data} />

      {/* Selected Bundle Addons Section */}
      <BundleAddOns title={pageViewData.title} addOns={pageViewData.addons} />
    </main>
  );
};
export default Shop;
