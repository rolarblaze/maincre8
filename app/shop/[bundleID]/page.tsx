"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BundlePreviewBanner from "@/components/Shop/section/BundlePreviewBanner";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import NotSureBanner from "@/components/Shop/section/NotSureBanner";
import WhyChooseUs from "@/components/Shop/section/WhyChooseUs";
import BundleAddOns from "@/components/Shop/section/BundleAddOns";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import { PageViewData } from "@/redux/shop/interface";
import { getBundles } from "@/redux/shop/features";
import ShopWhyChooseSellCre8Data from "@/components/Shop/data/whyChooseUs";

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
  const bundleId = typeCastPageViewData.bundle_id;

  useEffect(() => {
    // if the redux store for all bundles data is empty, fetch from endpoint
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }

    const bundleID = bundleParam.bundleID;

    if (bundlesData.length >= 1) {
      let selectedBundle = bundlesData.find(
        (bundle) => bundle.bundle_id.toString() === bundleID,
      );
      if (selectedBundle) {
        dispatch(changePageData(bundleID));
      } else {
        let redirectID = bundlesData[0].bundle_id;
        router.push(`/shop/${redirectID}`);
      }
    }
  }, [bundlesData.length]);

  // Loading States
  if (pageViewData === "") {
    return (
      <div className="space-y-4">
        {/* Preview Banner Loading */}
        <p className="shimmer h-[40vh] w-full rounded-3xl"></p>
        {/*   Packages Plan Loading */}
        <ul className="no-scrollbar shimmer flex w-full justify-between gap-6 overflow-auto border-slate-200 text-transparent xs:max-md:gap-3">
          {[1, 2, 3].map((dummy) => {
            return (
              <li
                key={dummy}
                className={`shimmer relative flex w-1/3 min-w-[350px] flex-col justify-between gap-10 rounded-3xl border border-[#EEEFF2] border-slate-100 p-8 text-transparent xs:max-md:min-w-[350px]`}
              >
                <div className="w-full">
                  <div className={`space-y-5 border-b pb-6 text-left`}>
                    <div className="space-y-2">
                      <p className={`p-3 text-2xl font-semibold leading-7`}>
                        1
                      </p>
                      <p
                        className={`shimmer border-slate-100 p-3 text-base font-normal leading-6 text-[#718096] text-transparent`}
                      >
                        1
                      </p>
                    </div>
                    <div className="shimmer border-slate-100 p-3 text-transparent">
                      1
                    </div>
                  </div>
                  <ul className={`mt-5 space-y-2`}>
                    {[1, 2, 3].map((dummy) => (
                      <li
                        key={dummy}
                        className="shimmer border-slate-100 p-2 text-transparent"
                      >
                        {dummy}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shimmer h-20 w-full rounded-xl border-slate-100 text-transparent"></div>
              </li>
            );
          })}
        </ul>
        {/* Not Sure Banner Loading */}
        <section className="shimmer flex flex-wrap items-center justify-between overflow-hidden rounded-2xl border border-slate-200 p-10 text-transparent xs:max-lg:gap-5">
          <div className="w-[80%] space-y-2">
            <h2 className="shimmer w-full border-slate-100 text-5xl font-medium text-transparent xs:max-md:text-3xl">
              1
            </h2>

            <p className="shimmer w-full border-slate-100 text-lg font-light text-transparent xs:max-md:text-base">
              1
            </p>
          </div>

          <div className="inline-block w-40">
            <div className="shimmer h-20 w-full rounded-xl border-slate-100 text-transparent"></div>
          </div>
        </section>
        {/* Why Choose Us Loading */}
        <ul className="no-scrollbar flex justify-between gap-y-16 xs:max-md:flex-nowrap xs:max-md:gap-5 xs:max-md:overflow-scroll">
          {[1, 2, 3].map((dummy) => {
            return (
              <li
                key={dummy}
                className="w-[30%] space-y-4 xs:max-md:min-w-[90%]"
              >
                <figure className="center shimmer relative size-20 rounded-full border-slate-100 text-transparent"></figure>
                <h4 className="shimmer border-slate-100 text-lg font-extrabold text-transparent">
                  1
                </h4>
                <p className="shimmer h-28 border-slate-100 text-base font-normal text-transparent">
                  1
                </p>
              </li>
            );
          })}
        </ul>
        {/* Bundle Add Ons Loading */}
        <section className="shimmer rounded-2xl border border-slate-200 text-transparent xs:max-md:pb-5">
          <div className="relative z-10 flex flex-col justify-between gap-5 p-8 xs:max-md:p-0">
            <div className="mt-5 space-y-5 xs:max-md:mt-2 xs:max-md:space-y-3 xs:max-md:p-5">
              <h2 className="shimmer h-10 space-y-2 border-slate-100 text-transparent xs:max-md:space-y-0"></h2>
              <p className="shimmer h-40 w-[80%] border-slate-100 text-lg font-light text-transparent xs:max-md:w-[90%]">
                1
              </p>
            </div>

            <div className="no-scrollbar flex w-full flex-wrap items-center justify-center gap-x-[2%] gap-y-5 xs:max-md:flex-nowrap xs:max-md:justify-start xs:max-md:gap-x-5 xs:max-md:overflow-scroll">
              {[1, 2, 3, 4].map((dummy) => {
                return (
                  <div
                    key={dummy}
                    className="shimmer flex aspect-square min-h-[200px] w-[23%] min-w-[23%] flex-col items-center justify-between rounded-2xl border-slate-200 bg-white px-5 py-10 text-transparent xs:max-md:max-h-[300px] xs:max-md:min-w-[300px] xs:max-md:first:ml-5 xs:max-md:last:mr-5"
                  >
                    <div className="center mx-auto aspect-square w-1/3 rounded-full">
                      <figure className="shimmer relative size-10 border border-slate-100 text-transparent"></figure>
                    </div>
                    <div className="space-y-1">
                      <p className="shimmer w-full border border-slate-100 text-center text-xs font-semibold uppercase text-transparent">
                        1
                      </p>
                      <p className="shimmer w-full border border-slate-100 text-center text-xs font-normal text-transparent">
                        1
                      </p>
                      <p className="shimmer w-full border border-slate-100 text-center text-xs font-normal text-transparent">
                        1
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
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
      <BundlePackagesPlan
        packagesPlans={typeCastPageViewData.packages}
        bundle_id={bundleId}
      />

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
