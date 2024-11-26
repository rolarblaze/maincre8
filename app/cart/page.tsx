"use client"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCartItems } from "@/redux/cart/features";
import { Button, CartSection, AddOnSection, PageLayout } from "@/components";
import { addAlert } from "@/redux/alerts";
import EmptyState from "@/components/EmptyState";
import EmptyStateIcon from "@/public/images/cart-empty-state-icon.svg"
import Spinner from "@/components/Spinner";
import assetLibrary from "@/library";


const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cartItems, recommendedAddOns, isGettingCartItems, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems())
      .unwrap()
  }, [dispatch]);

  // Group the recommended_addons by their bundle names
  const groupedAddOns = recommendedAddOns.reduce((acc: Record<string, any[]>, addon) => {
    const bundleName = addon.bundle.bundle_name;
    if (!acc[bundleName]) {
      acc[bundleName] = [];
    }
    acc[bundleName].push({
      id: addon.add_ons_id,
      name: addon.add_ons_name,
      feature: addon.description,
      price: addon.price,
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
          <AddOnSection addOns={addOns} />
          <Button
            link="/checkout"
            label="Checkout"
            classNames="font-manrope block max-w-[22rem] mx-auto py-4 rounded-lg"
          />
        </div>
      )}
    </PageLayout>
  );
};
export default CartPage;
