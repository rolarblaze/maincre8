"use client";
import {
  Button,
  FullLoader,
  Loader,
  ServiceCard,
  EmptyState,
} from "@/components";
import BarChart from "@/components/Dashboard/BarChart";
import UpcomingAppointment from "@/components/Dashboard/UpcomingAppointment";
import { BulbIcon } from "@/public/icons";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { fetchLatestAppointments } from "@/redux/order/features";
import { getServices } from "@/redux/services/features";
import { fetchActivityStatistics } from "@/redux/auth/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Overview = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { services, isLoading, error } = useAppSelector(
    (state) => state.service,
  );
  const { orderHistory } = useAppSelector((state) => state.services);
  const { isLoadingProfile, profile } = useAppSelector((state) => state.auth);
  const { appointments, isApointmentLoading } = useAppSelector(
    (state) => state.order,
  );

  useEffect(() => {
    dispatch(getServices());
    dispatch(getUserOrderHistory());
    dispatch(fetchLatestAppointments());
    dispatch(fetchActivityStatistics());
  }, [dispatch]);

  // Extract the activity statistics from the profile
  const { active_services, completed_services, total_services_bought } = profile
    .user.activityStatistics || {
    active_services: 0,
    completed_services: 0,
    total_services_bought: 0,
  };

  // Updated BarChart data using fetched activity statistics
  const barChartData = {
    labels: ["Active Services", "Completed Services", "Total Services Bought"],
    dataValues: [active_services, completed_services, total_services_bought],
  };

  // Logging for debugging purposes
  // console.log("Bar Chart Data: ", barChartData);

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

  if (isLoadingProfile) {
    return (
      <div className="flex items-center justify-center">
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
    <div className="noScrollbar container mx-auto flex flex-col gap-6 overflow-y-scroll px-4 py-6 font-manrope md:-m-6 md:gap-6 md:p-6">
      <div>
        <h4 className="text-2xl font-semibold leading-8">
          Welcome, {profile.first_name}
        </h4>
        <p className="text-grey500">How can we assist you today?</p>
      </div>

      <hr />

      {/* <div
        className="ml-auto mt-8 hidden w-fit cursor-pointer items-center gap-2 rounded-lg border-none bg-primary500 !px-3 !py-2 text-white md:flex"
        onClick={() => router.push("/dashboard/custom-recommendation")}
      >
        <BulbIcon />
        <span>Custom recommendations</span>
      </div> */}

      {/* {profileIncomplete && (
        <div className="mb-10 mt-8 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-white px-6 py-4 md:gap-0">
          <p className="text-black">Complete your profile setup</p>
          <Button
            label="Setup profile"
            classNames="bg-transparent w-fit border-[1.5px] border-primary600 text-primary600 py-3 px-4"
            onClick={() => router.push("/dashboard/settings")}
          />
        </div>
      )} */}

      {/* <div className="flex items-center justify-between py-4">
        <h4 className="text-[18px] font-medium text-black md:text-[24px] md:font-bold">
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
      </div> */}

      {/* <section className="flex flex-col gap-10">
        <div className="noScrollbar grid place-items-center gap-6 overflow-y-auto md:grid-cols-2 md:place-items-start lg:grid-cols-3">
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
                    })),
                  ),
                ),
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <h3 className="col-span-2 text-2xl font-bold text-grey900">
            Activity
          </h3>
          <div className="col-span-2 flex flex-col justify-between rounded-lg bg-white px-6 py-4 shadow-lg md:col-span-1">
            <h4 className="border-b border-grey200 pb-4 text-lg font-semibold text-grey900">
              My Services
            </h4>
            <div>
              <BarChart
                labels={barChartData.labels}
                dataValues={barChartData.dataValues}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-white px-6 py-4 shadow-lg">
            <h4 className="border-b border-grey200 pb-4 text-lg font-semibold text-grey900">
              Upcoming Appointments
            </h4>
            <div className="flex flex-col">
              {isApointmentLoading ? (
                <div className="flex items-center justify-center">
                  <Loader />
                </div>
              ) : !appointments || appointments.length === 0 ? (
                <p className="flex items-center justify-center py-10">
                  No upcoming appointments
                </p>
              ) : (
                appointments?.map((app, idx) => (
                  <UpcomingAppointment
                    key={idx}
                    callType={app.event_name}
                    desc={app.product_name}
                    date={new Date(app.event_date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Overview;
