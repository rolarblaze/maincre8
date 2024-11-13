"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components";
import { ArrowDown } from "@/public/icons";
import { TrashIcon } from "@/public/svgs";
import { getBackgroundClass, getImage } from "../../helperFunc";
import SwitchPackageSection from "../SwitchPackageSection";

interface Props {
  name: string;
  type: string;
  imageUrl: string;
}

const CartItem: React.FC<Props> = ({ name, type, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Rendering CartItem:", { name, type, imageUrl });

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
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 border-grey100 py-2 text-sm font-semibold text-grey400 sm:px-4 md:rounded-lg md:border md:shadow-sm"
        >
          <span className="font-normal max-sm:text-sm">
            Switch <span className="max-md:hidden">Package</span>
          </span>

          <ArrowDown className="fill-grey300" />
        </button>

        <button className="rounded-lg p-2 max-sm:pr-0 sm:bg-grey100">
          <TrashIcon />
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="">
        <SwitchPackageSection />
      </Modal>
    </div>
  );
};
export default CartItem;
