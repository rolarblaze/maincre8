"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { OrderProps } from "../Order";
import moment from "moment";

const MobileOrder: React.FC<OrderProps> = ({
  handleAddToCart,
  addingToCart,
  dateBought,
  histories,
}) => {
  const { isAddingToCart } = useAppSelector((state) => state.cart);

  return (
    <div className="mt-5 space-y-5 md:hidden">
      {histories?.map((history) => {
        return (
          <div
            key={history.trans_ref}
            className=" max-w-[26rem] space-y-1 bg-white"
          >
            <h4 className="text-base font-semibold text-grey500 md:text-2xl">
              {dateBought}
            </h4>

            <section className="flex flex-col gap-2 rounded-lg border border-grey200 bg-grey10 px-2 py-4">
              <div className="flex-1">
                <div className="text-base font-semibold text-grey900">
                  {history.package.bundle.bundle_name} (
                  {history.package.package_name})
                </div>
              </div>

              {/* Date bought and Date completed */}
              <div className="flex flex-wrap items-start justify-between gap-5 px-2 py-3">
                {/* Date bought */}
                <div className="flex-1 border-r border-grey200">
                  <div className="text-xs font-semibold text-slate-700 underline">
                    DATE BOUGHT
                  </div>
                  <div className="w-40 flex-1">
                    <div className="text-base text-grey500">{dateBought}</div>
                  </div>
                </div>

                {/* Date completed */}
                <div className="flex-1">
                  <div className="text-xs font-semibold text-slate-700 underline">
                    DATE COMPLETED
                  </div>
                  <div className="w-40 flex-1">
                    <div className="text-base text-grey500">
                      {history.status === "successful"
                        ? moment(history.updated_at).format("DD MMMM YYYY")
                        : "-"}{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="flex flex-1 items-center">
                <div
                  className={`rounded-xl px-3 py-1 text-xs font-semibold ${
                    history.status === "successful"
                      ? "bg-[#101928] text-white"
                      : "bg-[#0F973D] text-white"
                  }`}
                >
                  {history.status === "successful" ? "Completed" : "Active"}
                </div>
              </div>

              {/* Price and reorder */}
              <div className="flex items-center justify-between px-2 py-3">
                <div className="flex-1">
                  <div className="text-base text-grey500">
                    {" "}
                    {history.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: history.currency,
                    })}
                  </div>
                </div>

                <div className="flex-1">
                  <button
                    disabled={addingToCart === history.trans_ref}
                    onClick={() =>
                      handleAddToCart(
                        history.package.bundle.bundle_id,
                        history.package.package_id,
                        ` ${history.package.bundle.bundle_name} (${history.package.package_name})`,
                        history.trans_ref,
                      )
                    }
                    className="ml-2 text-nowrap p-1 text-sm font-semibold text-primary500 hover:text-green-500 disabled:cursor-not-allowed disabled:text-slate-300"
                  >
                    <span className="ml-1">+</span>{" "}
                    {isAddingToCart && addingToCart === history.trans_ref
                      ? "Adding item.."
                      : "Add to cart"}
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MobileOrder;
