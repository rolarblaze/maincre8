"use client";

import { AppWrapper } from "@/components";
import bundleCardsDetails from "@/components/Shop/data/bundleCardsDetails";
import ShopWhyChooseSellCre8Data from "@/components/Shop/data/whyChooseUs";
import { useState } from "react";
import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
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
} from "@/components/Shop/data/bundle-pricing-data";

const Shop = () => {
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
    <AppWrapper type="">
      <main className="px-10 pb-20 xs:max-md:px-0 space-y-20 xs:max-md:space-y-10 bg-red-40">
        <h1 className="font-semibold text-3xl xs:max-md:text-3xl w-full leading-9 text-center">
          Choose the Right Plan for Your Business
        </h1>

        {/* Bundles Card-List Options To Choose From */}
       <BundleListCardOptions bundleCardsDetails={bundleCardsDetails} pageViewDataTitle={pageViewData.title} updatePageViewData={updatePageViewData} />

        {/* Selected Bundle Banner Preview */}
        <BundlePreviewBanner title={pageViewData.title} message={pageViewData.message} body={pageViewData.body} icon={pageViewData.icon} />

        {/* Selected Bundle Packages Plan */}
        <BundlePackagesPlan packagesPlans={pageViewData.packagePlans} />

        {/* Not sure of the right plan banner */}
        <NotSureBanner />

        {/* Why choose us section */}
       <WhyChooseUs reasons={ShopWhyChooseSellCre8Data} />

        {/* Selected Bundle Addons Section */}
       <BundleAddOns title={pageViewData.title} addOns={pageViewData.addons} />

      </main>
    </AppWrapper>
  );
};
export default Shop;
