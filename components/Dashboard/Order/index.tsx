// components/Dashboard/Order.tsx
import React from "react";

interface OrderProps {
  packageName: string;
  price: string;
  dateBought: string;
  dateCompleted: string;
  status: "Open" | "Completed";
}

const Order: React.FC<OrderProps> = ({
  packageName,
  price,
  dateBought,
  dateCompleted,
  status,
}) => {
  return (
    <div className="space-y-4 bg-white">
      <h4 className="text-grey500 text-2xl font-semibold">{dateBought}</h4>

      <section className=" bg-grey10 py-4 px-6 rounded-lg border border-grey200">
        <div className="flex items-center justify-between py-3 px-2 border-b border-grey200">
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">PACKAGE</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">PRICE</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">DATE BOUGHT</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">DATE COMPLETED</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-xs font-semibold mb-1">STATUS</div>
          </div>

          <div className="flex-1"></div>
        </div>
        <div className="flex items-center justify-between py-3 px-2 ">
          <div className="flex-1">
            <div className="text-grey900 text-base font-semibold ">{packageName}</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-base ">{price}</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500 text-base ">{dateBought}</div>
          </div>
          <div className="flex-1">
            <div className="text-grey500  text-base ">{dateCompleted}</div>
          </div>
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

export default Order;
