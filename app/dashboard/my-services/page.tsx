"use client";
import { EmptyState, ServiceCard } from "@/components";
import { useAppSelector } from "@/redux/store";
import React from "react";

const MyServices = () => {
  const { profile } = useAppSelector((state) => state.auth);

  const bundleColors: { [key: string]: string } = {};

  const transactions = profile.user.transactions;

  return (
    <>
      {transactions.length < 1 ? (
        <EmptyState
          imgSrc="myservices-empty"
          text="Buy a package to get started"
          link="Shop now"
          to="/dashboard/services"
        />
      ) : (
        <div className="grid md:grid-cols-3 gap-6 overflow-y-auto">
          {transactions?.map((transaction, i) => (
            <ServiceCard
              key={i}
              category={transaction.package.package_name}
              title={transaction.package.package_name}
              description={transaction.package.description}
              color={bundleColors[transaction.package.bundle.bundle_name]}
              id={transaction.package.package_id}
              isPaid
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyServices;
