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
  const { cartItems, loading, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    console.log("Fetching cart items...");
    dispatch(getCartItems())
      .unwrap()
      .then(() => console.log("Cart items fetched successfully"))
      .catch((err) => console.error("Error fetching cart items:", err));
  }, [dispatch]);

  // Extract add-ons from cart items
  const addOns = cartItems.map((item) => ({
    type: item.bundle.bundle_name,
    recommendations: item.addons,
  }));


  // Check if the cart is empty
  const isCartEmpty = cartItems.length === 0;


  return (
    <PageLayout className="full-width content-grid min-h-[calc(100dvh-4rem)] justify-items-center sm:bg-[#F7F9FC]">

      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
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
        <div className="h-fit space-y-10 bg-white p-8 font-manrope max-sm:px-0 sm:my-10 sm:rounded-2xl lg:w-[50rem]">
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
