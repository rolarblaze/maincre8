"use client";

// components/Dashboard/Order.tsx
import React, { useState } from "react";
import { addAlert } from "@/redux/alerts";
import { useAppDispatch } from "@/redux/store";
import { initializeSession, addItemToCart } from "@/redux/cart/features";

export interface OrderProps {
  package_id: number;
  bundle_id: number;
  packageName: string;
  price: string;
  dateBought: string;
  dateCompleted: string;
  status: "Open" | "Completed";
}

const Order: React.FC<OrderProps> = ({
  package_id,
  bundle_id,
  packageName,
  price,
  dateBought,
  dateCompleted,
  status,
}) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    try {
      setAddingToCart(true);
      // Check if session_id exists in localStorage
      let sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        const initializeSessionResult =
          await dispatch(initializeSession()).unwrap();
        sessionId = initializeSessionResult.session_id;
        console.log("Session initialized:", sessionId);
      } else {
        console.log("Using existing session_id from localStorage:", sessionId);
      }

      const result = await dispatch(
        addItemToCart({ bundle_id, package_id }),
      ).unwrap();

      // Dispatch success alert with the response message
      dispatch(
        addAlert({
          id: `Added ${packageName} to cart`,
          headText: "Success",
          subText: result.detail,
          type: "success",
          autoClose: true,
        }),
      );
    } catch (error) {
      // Dispatch error alert
      dispatch(
        addAlert({
          id: `Error adding ${packageName} to cart`,
          headText: "Error",
          subText: (error as Error)?.message || "Failed to add item to cart",
          type: "error",
          autoClose: true,
        }),
      );
      console.log(error);
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <div className="hidden space-y-2 bg-white md:block">
      <h4 className="text-2xl font-semibold text-grey500">{dateBought}</h4>

      <section className="rounded-lg border border-grey200 bg-grey10 p-4">
        {/* Section 1 */}
        <div className="flex items-center justify-between border-b border-grey200 px-2 py-3">
          <div className="w-[30%]">
            <div className="mb-1 text-xs font-semibold text-grey500">
              PACKAGE
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-semibold text-grey500">PRICE</div>
          </div>
          <div className="w-40">
            <div className="mb-1 text-xs font-semibold text-grey500">
              DATE BOUGHT
            </div>
          </div>
          <div className="w-40">
            <div className="mb-1 text-xs font-semibold text-grey500">
              DATE COMPLETED
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-semibold text-grey500">
              STATUS
            </div>
          </div>

          <div className="flex-1"></div>
        </div>

        {/* Section 2 */}
        <div className="flex w-full items-center justify-between px-2 py-3">
          <div className="w-[30%]">
            <div className="text-sm font-semibold text-grey900">
              {packageName}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm text-grey500">{price}</div>
          </div>
          <div className="w-40">
            <div className="text-sm text-grey500">{dateBought}</div>
          </div>
          <div className="w-40">
            <div className="text-sm text-grey500">{dateCompleted}</div>
          </div>
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
          <div className="flex-1">
            <button
              disabled={addingToCart}
              onClick={handleAddToCart}
              className="ml-2 p-1 text-xs font-semibold text-primary500 disabled:cursor-not-allowed disabled:text-slate-300"
            >
              <span className="ml-1">+</span> Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
