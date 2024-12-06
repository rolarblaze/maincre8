"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Section from "./Sections";
import { getServices } from "../../redux/shop/features";
import { RootState } from "@/redux/store";
import Spinner from "../Spinner";
import { mapServicesToProps } from "./data/shopData";

const ShopSections = () => {
  const dispatch = useAppDispatch();
  const shopState = useAppSelector((state: RootState) => state.service);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  if (shopState.isLoading) {
    return (
      <div className="mx-auto flex h-screen w-full items-center justify-center">
        <Spinner />
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
