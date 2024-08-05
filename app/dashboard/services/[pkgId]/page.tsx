"use client";
import { Button, FullLoader, TabsToggle } from "@/components";
import { ArrowBackIcon } from "@/public/icons";
import { AllIcon } from "@/public/svgs";
import { getPackageDetails } from "@/redux/getPackage/getPkg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Package {
  package_name: string;
  package_id: number;
  bundle_id: number;
  price: number | null;
  description: string;
  provisions: Provision[];
}

interface Provision {
  description: string;
  provision_id: number;
  package_id: number;
  availability: boolean;
}

const PackageDetails = () => {
  const { pkgId } = useParams();
  const [activeTab, setActiveTab] = useState("package info");
  const dispatch = useAppDispatch();
  const id = Array.isArray(pkgId) ? pkgId[0] : pkgId;
  useEffect(() => {
    dispatch(getPackageDetails({ id }));
  }, []);
  const {
    status,
    pkgDetails,
    error,
  }: { status: string; pkgDetails: Package | null; error: string | null } =
    useAppSelector((state) => state.getPackageDetails);

  if (status !== "succeeded") return <FullLoader />;
  if (error) return <div>Error: {error}</div>;

  const tabs = [
    {
      name: "My package",
      icon: <AllIcon fillColor={activeTab === "All" ? "#1574E5" : "#98A2B3"} />,
    },
    {
      name: "package info",
      icon: (
        <AllIcon
          fillColor={activeTab === "package info" ? "#1574E5" : "#98A2B3"}
        />
      ),
    },
  ];
  return (
    <div>
      <Link href={"/dashboard/services"} className="flex w-fit mb-14 pl-6">
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
      <div className="border-l border-t border-grey200 py-4 px-6 mt-6 h-full">
        <div className="">
          <TabsToggle
            activeTab={activeTab}
            onTabClick={setActiveTab}
            disableMyPackage={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
