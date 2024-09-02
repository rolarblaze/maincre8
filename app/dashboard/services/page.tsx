"use client";
import { InputField, Loader, ServiceCard } from "@/components";
import Tabs from "@/components/Dashboard/Tabs";
import { SearchIcon } from "@/public/icons";
import {
  AllIcon,
  ContentCopywritingIcon,
  CreativeDesignIcon,
  DigitalMarketingIcon,
} from "@/public/svgs";
import { getServices } from "@/redux/shop/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const Services = () => {
  const dispatch = useAppDispatch();
  const { services, isLoading, error } = useAppSelector((state) => state.shop);
  const [activeTab, setActiveTab] = useState<string>("All");

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const tabs = [
    {
      name: "All",
      icon: <AllIcon fillColor={activeTab === "All" ? "#1574E5" : "#98A2B3"} />,
      count: services.length,
    },
    {
      name: "Digital marketing",
      icon: (
        <DigitalMarketingIcon
          fillColor={activeTab === "Digital marketing" ? "#1574E5" : "#98A2B3"}
        />
      ),
      count: services.filter(
        (service) => service.service_name === "Digital Marketing Services"
      ).length,
    },
    {
      name: "Creative design",
      icon: (
        <CreativeDesignIcon
          strokeColor={activeTab === "Creative design" ? "#1574E5" : "#98A2B3"}
        />
      ),
      count: services.filter(
        (service) => service.service_name === "Creative Design Services"
      ).length,
    },
    {
      name: "Content/copywriting",
      icon: (
        <ContentCopywritingIcon
          fillColor={
            activeTab === "Content/copywriting" ? "#1574E5" : "#98A2B3"
          }
        />
      ),
      count: services.filter(
        (service) => service.service_name === "Content/Copywriting Services"
      ).length,
    },
  ];

  const bundleColors: { [key: string]: string } = {};
  const colors = ["#620FA3", "#006AA5", "#A30F44"];
  services.forEach((service, index) => {
    service.bundles.forEach((bundle) => {
      if (!bundleColors[bundle.bundle_name]) {
        bundleColors[bundle.bundle_name] = colors[index % colors.length];
      }
    });
  });

  const filteredServices =
    activeTab === "All"
      ? services
      : services.filter((service) => service.service_name === activeTab);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <Tabs
        tabs={tabs}
        showSortBy={false}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <section className="w-full mx-auto pt-6 px-3 md:px-0">
        {/* <div className="max-w-[548px] w-full">
          <InputField
            type="text"
            placeholder=""
            value=""
            name="search"
            icon={<SearchIcon className="w-5 h-5" />}
          />
        </div> */}
        <div className="w-full grid grids-cols-2 md:grids-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto place-items-center">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {filteredServices
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

export default Services;
