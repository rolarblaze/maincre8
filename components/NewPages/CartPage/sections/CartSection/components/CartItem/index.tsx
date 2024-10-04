import { ArrowDown } from "@/public/icons";
import { TrashIcon } from "@/public/svgs";
import React from "react";
import { getBackgroundClass, getImage } from "../../helperFunc";

interface Props {
  name: string;
  type: string;
}

const CartItem: React.FC<Props> = ({ name, type }) => {
  return (
    <div className="flex w-full items-center justify-between gap-8 py-5">
      <div
        className={`flex h-[3.75rem] items-center justify-between gap-5 rounded-2xl ${getBackgroundClass(name)} py-2 pl-4 pr-1`}
      >
        <div className="space-y-px">
          <h3 className="text-base">{name}</h3>
          <p className="text-xs text-grey500">{type}</p>
        </div>

        <div className="h-[3.25rem] w-[5.375rem] overflow-hidden rounded-[0.625rem] bg-white">
          {getImage(name)}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2 text-sm font-semibold text-grey400 shadow-sm">
          <span>Switch Package</span>

          <ArrowDown className="fill-grey300" />
        </div>

        <button className="rounded-lg bg-grey100 p-2">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
