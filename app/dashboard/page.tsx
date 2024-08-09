"use client";
import { Loader, ServiceCard } from "@/components";
import { getUserProfile } from "@/redux/auth/features";

import { getServices } from "@/redux/shop/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const Overview = () => {
  const dispatch = useAppDispatch();
  const { services, isLoading, error } = useAppSelector((state) => state.shop);
  const { isLoadingProfile, profile } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  if (profile) {
    console.log(profile);
  }

  const bundleColors: { [key: string]: string } = {};
  const colors = ["#620FA3", "#006AA5", "#A30F44"];
  services.forEach((service, index) => {
    service.bundles.forEach((bundle) => {
      if (!bundleColors[bundle.bundle_name]) {
        bundleColors[bundle.bundle_name] = colors[index % colors.length];
      }
    });
  });

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h4>Welcome, {profile.first_name}</h4>
        <p className="text-grey500">Select a service to get started</p>
      </div>
      <section className="flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-6 overflow-y-auto">
          {isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <>
              {services
                .flatMap((service) =>
                  service.bundles.flatMap((bundle) =>
                    bundle.packages.flatMap((pkg) =>
                      pkg.provisions.map((provision) => ({
                        category: bundle.bundle_name,
                        title: pkg.package_name,
                        description: provision.description,
                        color: bundleColors[bundle.bundle_name],
                        id: pkg.package_id,
                      }))
                    )
                  )
                )
                .map((card, index) => (
                  <ServiceCard
                    key={index}
                    category={card.category}
                    title={card.title}
                    description={card.description}
                    color={card.color}
                    id={card.id}
                  />
                ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Overview;
