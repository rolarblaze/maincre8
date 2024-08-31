"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Section from "./Sections";
import { getServices } from "../../redux/shop/features";
import { RootState } from "@/redux/store";
import { mapServicesToProps } from "./Data/shopData";
import Loader from "../Spinner/Loader";

const ShopSections = () => {
  const dispatch = useAppDispatch();
  const shopState = useAppSelector((state: RootState) => state.shop);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  if (shopState.isLoading) {
    return (
      <div className="mx-auto flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (shopState.error) {
    return <div>Error: {shopState.error}</div>;
  }

  const { services } = shopState;

  const serviceProps = mapServicesToProps(services);

  return (
    <div className="flex flex-col gap-40 mb-40">
      {serviceProps.map((service, index) => (
        <Section
          key={index}
          pageTitle={service.serviceName}
          sideScrollItems={service.bundles.map((bundle) => ({
            name: bundle.bundle,
          }))}
          bundles={service.bundles}
        />
      ))}
    </div>
  );
};

export default ShopSections;
