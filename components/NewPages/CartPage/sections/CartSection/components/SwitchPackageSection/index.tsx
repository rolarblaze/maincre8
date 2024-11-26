"use client";

import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import { useAppSelector } from "@/redux/store";

interface SwitchPackageSectionProps {
  onClose: () => void;
  cartItemId: number;
}


const SwitchPackageSection: React.FC<SwitchPackageSectionProps> = ({ onClose, cartItemId }) => {
  const { selectedBundle } = useAppSelector((state) => state.pageViewData);

  if (!selectedBundle) return null;

  return (
    <section className="no-scrollbar max-h-[95vh] max-w-[95vw] w-full space-y-10 overflow-auto rounded-3xl bg-white px-[3.75rem] xs:max-md:px-5 py-[3.75rem]">
      <h2 className="text-center text-3.5xl font-semibold">
        Choose the Right Plan for Your Business
      </h2>

      {/* Bundle Option */}
      {/* <BundleListCardOptions redirect={false} /> */}

      {/* Selected Bundle Packages Plan */}
      <BundlePackagesPlan
        isSwitching={true}
        packagesPlans={selectedBundle.packages}
        bundle_id={selectedBundle.bundle_id}
        cartItemId={cartItemId}
      />
    </section>
  );
};
export default SwitchPackageSection;
