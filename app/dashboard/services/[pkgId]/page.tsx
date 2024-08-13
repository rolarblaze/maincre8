"use client";
import { Button, FullLoader, TabsToggle } from "@/components";
import { ArrowBackIcon } from "@/public/icons";
import { getPackageDetails } from "@/redux/getPackage/getPkg";
import { Package } from "@/redux/shop/interface";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PackageDetails = () => {
  const { pkgId } = useParams();
  const [activeTab, setActiveTab] = useState("package info");
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.auth);
  const id = Array.isArray(pkgId) ? pkgId[0] : pkgId;
  useEffect(() => {
    dispatch(getPackageDetails({ id }));
  }, []);
  const {
    status,
    pkgDetails,
    error,
  }: { status: string; pkgDetails: Package; error: string | null } =
    useAppSelector((state) => state.getPackageDetails);

  if (status !== "succeeded") return <FullLoader />;
  if (error) return <div>Error: {error}</div>;

  // if (pkgDetails) {
  //   console.log(pkgDetails.package_id);
  // }

  // if (profile) {
  //   console.log("profile", profile.user.transactions);
  // }

  return (
    <div>
      <Link
        href={"/dashboard/services"}
        className="flex items-center w-fit mb-14 pl-6"
      >
        <ArrowBackIcon />
        <span className="align-super text-grey600 ml-2">Back to services</span>
      </Link>
      <div className=" flex justify-between items-center px-6">
        <div>
          <h4>{pkgDetails?.package_name}</h4>
          <p>{pkgDetails?.description}</p>
        </div>

        <div className="flex gap-6 items-center">
          <h4>{pkgDetails?.price || "$499"}</h4>
          <Button label={`Buy for ${pkgDetails?.price || "$499"}`} />
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* ------------------------------------------------ */}
      <div className="border-l border-t border-grey200 py-4 px-6 mt-6 h-full ">
        <TabsToggle
          // activeTab={activeTab}
          onTabClick={setActiveTab}
          disableMyPackage={false}
          provisions={pkgDetails?.provisions}
        />
      </div>
    </div>
  );
};

export default PackageDetails;
