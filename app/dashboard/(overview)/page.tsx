"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FullLoader,
  Loader,
  ServiceCard,
  EmptyState,
} from "@/components";
import BarChart from "@/components/Dashboard/BarChart";
import UpcomingAppointment from "@/components/Dashboard/UpcomingAppointment";
import { getUserOrderHistory } from "@/redux/servicesTracker/features";
import { fetchLatestAppointments } from "@/redux/order/features";
import { fetchActivityStatistics } from "@/redux/auth/features";
import { getBundles } from "@/redux/shop/features";
import { BulbIcon } from "@/public/icons";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";

import Image from "next/image";
import Link from "next/link";
import { getBundlesClass } from "@/components/NewPages/LandingPage/sections/PackagesSection/helperFunc";
import { getCartItems } from "@/redux/cart/features";

const Overview = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { services, isLoading, error } = useAppSelector(
    (state) => state.service,
  );
  const { orderHistory } = useAppSelector((state) => state.services);
  const { cartItems } = useAppSelector((state) => state.cart);
  const { isLoadingProfile, profile } = useAppSelector((state) => state.auth);
  const { appointments, isApointmentLoading } = useAppSelector(
    (state) => state.order,
  );
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );

  useEffect(() => {
    if (bundlesData.length === 0) {
      dispatch(getBundles());
    }
    dispatch(getUserOrderHistory());
    dispatch(fetchLatestAppointments());
    dispatch(fetchActivityStatistics());
    dispatch(getCartItems());
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

  if (isLoadingProfile || bundlesData.length === 0) {
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
  const showAppointments = !(!appointments || appointments.length === 0);
  const showServices = !(
    active_services + completed_services + total_services_bought ===
    0
  );

  return (
    <div className="noScrollbar flex flex-col overflow-y-scroll pb-10 font-manrope xs:max-md:mx-auto xs:max-md:min-w-full [&>*]:pl-6 xs:max-md:[&>*]:px-0">
      <header className="space-y-2 pb-4 xs:max-md:space-y-0 xs:max-md:pt-5">
        {/* <h2 className="text-2xl font-semibold leading-8 text-grey900">
          Welcome, {profile.first_name}
        </h2>
        <p  className="text-lg font-semibold leading text-grey600">We&apos;re glad to see you again.</p> */}
        <p className="text-grey500">
          {hasTransactions
            ? "Access your services below"
            : "How can we assist you today?"}
        </p>
      </header>

      <hr className="xs:max-md:hidden" />

      {/* Chose a package to get started */}
      {!hasTransactions && (
        <section className="space-y-4 pt-10">
          <h3 className="text-2xl font-bold leading-8 text-grey900">
            Choose a Package to Get Started
          </h3>

          <div className="flex flex-wrap gap-6 px-6 py-10 xs:max-md:px-2">
            {bundlesData.map(
              ({ bundle_id, bundle_image_link, bundle_name, description }) => {
                return (
                  <Link
                    key={bundle_id}
                    href={`/dashboard/services/${bundle_id}`}
                    className={`group w-[30%] min-w-60 overflow-hidden rounded-lg border border-ash xs:max-md:w-[45%] xs:max-md:min-w-64 ${getBundlesClass[bundle_id - 1].tabClass}`}
                  >
                    <figure
                      className={`relative min-h-60 w-full ${getBundlesClass[bundle_id - 1].bgClass}`}
                    >
                      <Image
                        src={bundle_image_link as string}
                        alt={description}
                        fill={true}
                        priority
                        className="object-cover"
                      />
                    </figure>

                    <div className="p-4 font-manrope *:leading-[150%]">
                      <h4 className="text-lg font-semibold text-grey900">
                        {bundle_name}
                      </h4>
                      <p className="text-sm font-medium text-grey500">
                        {description}
                      </p>
                    </div>
                  </Link>
                );
              },
            )}
          </div>
        </section>
      )}

      {/* <div
        className="ml-auto mt-8 hidden w-fit cursor-pointer items-center gap-2 rounded-lg border-none bg-primary500 !px-3 !py-2 text-white md:flex"
        onClick={() => router.push("/dashboard/custom-recommendation")}
      >
        <BulbIcon />
        <span>Custom recommendations</span>
      </div> */}

      {profileIncomplete && (
        <div className="mb-10 mt-8 hidden flex-wrap items-center justify-between gap-6 rounded-lg px-6 py-4 xs:max-md:my-0 xs:max-md:flex xs:max-md:flex-col xs:max-md:items-start xs:max-md:gap-2 xs:max-md:bg-[#F5F5F5] md:gap-0">
          <p className="text-black xs:max-md:ml-3 xs:max-md:font-bold">
            Complete your profile setup
          </p>
          <Button
            label="Setup profile"
            classNames="bg-transparent font-bold w-fit border-[1.5px] xs:max-md:border-2 border-primary600 text-primary600 py-3 px-4 xs:max-md:p-2 xs:max-md:text-xs xs:max-md:ml-3"
            onClick={() => router.push("/dashboard/settings")}
          />
        </div>
      )}

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

      {/* Services and Appointments Activity */}
      <section className="flex w-full flex-col gap-10">
        <div className="mt-10 space-y-2 xs:max-md:mt-5">
          <h3 className="lead text-2xl font-bold text-grey900 xs:max-md:text-xl">
            My Services
          </h3>
          <div className="noScrollbar w-full overflow-auto">
            <div className="flex flex-wrap gap-5">
              {hasTransactions ? (
                orderHistory
                  .slice(0, 3)
                  ?.map((transaction, i) => (
                    <ServiceCard
                      key={i}
                      bundleId={transaction.package.bundle.bundle_id}
                      category={transaction.package.package_name}
                      title={transaction.package.package_name}
                      description={transaction.package.description}
                      color={
                        bundleColors[transaction.package.bundle.bundle_name]
                      }
                      id={transaction.package.package_id}
                      transactionId={transaction.transaction_id}
                      transactionDate={transaction.created_at}
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
                  ?.map((card, index) => (
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
          </div>
        </div>

        <div className="space-y-10 pr-5 xs:max-md:space-y-2 xs:max-md:pr-0">
          {(showServices || showAppointments) && (
            <h3 className="col-span-2 text-2xl font-bold text-grey900 xs:max-md:text-xl">
              Activity
            </h3>
          )}

          <div className="flex w-full flex-wrap gap-10 xs:max-md:flex-col">
            {showServices && (
              <div className="noScrollbar w-1/2 min-w-[25rem] xs:max-md:w-full xs:max-md:overflow-auto">
                <div className="flex w-full flex-col justify-between space-y-2 rounded-lg border bg-white px-6 py-4 shadow-lg xs:max-md:min-w-[25rem]">
                  <h4 className="border-b border-grey200 pb-4 text-lg font-semibold text-grey900">
                    My Services
                  </h4>
                  <div className="w-full">
                    <BarChart
                      labels={barChartData.labels}
                      dataValues={barChartData.dataValues}
                    />
                  </div>
                </div>
              </div>
            )}

            {
              <div className="noScrollbar w-1/2 min-w-[25rem] xs:max-md:w-full xs:max-md:overflow-auto">
                <div className="flex h-full w-full flex-col gap-4 rounded-lg border bg-white px-6 py-4 shadow-lg xs:max-md:min-w-[25rem]">
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
                          date={new Date(app.event_date).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
