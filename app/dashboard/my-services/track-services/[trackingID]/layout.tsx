"use client";

import { trackUserOrder } from "@/redux/servicesTracker/features";
import { handleSetCurrentTrackingBundleName } from "@/redux/servicesTracker/tracker";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TrackServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { trackingID: string };
}) {
  const { trackingID } = params;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { orderHistory } = useAppSelector((state) => state.services);
  const selectedBundle = orderHistory?.find(
    (order) => order.transaction_id.toString() === trackingID,
  );

  useEffect(() => {
    dispatch(trackUserOrder(parseInt(trackingID) as number));
  }, [dispatch, trackingID]);

  const activebundleName = selectedBundle?.package.bundle.bundle_name;

  useEffect(() => {
    dispatch(
      handleSetCurrentTrackingBundleName({
        activeBundle: activebundleName as string,
      }),
    );
  }, [dispatch, activebundleName]);

  return (
    <section className="px-6 pb-10 xs:max-md:px-0">
      <button onClick={() => router.back()} className="my-6 xs:max-md:hidden">
        {" "}
        ← Back to services
      </button>

      <div className="mb-5 space-y-2 xs:max-md:space-y-0 xs:max-md:mt-5">
        <h1 className="text-2xl font-semibold text-[#101928]">
          {selectedBundle?.package.bundle.bundle_name}
        </h1>
        <p className="text-base font-medium text-[#667185]">
          {selectedBundle?.package.package_name}
        </p>
      </div>

      {children}
    </section>
  );
}
