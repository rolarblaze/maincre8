// components/Dashboard/Order.tsx
import React, { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { UserTransaction } from "@/redux/order/interface";
import moment from "moment";
export interface OrderProps {
  handleAddToCart: (
    bundle_id: number,
    package_id: number,
    packageName: string,
    ref: string,
  ) => void;
  addingToCart: string;
  dateBought?: string;
  histories?: UserTransaction[];
  package_id?: number;
  bundle_id?: number;
  packageName?: string;
  price?: string;
  dateCompleted?: string;
  status?: "successful" | "pending";
}

const Order: React.FC<OrderProps> = ({
  handleAddToCart,
  addingToCart,
  dateBought,
  histories,
  // package_id,
  // bundle_id,
  // packageName,
  // price,
  // dateBought,
  // dateCompleted,
  // status,
}) => {
  const { isAddingToCart } = useAppSelector((state) => state.cart);

  return (
    <div>
      <div className="hidden space-y-2 bg-white md:block">
        <h4 className="text-2xl font-semibold text-grey500">{dateBought}</h4>

        <div className="w-full overflow-auto">
          <section className="min-w-min rounded-lg border border-grey200 bg-grey10 p-4">
            {/* Section 1 */}
            <div className="flex items-center justify-between border-b border-grey200 px-2 py-3">
              <div className="min-w-96">
                <div className="mb-1 text-xs font-semibold text-grey500">
                  PACKAGE
                </div>
              </div>
              <div className="min-w-32 flex-1">
                <div className="mb-1 text-xs font-semibold text-grey500">
                  PRICE
                </div>
              </div>
              <div className="min-w-40 flex-1">
                <div className="mb-1 text-xs font-semibold text-grey500">
                  DATE BOUGHT
                </div>
              </div>
              <div className="min-w-40 flex-1">
                <div className="mb-1 text-xs font-semibold text-grey500">
                  DATE COMPLETED
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-1 text-xs font-semibold text-grey500">
                  STATUS
                </div>
              </div>

              <div className="ml-5 min-w-32 flex-1"></div>
            </div>

            {/* Section 2 */}
            {histories?.map((history) => {
              return (
                <div
                  key={history.trans_ref}
                  className="flex w-full items-center justify-between px-2 py-3"
                >
                  <div className="min-w-96">
                    <div className="text-nowrap text-sm font-semibold text-grey900">
                      {history.package.bundle.bundle_name} (
                      {history.package.package_name})
                    </div>
                  </div>
                  <div className="min-w-32 flex-1">
                    <div className="text-nowrap text-sm text-grey500">
                      {history.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: history.currency,
                      })}
                    </div>
                  </div>
                  <div className="min-w-40 flex-1">
                    <div className="text-nowrap text-sm text-grey500">
                      {dateBought}
                    </div>
                  </div>
                  <div className="min-w-40 flex-1">
                    <div className="text-nowrap text-sm text-grey500">
                      {history.status === "successful"
                        ? moment(history.updated_at).format("DD MMMM YYYY")
                        : "-"}
                    </div>
                  </div>
                  <div className="flex flex-1 items-center">
                    <div
                      className={`text-nowrap rounded-xl px-3 py-1 text-xs font-semibold ${
                        history.status === "successful"
                          ? "bg-[#101928] text-white"
                          : "bg-[#0F973D] text-white"
                      }`}
                    >
                      {history.status === "successful" ? "Completed" : "Active"}
                    </div>
                  </div>
                  <div className="ml-5 min-w-32 flex-1">
                    <button
                      disabled={addingToCart === history.trans_ref}
                      onClick={() =>
                        handleAddToCart(
                          history.package.bundle.bundle_id,
                          history.package.package_id,
                          `${history.package.bundle.bundle_name} (${history.package.package_name})`,
                          history.trans_ref,
                        )
                      }
                      className="flex w-full items-center justify-start text-nowrap p-1 text-xs font-semibold text-primary500 hover:text-green-500 disabled:cursor-not-allowed disabled:text-slate-300"
                    >
                      <p className="mx-1 text-xs">+</p>{" "}
                      <p className="text-xs">
                        {isAddingToCart && addingToCart === history.trans_ref
                          ? "Adding item.."
                          : "Add to cart"}
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order;
