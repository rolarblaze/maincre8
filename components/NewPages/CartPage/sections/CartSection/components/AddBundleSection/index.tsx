"use client";

import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";
import BundlePackagesPlan from "@/components/Shop/section/BundlePackagesPlan";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCartItems } from "@/redux/cart/features";
import { PageViewData } from "@/redux/shop/interface";

interface AddBundleSectionProps {
    onClose: () => void;
}

const AddBundleSection: React.FC<AddBundleSectionProps> = ({ onClose }) => {
    const dispatch = useAppDispatch();

    const pageViewData = useAppSelector(
        (state) => state.pageViewData.currentViewBundle,
    );

    const typeCastPageViewData = pageViewData as PageViewData;

    const handleClose = () => {
        // Close the modal
        if (onClose) onClose();

        // Fetch updated cart items
        dispatch(getCartItems());
    };

    return (
        <section className="no-scrollbar max-h-[95vh] max-w-[95vw] w-full space-y-10 overflow-auto rounded-3xl bg-white px-[3.75rem] xs:max-md:px-5 py-[3.75rem]">
            <h2 className="text-center text-3.5xl font-semibold">
                Choose the Right Plan for Your Business
            </h2>

            {/* Bundle Option */}
            <BundleListCardOptions redirect={false} />

            {/* Selected Bundle Packages Plan */}
            <BundlePackagesPlan
                packagesPlans={typeCastPageViewData.packages}
                bundle_id={typeCastPageViewData?.bundle_id}
                onClose={handleClose}
            />
        </section>
    );
};

export default AddBundleSection;
