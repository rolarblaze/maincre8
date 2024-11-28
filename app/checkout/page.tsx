"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCartItems } from "@/redux/cart/features";
import { CheckoutSection, PageLayout, SummarySection, Button } from "@/components";
import Spinner from "@/components/Spinner";
import EmptyState from "@/components/EmptyState";
import assetLibrary from "@/library";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const { cartItems, total_price, isGettingCartItems, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const primaryPackageId = cartItems[0]?.package.package_id || null;

  // Extract addons from cartItems
  const cartAddOns = cartItems.flatMap(item => item.addons);

  // Check if the cart is empty
  const isCartEmpty = cartItems.length === 0;

  return (
    <PageLayout className="bg-[#F7F9FC]">
      {isGettingCartItems ? (
        <div className="mx-auto flex items-center justify-center min-h-[50vh]">
          <Spinner className="border-blue-500" />
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
        <div className="full-width mx-auto flex size-full min-h-[calc(100dvh-4rem)] max-w-[84rem] items-start justify-between max-xl:flex-col sm:gap-10 sm:px-8 sm:py-10">
          <CheckoutSection
            cartItems={cartItems}
            cartAddOns={cartAddOns}
          />
          {primaryPackageId && (
            <SummarySection
              totalPrice={total_price}
              packageId={primaryPackageId}
            />
          )}
        </div>

      )}
    </PageLayout>
  );
};

export default CheckoutPage;
