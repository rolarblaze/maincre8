"use client"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearCart } from "@/redux/cart/features";
import { addAlert } from "@/redux/alerts";
import { PlusIcon, TrashIcon } from "@/public/svgs";
import { CartItem } from "./components";
import Spinner from "@/components/Spinner";
import { Modal } from "@/components";
import AddBundleSection from "./components/AddBundleSection";


interface CartSectionProps {
  cartItems: {
    id: number;
    bundle: {
      bundle_name: string;
      bundle_image_link: string;
      bundle_id: number;
    };
    package: {
      package_name: string;
    };
  }[];
}

const CartSection: React.FC<CartSectionProps> = ({ cartItems }) => {
  const dispatch = useAppDispatch();
  const { isClearingCart } = useAppSelector((state) => state.cart);
  const [isAddBundleModalOpen, setIsAddBundleModalOpen] = useState(false);

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
    <section className="flex flex-col w-full gap-4 sm:gap-6 xs:max-md:px-5">
      <h3 className="text-sm font-medium leading-[150%] text-grey900 xs:max-md:ml-5">
        Your Cart
      </h3>

      <div className="divide-y border-grey100 sm:rounded-[1.25rem] md:border md:px-6 md:py-2.5 xs:max-md:px-5">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            cartItemId={item.id}
            name={item.bundle.bundle_name}
            type={item.package.package_name}
            imageUrl={item.bundle.bundle_image_link}
            bundleId={item.bundle.bundle_id}
          />
        ))}
      </div>

      <div className="ml-auto flex items-center justify-center gap-4 text-sm font-semibold text-grey400 sm:gap-6">
        <button
          className="flex items-center justify-center gap-2 rounded-lg bg-grey100 px-5 py-2"
          onClick={() => setIsAddBundleModalOpen(true)}>
          Add New Bundle <PlusIcon fillColor="#667185" />
        </button>

        <button
          className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2"
          onClick={handleClearCart}
          disabled={isClearingCart}
        >
          {isClearingCart ? (
            <Spinner className="size-4" />
          ) : (
            <>
              <span>Clear Cart</span>
              <TrashIcon fillColor="#d0d5dd" />
            </>
          )}
        </button>
      </div>

      {/* Add Bundle Modal */}
      <Modal isOpen={isAddBundleModalOpen} onClose={() => setIsAddBundleModalOpen(false)} className="">
        <AddBundleSection onClose={() => setIsAddBundleModalOpen(false)} />
      </Modal>
    </section>
  );
};
export default CartSection;

