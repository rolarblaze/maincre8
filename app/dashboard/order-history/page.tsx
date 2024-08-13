"use client";
import { useState, useEffect } from "react";
import { AllIcon, CheckboxIcon } from "@/public/svgs";
import { Order } from "@/components";
import Tabs from "@/components/Dashboard/Tabs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUserOrderHistory } from "@/redux/order/features";
import { UserTransaction } from "@/redux/order/interface";
import Loader from "@/components/Spinner/Loader";
import { EmptyState } from "@/components";

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
      count: orders?.user_transactions.filter(order => order.status === "successful").length || 0,
    },
    {
      name: "Open",

      count: orders?.user_transactions.filter(order => order.status !== "successful").length || 0,
    },
  ];


  const filteredOrders =
    activeTab === "All"
      ? orders?.user_transactions
      : orders?.user_transactions.filter(order =>
        activeTab === "Completed" ? order.status === "successful" : order.status !== "successful"
      );

  return (
    <section className="container mx-auto space-y-8">
      <Tabs
        tabs={tabs}
        showSortBy={true}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          filteredOrders?.length === 0 ? (
            <div className="w-full mx-auto flex items-center justify-center">
              <EmptyState
                imgSrc="order-empty"
                text="You have not bought any service. Buy a package to get started"
                link="Browse packages"
                to="/dashboard/services"
              />
            </div>
          ) : (
            <div className="space-y-10">
              {filteredOrders?.map((order: UserTransaction, index: number) => (
                <Order
                  key={index}
                  packageName={order.package.package_name}
                  price={order.amount.toLocaleString("en-US", { style: "currency", currency: order.currency })}
                  dateBought={new Date(order.created_at).toLocaleDateString()}
                  dateCompleted={order.status === "successful" ? new Date(order.updated_at).toLocaleDateString() : "-"}
                  status={order.status === "successful" ? "Completed" : "Open"}
                />
              ))}
            </div>
          )
        )
      }

    </section>
  );
}
