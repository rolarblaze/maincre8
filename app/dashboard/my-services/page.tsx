"use client";
import { EmptyState, ServiceCard } from "@/components";

import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import Spinner from "@/components/Spinner";

const MyServices = () => {
  const { orderHistory, loading } = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  const bundleColors: { [key: string]: string } = {};

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner className="border-blue-500" />
      </div>
    );

  return (
    <>
      {orderHistory && orderHistory?.length < 1 ? (
        <EmptyState
          imgSrc="/images/myservices-empty.png"
          text="Buy a package to get started"
          link="Shop now"
          to="/dashboard/services"
          imgStyle=""
        />
      ) : (
        <div className="noScrollbar flex p-6 xs:max-md:px-0 xs:max-md:gap-0 xs:max-md:gap-y-6 xs:max-md:justify-center flex-wrap w-full gap-5">
          {orderHistory?.map((transaction, i) => (
            <ServiceCard
              key={i}
              bundleId={transaction.package.bundle.bundle_id}
              category={transaction.package.package_name}
              title={transaction.package.package_name}
              description={transaction.package.description}
              color={bundleColors[transaction.package.bundle.bundle_name]}
              id={transaction.package.package_id}
              transactionId={transaction.transaction_id}
              transactionDate={transaction.created_at}
              isPaid
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyServices;
