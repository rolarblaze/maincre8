"use client";
import { Button, FullLoader, TabsToggle } from "@/components";
import { ArrowBackIcon } from "@/public/icons";
import { getPackageDetails } from "@/redux/getPackage/getPkg";
import { trackUserOrder } from "@/redux/servicesTracker/features";
import { Package } from "@/redux/shop/interface";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PackageDetails = () => {
  const { trackingDetails, loading } = useAppSelector(
    (state) => state.services
  );
  const { pkgId } = useParams();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("package info");
  const dispatch = useAppDispatch();

  const transId = searchParams.get("transactionId");
  const id = Array.isArray(pkgId) ? pkgId[0] : pkgId;

  useEffect(() => {
    if (id) {
      dispatch(getPackageDetails({ id }));
    }
    if (transId) {
      dispatch(trackUserOrder(Number(transId)));
    }
  }, [id, transId, dispatch]);

  const {
    status,
    pkgDetails,
    error,
  }: { status: string; pkgDetails: Package; error: string | null } =
    useAppSelector((state) => state.getPackageDetails);

  if (status !== "succeeded" || loading) return <FullLoader />;
  if (error) return <div>Error: {error}</div>;

  if (trackingDetails) {
    console.log(trackingDetails);
  }

  return (
    <div>
      <Link
        href={"/dashboard/services"}
        className="flex items-center w-fit mb-14 pl-6"
      >
        <ArrowBackIcon />
        <span className="align-super text-grey600 ml-2">Back to services</span>
      </Link>
      <div className=" flex justify-between items-center px-2 md:px-6 flex-wrap gap-4">
        <div>
          <h4>{pkgDetails?.package_name}</h4>
          <p>{pkgDetails?.description}</p>
        </div>

        <div className="flex gap-6 items-center">
          <h4 className="hidden md:block">{pkgDetails?.price || "$499"}</h4>
          <Button label={`Buy for ${pkgDetails?.price || "$499"}`} classNames="self-start" />
        </div>
      </div>

      <div className="border-l border-t border-grey200 py-4 px-6 mt-6 h-full">
        <TabsToggle
          onTabClick={setActiveTab}
          disableMyPackage={false}
          provisions={pkgDetails?.provisions}
        />
      </div>
    </div>
  );
};

export default PackageDetails;
