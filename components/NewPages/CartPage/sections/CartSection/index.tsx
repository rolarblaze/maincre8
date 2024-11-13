"use client"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearCart } from "@/redux/cart/features";
import { addAlert } from "@/redux/alerts";
import { PlusIcon, TrashIcon } from "@/public/svgs";
import { CartItem } from "./components";
import Spinner from "@/components/Spinner";


interface CartSectionProps {
  cartItems: {
    id: number;
    bundle: {
      bundle_name: string;
      bundle_image_link: string;
    };
    package: {
      package_name: string;
    };
  }[];
}

const CartSection: React.FC<CartSectionProps> = ({ cartItems }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.cart.loading);

  // Handle clear cart
  const handleClearCart = async () => {
    try {
      // Trigger the clearCart function
      const result = await dispatch(clearCart()).unwrap();

      // Display success alert
      dispatch(
        addAlert({
          id: "clear-cart-success",
          headText: "Success",
          subText: result.message,
          type: "success",
          autoClose: true,
        })
      );
    } catch (error) {
      // Display error alert
      dispatch(
        addAlert({
          id: "clear-cart-error",
          headText: "Error",
          subText: (error as Error)?.message || "Failed to clear the cart",
          type: "error",
          autoClose: true,
        })
      );
    }
  };

  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h3 className="text-sm font-medium leading-[150%] text-grey900">
        Your Cart
      </h3>

      <div className="divide-y border-grey100 sm:rounded-[1.25rem] md:border md:px-6 md:py-2.5">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.bundle.bundle_name}
            type={item.package.package_name}
            imageUrl={item.bundle.bundle_image_link}
          />
        ))}
      </div>

      <div className="ml-auto flex items-center justify-center gap-4 text-sm font-semibold text-grey400 sm:gap-6">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-grey100 px-5 py-2">
          Add New Bundle <PlusIcon fillColor="#667185" />
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2"
          onClick={handleClearCart}
          disabled={loading}
        >
          {loading ? (
            <Spinner className="size-4" />
          ) : (
            <>
              <span>Clear Cart</span>
              <TrashIcon fillColor="#d0d5dd" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
export default CartSection;

