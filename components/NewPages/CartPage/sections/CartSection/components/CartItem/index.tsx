"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteCartItem } from "@/redux/cart/features";
import { addAlert } from "@/redux/alerts";
import { Modal } from "@/components";
import { ArrowDown } from "@/public/icons";
import { TrashIcon } from "@/public/svgs";
import { getBackgroundClass, getImage } from "../../helperFunc";
import SwitchPackageSection from "../SwitchPackageSection";
import Spinner from "@/components/Spinner";

interface Props {
  name: string;
  type: string;
  imageUrl: string;
  cartItemId: number;
}

const CartItem: React.FC<Props> = ({ name, type, imageUrl, cartItemId }) => {
  const dispatch = useAppDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="flex w-full items-center justify-between py-5 xs:max-md:gap-2">
      <div
        className={`flex w-80 xs:max-md:w-auto xs:max-md:max-w-52 justify-between gap-5 rounded-xl ${getBackgroundClass(name)} py-2 pl-4 pr-1`}
      >
        <div className="space-y-px flex flex-col justify-center">
          <h3 className="text-sm sm:text-base">{name}</h3>
          <p className="text-xs text-grey500">{type}</p>
        </div>

        <div className="relative w-[30%] max-w-48 min-h-16 overflow-hidden rounded-[0.625rem] bg-white max-sm:aspect-square">
          <Image fill={true} src={imageUrl} alt={name} className="object-cover" />

        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 xs:max-md:gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 xs:max-md:gap-1 border-grey100 py-2 text-sm font-semibold text-grey400 sm:px-4 md:rounded-lg md:border md:shadow-sm"
        >
          <span className="font-normal  xs:max-md:text-xs">
            Switch <span className="max-md:hidden">Package</span>
          </span>

          <ArrowDown className="fill-grey300" />
        </button>

        <div
          onClick={handleDelete}
          className="rounded-lg p-2  xs:max-md:px-0 xs:max-md:leading-0 max-sm:pr-0 sm:bg-grey100"
        >
          {isDeleting ? <Spinner className="size-4" /> : <TrashIcon />}

        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="">
        <SwitchPackageSection />
      </Modal>
    </div>
  );
};
export default CartItem;
