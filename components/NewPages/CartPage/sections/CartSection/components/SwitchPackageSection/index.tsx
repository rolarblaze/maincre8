"use client";

import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import { RootState, useAppSelector } from "@/redux/store";
import { PageViewData } from "@/redux/shop/interface";

const SwitchPackageSection = () => {
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );

  const typeCastPageViewData = pageViewData as PageViewData;

  return (
    <section className="no-scrollbar max-h-[95vh] max-w-[95vw] w-full space-y-10 overflow-auto rounded-3xl bg-white px-[3.75rem] xs:max-md:px-5 py-[3.75rem]">
      <h2 className="text-center text-3.5xl font-semibold">
        Choose the Right Plan for Your Business
      </h2>

      {/* Bundle Option */}
      <BundleListCardOptions redirect={false} />

      {/* Selected Bundle Packages Plan */}
      <BundlePackagesPlan packagesPlans={typeCastPageViewData.packages} />
    </section>
  );
};
export default SwitchPackageSection;
