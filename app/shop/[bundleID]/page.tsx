"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
import { addAlert } from "@/redux/alerts";

const Shop = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const bundleParam = useParams<{ bundleID: string }>();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );

  const typeCastPageViewData = pageViewData as PageViewData;

  const bundleIDOptions = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    // if the redux store for all bundles data is empty, fetch from endpoint
    if (bundlesData.length === 0) {
      dispatch(getBundles());
      return;
    }

    const bundleID = bundleParam.bundleID;

    const selectedBundle = bundlesData.find(
      (bundle) => bundle.bundle_id.toString() === bundleID,
    );

    if (selectedBundle) {
      dispatch(changePageData(bundleID));
    } else {
      router.push("/shop/1");
    }
  }, [bundlesData, bundleParam]);

  if (pageViewData === "") {
    return <p>No data</p>;
  }

  return (
    <main className="space-y-20 xs:max-md:space-y-10">
      {/* Selected Bundle Banner Preview */}
      <BundlePreviewBanner
        title={typeCastPageViewData.bundle_name}
        message={typeCastPageViewData.description}
        body={typeCastPageViewData.content}
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
