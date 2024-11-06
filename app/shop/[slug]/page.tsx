"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import ShopWhyChooseSellCre8Data from "@/components/Shop/data/whyChooseUs";
import BundlePreviewBanner from "@/components/Shop/section/BundlePreviewBanner";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import NotSureBanner from "@/components/Shop/section/NotSureBanner";
import WhyChooseUs from "@/components/Shop/section/WhyChooseUs";
import BundleAddOns from "@/components/Shop/section/BundleAddOns";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import { PageViewData } from "@/redux/shop/interface";
import { getBundles } from "@/redux/shop/features";

const Shop = () => {
  const dispatch = useAppDispatch();
  const bundleParam = useParams<{ slug: string }>();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );

  const typeCastPageViewData = pageViewData as PageViewData;

  const bundleOptions = [
    "ultimate-marketing",
    "brand-identity-development",
    "graphic-design",
    "digital-marketing",
    "content-creation",
  ];

  useEffect(() => {
    // if the redux store for all bundles data is empty, fetch from endpoint
    if (bundlesData.length === 0) {
      dispatch(getBundles());
      return
    }

    let bundleName = bundleParam.slug;
    if (bundleOptions.includes(bundleName)) {
      dispatch(changePageData(bundleName));
    } else {
      window.location.href = "/shop/ultimate-marketing";
    }
  }, []);

  if (pageViewData === "") {
    return <p>No data</p>;
  }

  return (
    <main className="space-y-20 xs:max-md:space-y-10">
      {/* Selected Bundle Banner Preview */}
      <BundlePreviewBanner
        title={typeCastPageViewData.bundle_name}
        message={typeCastPageViewData.description}
        body={
          "Apart from development and production environments, there is a 3rd option available: test. In the same way you can set defaults for development or production environments, you can do the same with a .env.test file for the testing environment (though this one is not as common as the previous two). Next.js will not load environment variables from .env.development or .env.production in the testing environment."
        }
        icon={typeCastPageViewData.bundle_image_link as string}
      />

      {/* Selected Bundle Packages Plan */}
      <BundlePackagesPlan packagesPlans={typeCastPageViewData.packages} />

      {/* Not sure of the right plan banner */}
      <NotSureBanner />

      {/* Why choose us section */}
      <WhyChooseUs reasons={ShopWhyChooseSellCre8Data} />

      {/* Selected Bundle Addons Section */}
      <BundleAddOns
        title={typeCastPageViewData.bundle_name}
        addOns={typeCastPageViewData.addons}
      />
    </main>
  );
};
export default Shop;
