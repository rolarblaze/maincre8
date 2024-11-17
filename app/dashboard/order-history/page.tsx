"use client";
import { useState, useEffect } from "react";
import moment from "moment"
import { AllIcon, CheckboxIcon } from "@/public/svgs";
import { Order } from "@/components";
import Tabs from "@/components/Dashboard/Tabs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUserOrderHistory } from "@/redux/order/features";
import { UserTransaction } from "@/redux/order/interface";
import Loader from "@/components/Spinner/Loader";
import { EmptyState } from "@/components";
import MobileOrder from "@/components/Dashboard/MobileOrder";

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const dispatch = useAppDispatch();
  const { orders, isLoading, error } = useAppSelector((state) => state.order);

  // Trigger fetching user order history on component mount
  useEffect(() => {
    dispatch(fetchUserOrderHistory());
  }, [dispatch]);

  const tabs = [
    {
      name: "All",
      icon: <AllIcon fillColor={activeTab === "All" ? "#1574E5" : "#98A2B3"} />,
      count: orders?.user_transactions.length || 0,
    },
    {
      name: "Completed",
      icon: (
        <CheckboxIcon
          fillColor={activeTab === "Completed" ? "#1574E5" : "#98A2B3"}
        />
      ),
      count:
        orders?.user_transactions.filter(
          (order) => order.status === "successful",
        ).length || 0,
    },
    {
      name: "Open",

      count:
        orders?.user_transactions.filter(
          (order) => order.status !== "successful",
        ).length || 0,
    },
  ];

  const filteredOrders =
    activeTab === "All"
      ? orders?.user_transactions
      : orders?.user_transactions.filter((order) =>
          activeTab === "Completed"
            ? order.status === "successful"
            : order.status !== "successful",
        );

  // let h = {
  //   transaction_id: 1,
  //   trans_ref: "LrENIfKxcINtjXLMgtjvpUayOQAefALriyROeBDCQASHGEraWl",
  //   amount: 250,
  //   currency: "NGN",
  //   status: "pending",
  //   package: {
  //     package_name: "Starter Package",
  //     package_id: 1,
  //     price: 250,
  //     description: "Perfect for solo entrepreneurs",
  //     bundle: {
  //       bundle_name: "Ultimate Marketing",
  //       bundle_id: 1,
  //       bundle_image_link:
  //         "https://sellcrea8api.nyc3.cdn.digitaloceanspaces.com/bundle_image/All-In-OneBundle_XTfZJWTQXXjcMVrXbeztxHgQuixmtv_bundle_image.png",
  //     },
  //   },
  //   created_at: "2024-11-15T10:46:08.736886Z",
  //   updated_at: "2024-11-15T10:46:08.736886Z",
  //   package_tracking: null,
  // };

  return (
    <section className="container mx-auto space-y-8 mt-4">
      {isLoading ? (
        <Loader />
      ) : filteredOrders?.length === 0 ? (
        <div className="mx-auto flex w-full items-center justify-center">
          <EmptyState
            imgSrc="/images/order-empty.png"
            text="You have not bought any service. Buy a package to get started"
            link="Browse packages"
            to="/dashboard/services"
            imgStyle="!w-[246px] !h-[197px]"
          />
        </div>
      ) : (
        <div className="space-y-10">
          {filteredOrders?.map((order: UserTransaction, index: number) => (
            <div key={index}>
              {/* Desktop view order */}
              <Order
                packageName={`${order.package.bundle.bundle_name} (${order.package.package_name})`}
                price={order.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: order.currency,
                })}
                dateBought={moment(order.created_at).format('DD MMMM YYYY')}
                dateCompleted={
                  order.status === "successful"
                    ? new Date(order.updated_at).toLocaleDateString()
                    : "-"
                }
                status={order.status === "successful" ? "Completed" : "Active"}
              />

              {/* Mobile view order */}
              <MobileOrder
                packageName={order.package.package_name}
                price={order.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: order.currency,
                })}
                dateBought={new Date(order.created_at).toLocaleDateString()}
                dateCompleted={
                  order.status === "successful"
                    ? new Date(order.updated_at).toLocaleDateString()
                    : "-"
                }
                status={order.status === "successful" ? "Completed" : "Open"}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
