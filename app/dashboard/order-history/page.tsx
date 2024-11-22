"use client";
import { useState, useEffect } from "react";
import moment from "moment";
import { AllIcon, CheckboxIcon } from "@/public/svgs";
import { Order } from "@/components";
import Tabs from "@/components/Dashboard/Tabs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUserOrderHistory } from "@/redux/order/features";
import { UserTransaction } from "@/redux/order/interface";
import Loader from "@/components/Spinner/Loader";
import { EmptyState } from "@/components";
import MobileOrder from "@/components/Dashboard/MobileOrder";
import { addAlert } from "@/redux/alerts";
import { initializeSession, addItemToCart } from "@/redux/cart/features";

export default function OrderHistory() {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [addingToCart, setAddingToCart] = useState(false);
  const { orders, isLoading, error } = useAppSelector((state) => state.order);

  // Handling the "Add To Cart" globally across the Desktop and Mobile View of the Order History
  const handleAddToCart = async (
    bundle_id: number,
    package_id: number,
    packageName: string,
  ) => {
    try {
      setAddingToCart(true);
      // Check if session_id exists in localStorage
      let sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        const initializeSessionResult =
          await dispatch(initializeSession()).unwrap();
        sessionId = initializeSessionResult.session_id;
      }

      const result = await dispatch(
        addItemToCart({ bundle_id, package_id }),
      ).unwrap();

      // Dispatch success alert with the response message
      dispatch(
        addAlert({
          id: `Added ${packageName} to cart`,
          headText: "Success",
          subText: result.detail,
          type: "success",
          autoClose: true,
        }),
      );
    } catch (error) {
      // Dispatch error alert
      dispatch(
        addAlert({
          id: `Error adding ${packageName} to cart`,
          headText: "Error",
          subText: (error as Error)?.message || "Failed to add item to cart",
          type: "error",
          autoClose: true,
        }),
      );
    } finally {
      setAddingToCart(false);
    }
  };

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

  return (
    <section className="container mt-4 space-y-8 md:mx-auto">
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
                handleAddToCart={handleAddToCart}
                addingToCart={addingToCart}
                package_id={order.package.package_id}
                bundle_id={order.package.bundle.bundle_id}
                packageName={`${order.package.bundle.bundle_name} (${order.package.package_name})`}
                price={order.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: order.currency,
                })}
                dateBought={moment(order.created_at).format("DD MMMM YYYY")}
                dateCompleted={
                  order.status === "successful"
                    ? moment(order.updated_at).format("DD MMMM YYYY")
                    : "-"
                }
                status={order.status === "successful" ? "Completed" : "Open"}
              />

              {/* Mobile view order */}
              <MobileOrder
                handleAddToCart={handleAddToCart}
                addingToCart={addingToCart}
                package_id={order.package.package_id}
                bundle_id={order.package.bundle.bundle_id}
                packageName={`${order.package.bundle.bundle_name} (${order.package.package_name})`}
                price={order.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: order.currency,
                })}
                dateBought={moment(order.created_at).format("DD MMMM YYYY")}
                dateCompleted={
                  order.status === "successful"
                    ? moment(order.updated_at).format("DD MMMM YYYY")
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
