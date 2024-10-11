"use client";

import { AppWrapper } from "@/components";
import bundleCardsDetails from "@/components/Shop/data/bundleCardsDetails";
import ShopWhyChooseSellCre8Data from "@/components/Shop/data/whyChooseUs";
import { useEffect, useState } from "react";
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
import { useParams } from "next/navigation";

const Shop = () => {
  const bundleParam = useParams<{ slug: string }>();
  const [pageViewData, setPageViewData] = useState(BrandDesign);
  const bundleOptions = [
    "Brand Design",
    "Graphic Designs",
    "Digital Marketing",
    "Content Writing",
    "All-In-One Bundle",
  ];
  const updatePageViewData = (title: string) => {
    switch (title) {
      case bundleOptions[0]:
        setPageViewData(BrandDesign);
        break;
      case bundleOptions[1]:
        setPageViewData(GraphicDesigns);
        break;
      case bundleOptions[2]:
        setPageViewData(DigitalMarketing);
        break;
      case bundleOptions[3]:
        setPageViewData(ContentWriting);
        break;
      case bundleOptions[4]:
        setPageViewData(AllInOneBundle);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let bundleName = bundleParam.slug.replaceAll("%20", " ");
    if (bundleOptions.includes(bundleName)) {
      updatePageViewData(bundleName);
    } else {
      window.location.href = "/shop/Brand Design";
    }
  }, []);

  return (
    <AppWrapper type="">
      <main className="space-y-20 px-10 pb-20 xs:max-md:space-y-10 xs:max-md:px-0 xs:max-md:pb-10">
        <h1 className="w-full text-center text-3xl font-semibold leading-9 xs:max-md:text-2xl">
          Choose the Right Plan for Your Business
        </h1>

        {/* Bundles Card-List Options To Choose From */}
        <BundleListCardOptions
          bundleCardsDetails={bundleCardsDetails}
          pageViewDataTitle={pageViewData.title}
          updatePageViewData={updatePageViewData}
        />

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
    </AppWrapper>
  );
};
export default Shop;
