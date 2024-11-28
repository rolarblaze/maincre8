"use client";
import { useState, useEffect } from "react";
import moment from "moment";
import { AllIcon, CheckboxIcon } from "@/public/svgs";
import { Order } from "@/components";
import Spinner from "@/components/Spinner";
import Tabs from "@/components/Dashboard/Tabs";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUserOrderHistory } from "@/redux/order/features";
import { OrderHistoryResponse, UserTransaction } from "@/redux/order/interface";
import Loader from "@/components/Spinner/Loader";
import { EmptyState } from "@/components";
import MobileOrder from "@/components/Dashboard/MobileOrder";
import { addAlert } from "@/redux/alerts";
import {
  initializeSession,
  addItemToCart,
  getCartItems,
} from "@/redux/cart/features";

export default function OrderHistory() {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [addingToCart, setAddingToCart] = useState("");
  const { orders, isLoading, error } = useAppSelector((state) => state.order);

  // Handling the "Add To Cart" globally across the Desktop and Mobile View of the Order History
  const handleAddToCart = async (
    bundle_id: number,
    package_id: number,
    packageName: string,
    ref: string,
  ) => {
    try {
      setAddingToCart(ref);
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
      setAddingToCart("");
    }
    dispatch(getCartItems());
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

  // function so sort and arrange histories by date
  function sortOrders(transactions: UserTransaction[] | null) {
    let sortedOrders: { [key: string]: UserTransaction[] } = {};

    if (!transactions) {
      return { sortedKeys: [], sortedOrders: {} };
    }

    for (let order of transactions) {
      let dateBought = moment(order.created_at).format("DD MMMM YYYY");
      if (!sortedOrders[dateBought]) {
        sortedOrders[dateBought] = [];
      }
      sortedOrders[dateBought].push(order);
    }
    return {
      sortedKeys: Object.keys(sortedOrders),
      sortedOrders: sortedOrders,
    };
  }

  const filteredOrders =
    activeTab === "All"
      ? orders?.user_transactions
      : orders?.user_transactions.filter((order) =>
          activeTab === "Completed"
            ? order.status === "successful"
            : order.status !== "successful",
        );

  return (
    <section className="mt-4 space-y-8 px-5">
      <div className="w-full overflow-auto md:hidden">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={(tabName) => setActiveTab(tabName)}
        />
      </div>
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner className="h-10 w-10 border-blue-500" />
        </div>
      ) : sortOrders(filteredOrders as UserTransaction[] | null).sortedKeys
          .length === 0 ? (
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
        <div className="space-y-10 pb-10">
          {sortOrders(
            filteredOrders as UserTransaction[] | null,
          ).sortedKeys?.map((dateBought: string, index: number) => (
            <div key={index}>
              {/* Desktop view order */}
              <Order
                handleAddToCart={handleAddToCart}
                addingToCart={addingToCart}
                dateBought={dateBought}
                histories={
                  sortOrders(filteredOrders as UserTransaction[] | null)
                    .sortedOrders[dateBought]
                }
              />

              {/* Mobile view order */}
              <MobileOrder
                handleAddToCart={handleAddToCart}
                addingToCart={addingToCart}
                dateBought={dateBought}
                histories={
                  sortOrders(filteredOrders as UserTransaction[] | null)
                    .sortedOrders[dateBought]
                }
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
