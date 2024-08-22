"use client";
import { Button, FullLoader, Loader, ServiceCard, EmptyState } from "@/components";
import BarChart from "@/components/Dashboard/BarChart";
import UpcomingAppointment from "@/components/Dashboard/UpcomingAppointment";
import { BulbIcon } from "@/public/icons";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { fetchLatestAppointments } from "@/redux/order/features";
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
  const { appointments, isApointmentLoading } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getServices());
    dispatch(getUserOrderHistory());
    dispatch(fetchLatestAppointments());
  }, [dispatch]);


  // Dummy data, waiting for api
  const barChartData = {
    labels: ["Active Services", "Completed Services", "Total Services Bought"],
    dataValues: [5.8, 3, 7],
  };

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
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const profileIncomplete =
    !profile.user.profile?.address ||
    !profile.user.profile?.country ||
    !profile.user.profile?.state ||
    !profile.user.profile?.phone_number;

  const hasTransactions = orderHistory && orderHistory?.length > 0;

  return (
    <div className="container mx-auto pt-6 md:pt-0 flex flex-col gap-8 bg-dashboard-bg overflow-y-scroll">
      <div>
        <h4>Welcome, {profile.first_name}</h4>
        <p className="text-grey500">Select a service to get started</p>
      </div>

      {profileIncomplete && (
        <div className="mt-8 mb-10 bg-white py-4 px-6 flex items-center justify-between flex-wrap gap-6 md:gap-0 rounded-lg">
          <p className="text-black">Complete your profile setup</p>
          <Button
            label="Setup profile"
            classNames="bg-transparent w-fit border-[1.5px] border-primary600 text-primary600 py-3 px-4"
            onClick={() => router.push("/dashboard/settings")}
          />
        </div>
      )}

      <div
        className="ml-auto hidden md:flex gap-2 items-center w-fit border-none bg-primary500 text-white py-2 px-3 rounded-lg cursor-pointer mt-8"
        onClick={() => router.push("/dashboard/custom-recommendation")}
      >
        <BulbIcon />
        <span>Custom recommendations</span>
      </div>

      <div className="py-4 flex items-center justify-between">
        <h4 className="text-black text-[18px] md:text-[24px] font-medium md:font-bold">
          Popular services
        </h4>
        {hasTransactions &&
          orderHistory?.length > 3 &&
          services?.length > 3 && (
            <Button
              label="See all"
              classNames="bg-transparent w-fit border-none text-primary600 px-0 py-0"
              onClick={() => router.push("/dashboard/services")}
            />
          )}
      </div>

      <section className="flex flex-col gap-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-start gap-6 overflow-y-auto">
          {/* Show only the first three cards */}
          {hasTransactions ? (
            orderHistory
              ?.slice(0, 3)
              .map((transaction, i) => (
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
              .slice(0, 3)
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

        {/* Activity Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="text-2xl font-bold text-grey900 col-span-2">
            Activity
          </h3>
          {/* Chart Section*/}
          <div className="flex flex-col justify-between rounded-lg bg-white px-6 py-4">
            <h4 className="text-lg font-semibold text-grey900 border-b border-grey200 pb-4">
              My Services
            </h4>
            {/* Chart */}
            <div>
              <BarChart
                labels={barChartData.labels}
                dataValues={barChartData.dataValues}
              />
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="rounded-lg bg-white px-6 py-4 flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-grey900 border-b border-grey200 pb-4">
              Upcoming Appointments
            </h4>
            <div className="flex flex-col">
              {isApointmentLoading ? (
                <div className="flex items-center justify-center">
                  <Loader />
                </div>
              ) : appointments?.length === 0 ? (
                <p className="flex items-center justify-center">No upcoming appointments</p>
              ) : (
                appointments?.map((app, idx) => (
                  <UpcomingAppointment
                    key={idx}
                    callType={app.event_name}
                    desc={app.product_name}
                    date={new Date(app.event_date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
