"use client";

import { Button } from "@/components";
import {
  CheckedCircleSVG,
  PremiumPlanSVG,
  StandardPlanSVG,
  StarterPlanSVG,
} from "@/public/icons";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { PageViewData } from "@/redux/shop/interface";
import { useState } from "react";
import {
  initializeSession,
  addItemToCart,
  getCartItems,
} from "@/redux/cart/features";
import { addAlert } from "@/redux/alerts";

const ServicePackagePage = () => {
  const dispatch = useAppDispatch();

  // use to control and manage the individual loading states of the packages "Add to Cart" buttons
  const [addingToCart, setAddingToCart] = useState({
    "0": false,
    "1": false,
    "2": false,
  });

  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );
  const typeCastPageViewData = pageViewData as PageViewData;
  const bundle_id = typeCastPageViewData.bundle_id;

  const handleAddToCart = async (
    bundle_id: number,
    package_id: number,
    packageName: string,
  ) => {
    let key = (package_id % 3).toString();
    try {
      setAddingToCart({ ...addingToCart, [key]: true });

      // Check if session_id exists in localStorage
      let sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        const initializeSessionResult =
          await dispatch(initializeSession()).unwrap();
        sessionId = initializeSessionResult.session_id;
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
    } finally {
      setAddingToCart({ ...addingToCart, [key]: false });
    }
    dispatch(getCartItems());
  };

  // Loading States
  if (pageViewData === "") {
    return (
      <div className="space-y-4">
        <section className="flex flex-wrap justify-start gap-6 pt-10">
          {[1, 2, 3].map((dummy) => {
            return (
              <div
                key={dummy}
                className="min-w-[22rem] space-y-4 rounded-lg border border-grey200 px-8 py-5 text-grey800"
              >
                <p className="shimmer h-10 rounded-md text-transparent">1</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-5">
                    <p className="shimmer w-1/2 rounded-md text-transparent">
                      1
                    </p>

                    <p className="shimmer rounded-lg px-2 py-1 text-sm font-medium text-transparent">
                      Popular
                    </p>
                  </div>

                  <p className="shimmer rounded-md p-1 text-transparent">1</p>
                </div>

                <div className="shimmer h-10 rounded-md"></div>

                <div className="space-y-2">
                  {[1, 2, 3].map((dummy) => {
                    return (
                      <div
                        key={dummy}
                        className="shimmer rounded-md p-1 text-transparent"
                      >
                        {dummy}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-5 flex items-center justify-start gap-8 text-sm">
          <p className="shimmer h-10 w-20 rounded-md border border-grey200 text-transparent">
            1
          </p>

          <div className="flex w-full flex-wrap gap-4">
            {[1, 2, 3].map((dummy) => (
              <div
                key={dummy}
                className="shimmer h-10 w-[20%] rounded-md border border-grey200 text-transparent"
              >
                {dummy}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full px-5 xs:max-md:px-0">
      {/* PLANS */}
      <section className="noScrollbar flex w-full justify-start gap-6 overflow-auto pt-10 xs:max-md:flex-wrap xs:max-md:justify-evenly xs:max-md:gap-x-0 xs:max-md:gap-y-5 xs:max-md:pt-3">
        {typeCastPageViewData.packages.map((plan) => {
          return (
            <div
              key={plan.package_id}
              className="w-[30%] min-w-96 space-y-4 rounded-lg border border-grey200 px-8 py-5 text-grey800 last:mr-40 xs:max-md:w-full xs:max-md:min-w-60 xs:max-md:max-w-[230px] xs:max-md:px-3 xs:max-md:last:mr-0"
            >
              <div className="flex items-center justify-center gap-2 bg-grey50 p-1.5 capitalize xs:max-md:gap-1">
                {plan.package_name === "Starter Package" ? (
                  <StarterPlanSVG />
                ) : plan.package_name === "Standard Package" ? (
                  <StandardPlanSVG />
                ) : (
                  <PremiumPlanSVG />
                )}

                <p className="text-lg font-semibold leading-[150%] text-grey500 xs:max-md:text-sm">
                  {plan.package_name}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-5">
                  <p className="font-medium leading-6 text-grey900">
                    <span className="text-3.5xl font-semibold leading-10">
                      ${plan.price}
                    </span>
                    /per month
                  </p>
                  {plan.package_name === "Standard Package" && (
                    <p className="rounded-lg border border-[#1574E5] bg-[#E8F1FC] px-2 py-1 text-sm font-medium text-[#1574E5]">
                      Popular
                    </p>
                  )}
                </div>

                <p className="leading-6">{plan.description}</p>
              </div>

              <Button
                isLoading={
                  addingToCart[
                    (plan.package_id % 3).toString() as "0" | "1" | "2"
                  ]
                }
                onClick={() =>
                  handleAddToCart(bundle_id, plan.package_id, plan.package_name)
                }
                label="Add to cart"
                classNames="py-2"
              />

              <div className="!mt-6 divide-y">
                {plan.provisions.map((provision) => {
                  return (
                    <div
                      key={provision.provision_id}
                      className="flex items-center justify-start gap-2 py-4 text-sm xs:max-md:py-2"
                    >
                      <div className="center size-8 min-w-8">
                        {" "}
                        <CheckedCircleSVG />
                      </div>

                      {provision.description}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* ADD ONS */}
      <section className="mt-5 flex items-center justify-start gap-8 text-sm xs:max-md:flex-col xs:max-md:items-start xs:max-md:gap-3">
        <p className="text-nowrap font-semibold uppercase leading-5 text-grey700">
          Add ons:
        </p>

        <div className="noScrollbar flex w-full flex-wrap gap-4 xs:max-md:flex-wrap">
          {typeCastPageViewData.addons.map((addOn) => (
            <div
              key={addOn.add_ons_id}
              className="text-nowrap rounded-lg bg-grey100 px-3 py-2 font-medium leading-[150%] text-grey600 xs:max-md:text-xs"
            >
              {addOn.add_ons_name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default ServicePackagePage;
