import React from "react";
import { OrderProps } from "../Order";

const MobileOrder: React.FC<OrderProps> = ({
  packageName,
  price,
  dateBought,
  dateCompleted,
  status,
}) => {
  return (
    <div className="space-y-4 bg-white md:hidden">
      <h4 className="text-grey500 text-base md:text-2xl font-semibold">
        {dateBought}
      </h4>

      <section className=" bg-grey10 py-4 px-4 rounded-lg border border-grey200 flex flex-col gap-4">
        <div className="flex-1">
          <div className="text-grey900 text-base font-semibold ">
            {packageName}
          </div>
        </div>

        {/* Date bought and Date completed */}
        <div className="flex items-center justify-between py-3 px-2">
          {/* Date bought */}
          <div className="flex-1 border-r border-grey200">
            <div className="text-grey500 text-xs font-semibold mb-1">
              DATE BOUGHT
            </div>
            <div className="flex-1">
              <div className="text-grey500 text-base ">{dateBought}</div>
            </div>
          </div>

          {/* Date completed */}
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">
              DATE COMPLETED
            </div>
            <div className="flex-1">
              <div className="text-grey500  text-base ">{dateCompleted}</div>
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="flex-1 flex items-center">
          <div
            className={`text-xs font-semibold px-2 py-1 rounded ${
              status === "Completed"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {status}
          </div>
        </div>

        {/* Price and reorder */}
        <div className="flex items-center justify-between py-3 px-2 ">
          <div className="flex-1">
            <div className="text-grey500 text-base ">{price}</div>
          </div>

          <div className="flex-1 ">
            <div className="ml-2 text-primary500 text-xs font-semibold cursor-pointer">
              Reorder <span className="ml-1">↻</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileOrder;
