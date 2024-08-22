"use client";
import { Button, FullLoader, TabsToggle } from "@/components";
import { ArrowBackIcon } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import { getPackageDetails } from "@/redux/getPackage/getPkg";
import {
  getUserOrderHistory,
  payForPackage,
  trackUserOrder,
} from "@/redux/servicesTracker/features";
import { Package } from "@/redux/shop/interface";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PackageDetails = () => {
  const [isBuying, setIsBuying] = useState(false);
  // const { loading } = useAppSelector((state) => state.services);
  const { pkgId } = useParams();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("package info");
  const dispatch = useAppDispatch();

  const transId = searchParams.get("transactionId");
  const id = Array.isArray(pkgId) ? pkgId[0] : pkgId;

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getPackageDetails({ id }));
    }
    if (transId) {
      dispatch(trackUserOrder(Number(transId)));
    }
  }, [id, transId, dispatch]);
  //
  const { orderHistory } = useAppSelector((state) => state.services);
  const {
    status,
    pkgDetails,
    error,
  }: { status: string; pkgDetails: Package; error: string | null } =
    useAppSelector((state) => state.getPackageDetails);

  if (status !== "succeeded") return <FullLoader />;
  if (error) return <div>Error: {error}</div>;

  const checkForPackage = orderHistory?.find(
    (orders) => orders.package.package_id === pkgDetails.package_id
  );

  const buyPackage = async () => {
    if (pkgId && id) {
      setIsBuying(true);
      try {
        const resultAction = await dispatch(
          payForPackage({ package_id: Number(id), currency: "NGN" })
        );
        console.log(resultAction);
        if (payForPackage.fulfilled.match(resultAction)) {
          console.log("Package purchased successfully!", resultAction.payload);
          window.open(resultAction.payload.data.link, "_blank");
          dispatch(
            addAlert({
              id: "",
              headText: "Success",
              subText: resultAction.payload.status,
              type: "success",
            })
          );
        } else {
          console.error(
            "Failed to purchase the package.",
            resultAction.payload
          );
        }
      } catch (err) {
        console.error("Error purchasing the package:", err);
      } finally {
        setIsBuying(false);
      }
    }
  };

  return (
    <div className="pt-[22px] md:pt-0">
      <Link
        href={"/dashboard/services"}
        className="hidden md:flex items-center w-fit mb-14 pl-6"
      >
        <ArrowBackIcon />
        <span className="align-super text-grey600 ml-2">Back to services</span>
      </Link>
      <div className=" flex justify-between items-center px-2 md:px-6 flex-wrap gap-4">
        <div>
          <h4>{pkgDetails?.package_name}</h4>
          <p>{pkgDetails?.description}</p>
        </div>

        {checkForPackage ? (
          <p className="py-1 px-3 bg-[#0F973D] text-white rounded-xl text-sm">
            Active{" "}
          </p>
        ) : (
          <>
            <div className="flex gap-6 items-center">
              <h4 className="hidden md:block">{pkgDetails?.price || "N499"}</h4>
              <Button
                label={`Buy for ${pkgDetails?.price || "N499"}`}
                classNames="self-start"
                onClick={buyPackage}
                isLoading={isBuying}
              />
            </div>
          </>
        )}
      </div>

      {/* ------------------------------------------------ */}
      {/* ------------------------------------------------ */}
      <div className="border-l border-t border-grey200 py-4 px-6 mt-4 md:mt-6 h-full ">
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
