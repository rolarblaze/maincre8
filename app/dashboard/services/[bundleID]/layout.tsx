"use client";
import { useRouter } from "nextjs-toploader/app";
import { useEffect } from "react";
import { getBundles } from "@/redux/shop/features";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { changePageData } from "@/redux/shop";
import { PageViewData } from "@/redux/shop/interface";
import Spinner from "@/components/Spinner";

interface ServicePackageLayoutProps {
  children: React.ReactNode;
  params: {
    bundleID: string;
  };
}

const ServicesPackageLayout: React.FC<ServicePackageLayoutProps> = ({
  children,
  params,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );

  const typeCastPageViewData = pageViewData as PageViewData;

  useEffect(() => {
    // if the redux store for all bundles data is empty, fetch from endpoint
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }
    const bundleID = params.bundleID;

    if (bundlesData.length >= 1) {
      let selectedBundle = bundlesData.find(
        (bundle) => bundle.bundle_id.toString() === bundleID,
      );
      if (selectedBundle) {
        dispatch(changePageData(bundleID));
      } else {
        let redirectID = bundlesData[0].bundle_id;
        router.push(`/dashboard/services/${redirectID}`);
      }
    }
  }, [bundlesData.length]);

  if (pageViewData === "") {
    return (
      <div className="flex w-full h-full items-center justify-center">
      <Spinner className="border-blue-500" />
      </div>
    )
  }

  return (
    <div className="font-manrope pb-10">
      {/* HEADER */}
      <header className="flex flex-col items-start justify-between px-6 xs:max-md:px-0 pb-4">
        <button onClick={() => router.back()} className="my-6 xs:max-md:hidden">
          {" "}
          ← Back to services
        </button>

        <div className="space-y-1 xs:max-md:space-y-0 xs:max-md:mt-5">
          <h2 className="text-2xl xs:max-md:text-xl font-semibold text-grey900">
            {typeCastPageViewData.bundle_name}
          </h2>
          <p className="text-base xs:max-md:text-sm font-medium text-grey500">
            {typeCastPageViewData.description}
          </p>
        </div>
      </header>

      <hr className="xs:max-md:hidden" />

      {children}
    </div>
  );
};

export default ServicesPackageLayout;
