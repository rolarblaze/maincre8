"use client";
import { Button, FullLoader, Loader, ServiceCard } from "@/components";
import { BulbIcon } from "@/public/icons";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { getServices } from "@/redux/shop/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Overview = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { services, isLoading, error } = useAppSelector((state) => state.shop);
  const { orderHistory, loading } = useAppSelector((state) => state.services);
  const { isLoadingProfile, profile } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getServices());
    dispatch(getUserOrderHistory());
  }, [dispatch]);

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

  if (isLoadingProfile || loading) {
    return <FullLoader />;
  }

  const profileIncomplete =
    !profile.user.profile?.address ||
    !profile.user.profile?.country ||
    !profile.user.profile?.state ||
    !profile.user.profile?.phone_number;

  const hasTransactions = orderHistory && orderHistory?.length > 0;

  return (
    <div className="container mx-auto">
      <div>
        <h4>Welcome, {profile.first_name}</h4>
        <p className="text-grey500">Select a service to get started</p>
      </div>

      {profileIncomplete && (
        <div className="mt-8 mb-10 bg-white py-4 px-6 flex items-center justify-between rounded-lg">
          <p className="text-black">Complete your profile setup</p>
          <Button
            label="Setup profile"
            classNames="bg-transparent w-fit border-[1.5px] border-primary600 text-primary600 py-3 px-4"
            onClick={() => router.push("/dashboard/settings")}
          />
        </div>
      )}

      <div
        className="ml-auto flex gap-2 items-center w-fit border-none bg-primary500 text-white py-2 px-3 rounded-lg cursor-pointer mt-8"
        onClick={() => router.replace("/dashboard/custom-recommendations")}
      >
        <BulbIcon />
        <span>Custom recommendations</span>
      </div>

      <div className="py-4 flex items-center justify-between">
        <h4 className="text-black">Popular services</h4>
        <Button
          label="See all"
          classNames="bg-transparent w-fit border-none text-primary600 px-0 py-0"
          onClick={() => router.replace("/dashboard/services")}
        />
      </div>

      <section className="flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-6 overflow-y-auto">
          {hasTransactions ? (
            orderHistory?.map((transaction, i) => (
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
            ))
          ) : isLoading ? (
            <Loader />
          ) : (
            services
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
              ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Overview;
