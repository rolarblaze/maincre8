"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getCartItems } from "@/redux/cart/features";
import { CheckoutSection, PageLayout, SummarySection } from "@/components";

const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const { cartItems, recommendedAddOns, total_price, isGettingCartItems, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const primaryPackageId = cartItems[0]?.package.package_id || null;

  return (
    <PageLayout className="bg-[#F7F9FC]">
      {isGettingCartItems ? (
        <p>Loading cart...</p>
      ) : error ? (
        <p>Error loading cart: {error}</p>
      ) : (
        <div className="full-width mx-auto flex size-full min-h-[calc(100dvh-4rem)] max-w-[84rem] items-start justify-between max-xl:flex-col sm:gap-10 sm:px-8 sm:py-10">
          <CheckoutSection
            cartItems={cartItems}
            recommendedAddOns={recommendedAddOns}
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
