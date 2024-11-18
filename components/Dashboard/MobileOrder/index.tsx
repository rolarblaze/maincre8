import React from "react";
import { OrderProps } from "../Order";

const MobileOrder: React.FC<OrderProps> = ({
  handleAddToCart,
  addingToCart,
  package_id,
  bundle_id,
  packageName,
  price,
  dateBought,
  dateCompleted,
  status,
}) => {
  return (
    <div className="space-y-4 bg-white md:hidden">
      <h4 className="text-base font-semibold text-grey500 md:text-2xl">
        {dateBought}
      </h4>

      <section className="flex flex-col gap-4 rounded-lg border border-grey200 bg-grey10 px-2 py-4">
        <div className="flex-1">
          <div className="text-base font-semibold text-grey900">
            {packageName}
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
              <div className="text-base text-grey500">{dateCompleted}</div>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="flex flex-1 items-center">
          <div
            className={`rounded-xl px-3 py-1 text-xs font-semibold ${
              status === "Completed"
                ? "bg-[#101928] text-white"
                : "bg-[#0F973D] text-white"
            }`}
          >
            {status === "Completed" ? "Completed" : "Active"}
          </div>
        </div>

        {/* Price and reorder */}
        <div className="flex items-center justify-between px-2 py-3">
          <div className="flex-1">
            <div className="text-base text-grey500">{price}</div>
          </div>

          <div className="flex-1">
            <button
              disabled={addingToCart}
              onClick={() =>
                handleAddToCart(package_id, bundle_id, packageName)
              }
              className="ml-2 text-nowrap p-1 text-sm font-semibold text-primary500 hover:text-green-500 disabled:cursor-not-allowed disabled:text-slate-300"
            >
              <span className="ml-1">+</span> Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileOrder;
