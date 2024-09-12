"use client";
import { EmptyState, Loader, ServiceCard } from "@/components";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

const MyServices = () => {
  const { orderHistory, loading } = useAppSelector((state) => state.services);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, [dispatch]);

  const bundleColors: { [key: string]: string } = {};

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
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
        <div className="grid md:grid-cols-3 gap-6 overflow-y-auto">
          {orderHistory?.map((transaction, i) => (
            <ServiceCard
              key={i}
              category={transaction.package.package_name}
              title={transaction.package.package_name}
              description={transaction.package.description}
              color={bundleColors[transaction.package.bundle.bundle_name]}
              id={transaction.package.package_id}
              transactionId={transaction.transaction_id}
              isPaid
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyServices;
