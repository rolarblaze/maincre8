"use client";

import { useEffect } from "react";
import { useParams} from "next/navigation";
import ShopWhyChooseSellCre8Data from "@/components/Shop/Data/whyChooseUs";
import BundlePreviewBanner from "@/components/Shop/section/BundlePreviewBanner";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import NotSureBanner from "@/components/Shop/section/NotSureBanner";
import WhyChooseUs from "@/components/Shop/section/WhyChooseUs";
import BundleAddOns from "@/components/Shop/section/BundleAddOns";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/Data/bundle-pricing-data";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";

type BundlesType =
  | "brand-design"
  | "graphic-designs"
  | "digital-marketing"
  | "content-writing"
  | "all-in-one-bundle";


const Shop = () => {
  const dispatch = useAppDispatch();
  const bundleParam = useParams<{ slug: string }>();
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData,
  ).data;

  const bundleOptions = [
    "brand-design",
    "graphic-designs",
    "digital-marketing",
    "content-writing",
    "all-in-one-bundle",
  ];
  const mapBundles = {
    "brand-design": BrandDesign,
    "graphic-designs": GraphicDesigns,
    "digital-marketing": DigitalMarketing,
    "content-writing": ContentWriting,
    "all-in-one-bundle": AllInOneBundle,
  };

  const updatePageViewData = (title: string) => {
    let bundle = mapBundles[title as BundlesType];
    dispatch(changePageData(bundle));
  };

  useEffect(() => {
    let bundleName = bundleParam.slug;
    if (bundleOptions.includes(bundleName)) {
      updatePageViewData(bundleName);
    } else {
      window.location.href = "/shop/brand-design";
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
