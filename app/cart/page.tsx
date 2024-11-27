"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCartItems, checkoutCart } from "@/redux/cart/features";
import { Button, CartSection, AddOnSection, PageLayout } from "@/components";
import { addAlert } from "@/redux/alerts";
import EmptyState from "@/components/EmptyState";
import EmptyStateIcon from "@/public/images/cart-empty-state-icon.svg"
import Spinner from "@/components/Spinner";
import assetLibrary from "@/library";


const CartPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { cartItems, recommendedAddOns, isGettingCartItems, error, isCheckingOut } = useAppSelector((state) => state.cart);

  const [selectedAddOns, setSelectedAddOns] = useState<
    { id: number; quantity: number; bundleName: string }[]
  >([]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleAddOnChange = (addon: { id: number; quantity: number; bundleName: string }) => {
    setSelectedAddOns((prev) => {
      const existing = prev.find((item) => item.id === addon.id);
      if (existing) {
        return addon.quantity > 0
          ? prev.map((item) => (item.id === addon.id ? addon : item))
          : prev.filter((item) => item.id !== addon.id);
      } else {
        return addon.quantity > 0 ? [...prev, addon] : prev;
      }
    });
  };

  const handleCheckout = async () => {
    try {
      // Map selectedAddOns to the expected structure
      const addons = selectedAddOns.map((addon) => {
        // Find the cart item ID by matching the bundle name
        const associatedCartItem = cartItems.find(
          (item) => item.bundle.bundle_name === addon.bundleName
        );

        if (!associatedCartItem) {
          throw new Error(`Add-on with ID ${addon.id} has no associated cart item.`);
        }

        return {
          addon_id: addon.id,
          cart_item_id: associatedCartItem.id,
          quantity: addon.quantity,
        };
      });

      // Dispatch checkoutCart
      const result = await dispatch(checkoutCart({ addons })).unwrap();

      // Redirect to the checkout page
      router.push("/checkout");
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  // Group the recommended_addons by their bundle names
  const groupedAddOns = recommendedAddOns.reduce((acc: Record<string, any[]>, addon) => {
    const bundleName = addon.bundle.bundle_name;
    if (!acc[bundleName]) {
      acc[bundleName] = [];
    }
    acc[bundleName].push({
      uniqueKey: `${addon.add_ons_id}-${addon.add_ons_name}-${Math.random()}`, // Unique key for each item
      id: addon.add_ons_id,
      name: addon.add_ons_name,
      feature: addon.description,
      price: addon.price,
      bundleName,
    });
    return acc;
  }, {});

  const addOns = Object.keys(groupedAddOns).map((bundleName) => ({
    type: bundleName,
    recommendations: groupedAddOns[bundleName],
  }));


  // Check if the cart is empty
  const isCartEmpty = cartItems.length === 0;


  return (
    <PageLayout className="full-width xs:max-md:w-full content-grid min-h-[calc(100dvh-4rem)] justify-items-center sm:bg-[#F7F9FC]">

      {isGettingCartItems ? (
        <div className="mx-auto flex items-center justify-center min-h-[50vh]">
          <Spinner />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
          <p className="text-lg font-semibold text-red-600">Error: {error}</p>
          <Button
            label="Retry"
            onClick={() => dispatch(getCartItems())}
            classNames="bg-primary500 text-white px-6 py-2 rounded-lg"
          />
        </div>
      ) : isCartEmpty ? (
        <div className="max-w-[300px] mx-auto w-full p-4 flex items-center justify-center mt-20">
          <EmptyState
            imgSrc={assetLibrary.cartEmpty}
            alt="Empty Cart"
            text="Your cart is empty"
            subText="Let&apos;s change that—start shopping and find a package for your business!"
            link="Explore bundles"
            to="/shop"
            imgStyle="mb-4"
          />
        </div>
      ) : (
        <div className="max-w-[900px] xs:max-md:max-w-full w-full h-fit space-y-10 bg-white p-8 font-manrope max-sm:px-0 sm:my-10 sm:rounded-2xl">
          <h2 className="text-center text-3.5xl font-semibold leading-10 text-grey900">
            Cart
          </h2>
          <CartSection cartItems={cartItems} />
          <AddOnSection addOns={addOns} onAddOnChange={handleAddOnChange} />
          <Button
            onClick={handleCheckout}
            label="Checkout"
            isLoading={isCheckingOut}
            disabled={isCheckingOut}
            classNames="font-manrope block max-w-[22rem] mx-auto py-4 rounded-lg"
          />
        </div>
      )}
    </PageLayout>
  );
};
export default CartPage;
