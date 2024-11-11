"use client";
import { useState } from "react";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/data/bundle-pricing-data";
import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
import bundleCardsDetails from "@/components/Shop/data/bundleCardDetails";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";

const SwitchPackageSection = () => {
  const [pageViewData, setPageViewData] = useState(BrandDesign);
  const updatePageViewData = (title: string) => {
    switch (title) {
      case "Brand Design":
        setPageViewData(BrandDesign);
        break;
      case "Graphic Designs":
        setPageViewData(GraphicDesigns);
        break;
      case "Digital Marketing":
        setPageViewData(DigitalMarketing);
        break;
      case "Content Writing":
        setPageViewData(ContentWriting);
        break;
      case "All-In-One Bundle":
        setPageViewData(AllInOneBundle);
        break;
      default:
        break;
    }
  };

  return (
    <section className="w-full space-y-10 rounded-3xl bg-white px-[3.75rem] py-[3.75rem]">
      <h2 className="text-center text-3.5xl font-semibold">
        Choose the Right Plan for Your Business
      </h2>

      <BundleListCardOptions
        bundleCardsDetails={bundleCardsDetails}
        pageViewDataTitle={pageViewData.title}
        updatePageViewData={updatePageViewData}
      />

      {/* Selected Bundle Packages Plan */}
      <BundlePackagesPlan packagesPlans={pageViewData.packagePlans} />
    </section>
  );
};
export default SwitchPackageSection;
