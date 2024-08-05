"use client";
import { useState } from "react";
import { AllIcon, CheckboxIcon } from "@/public/svgs";
import { Order, Tabs } from "@/components";

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = [
    {
      name: "All",
      icon: <AllIcon fillColor={activeTab === "All" ? "#1574E5" : "#98A2B3"} />,
      count: 38,
    },
    {
      name: "Completed",
      icon: (
        <CheckboxIcon
          fillColor={activeTab === "Completed" ? "#1574E5" : "#98A2B3"}
        />
      ),
      count: 10,
    },
    {
      name: "Open",

      count: 28,
    },
  ];

  const orders: {
    packageName: string;
    price: string;
    dateBought: string;
    dateCompleted: string;
    status: "Open" | "Completed";
  }[] = [
    {
      packageName: "Search Engine Optimisation Basic",
      price: "$499",
      dateBought: "20 July 2024",
      dateCompleted: "-",
      status: "Open",
    },
    {
      packageName: "Search Engine Optimisation Basic",
      price: "$499",
      dateBought: "24 June 2024",
      dateCompleted: "24 June 2024",
      status: "Completed",
    },
    {
      packageName: "Search Engine Optimisation Basic",
      price: "$499",
      dateBought: "3 June 2024",
      dateCompleted: "3 June 2024",
      status: "Completed",
    },
    {
      packageName: "Content Marketing Standard",
      price: "$699",
      dateBought: "12 May 2024",
      dateCompleted: "12 June 2024",
      status: "Completed",
    },
    {
      packageName: "Social Media Management Basic",
      price: "$399",
      dateBought: "5 May 2024",
      dateCompleted: "-",
      status: "Open",
    },
    {
      packageName: "Email Marketing Advanced",
      price: "$599",
      dateBought: "22 April 2024",
      dateCompleted: "22 May 2024",
      status: "Completed",
    },
    {
      packageName: "PPC Advertising Basic",
      price: "$299",
      dateBought: "15 April 2024",
      dateCompleted: "-",
      status: "Open",
    },
    {
      packageName: "SEO Advanced",
      price: "$899",
      dateBought: "10 April 2024",
      dateCompleted: "10 May 2024",
      status: "Completed",
    },
    {
      packageName: "Content Creation Standard",
      price: "$499",
      dateBought: "1 April 2024",
      dateCompleted: "-",
      status: "Open",
    },
    {
      packageName: "Graphic Design Basic",
      price: "$199",
      dateBought: "25 March 2024",
      dateCompleted: "25 April 2024",
      status: "Completed",
    },
  ];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <section className="container mx-auto space-y-8">
      <Tabs
        tabs={tabs}
        showSortBy={true}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />

      <div className="space-y-10">
        {filteredOrders.map((order, index) => (
          <Order
            key={index}
            packageName={order.packageName}
            price={order.price}
            dateBought={order.dateBought}
            dateCompleted={order.dateCompleted}
            status={order.status}
          />
        ))}
      </div>
    </section>
  );
}
