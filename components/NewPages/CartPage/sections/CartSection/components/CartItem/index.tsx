"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteCartItem } from "@/redux/cart/features";
import { getBundleById } from "@/redux/shop/features";
import { addAlert } from "@/redux/alerts";
import { Modal } from "@/components";
import { ArrowDown } from "@/public/icons";
import { TrashIcon } from "@/public/svgs";
import { getBackgroundClass } from "../../helperFunc";
import SwitchPackageSection from "../SwitchPackageSection";
import Spinner from "@/components/Spinner";

interface Props {
  name: string;
  type: string;
  imageUrl: string;
  cartItemId: number;
  bundleId: number;
}

const CartItem: React.FC<Props> = ({ name, type, imageUrl, cartItemId, bundleId }) => {
  const dispatch = useAppDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { selectedBundle, isFetchingBundleById } = useAppSelector((state) => state.pageViewData);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await dispatch(deleteCartItem({ cartItemId })).unwrap();
      dispatch(
        addAlert({
          id: `delete-cart-item-${cartItemId}`,
          headText: "Item Removed",
          subText: response.message,
          type: "success",
          autoClose: true,
        })
      );
    } catch (error: any) {
      dispatch(
        addAlert({
          id: `delete-cart-item-error-${cartItemId}`,
          headText: "Error",
          subText: error.message || "Failed to remove item from cart.",
          type: "error",
          autoClose: true,
        })
      );
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle opening the modal and fetching the bundle details
  const handleSwitchPackage = async () => {
    try {
      console.log("Fetching bundle details for bundleId:", bundleId);
      setIsOpen(true); // Open the modal
      await dispatch(getBundleById({ bundleId })).unwrap();
      console.log("Fetched bundle details successfully:", selectedBundle);
    } catch (error) {
      console.error("Error fetching bundle details:", error);
      dispatch(
        addAlert({
          id: `fetch-bundle-error-${bundleId}`,
          headText: "Error",
          subText: (error as Error)?.message || "Failed to fetch bundle details",
          type: "error",
          autoClose: true,
        })
      );
      setIsOpen(false); // Close the modal if fetching fails
    }
  };

  return (
    <div className="flex w-full items-center justify-between py-5 sm:gap-8">
      <div
        className={`flex h-[3.75rem] items-center justify-between gap-5 rounded-2xl ${getBackgroundClass(name)} py-2 pl-4 pr-1`}
      >
        <div className="space-y-px">
          <h3 className="text-sm sm:text-base">{name}</h3>
          <p className="text-xs text-grey500">{type}</p>
        </div>

        <div className="w-[3.25rem] overflow-hidden rounded-[0.625rem] bg-white max-sm:aspect-square sm:h-[3.25rem] sm:w-[5.375rem]">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full rounded-[0.625rem]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 sm:gap-6">
        <div
          onClick={handleSwitchPackage}
          className="flex items-center justify-center gap-2 border-grey100 py-2 text-sm font-semibold text-grey400 cursor-pointer sm:px-4 md:rounded-lg md:border md:shadow-sm"
        >
          {isFetchingBundleById ? <Spinner className="size-4" /> : (
            <>
              <span className="font-normal max-sm:text-sm">
                Switch <span className="max-md:hidden">Package</span>
              </span>

              <ArrowDown className="fill-grey300" />
            </>
          )}
        </div>

        <div
          onClick={handleDelete}
          className="rounded-lg p-2 max-sm:pr-0 sm:bg-grey100 cursor-pointer"
        >
          {isDeleting ? <Spinner className="size-4" /> : <TrashIcon />}

        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="">
        {selectedBundle ? (
          <SwitchPackageSection onClose={() => setIsOpen(false)} cartItemId={cartItemId} />
        ) : (
          <div className="flex items-center justify-center min-h-[10rem]">
            <Spinner className="size-8" />
          </div>
        )}
      </Modal>
    </div>
  );
};
export default CartItem;
