"use client";
import { EmptyState, FullLoader, ServiceCard } from "@/components";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

const MyServices = () => {
  const { orderHistory, loading } = useAppSelector((state) => state.services);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, []);

  const bundleColors: { [key: string]: string } = {};

  // if (orderHistory) {
  //   console.log(orderHistory);
  // }

  if (loading) return <FullLoader />;

  return (
    <>
      {orderHistory && orderHistory?.length < 1 ? (
        <EmptyState
          imgSrc="myservices-empty"
          text="Buy a package to get started"
          link="Shop now"
          to="/dashboard/services"
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
