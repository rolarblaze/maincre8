"use client";
import { Loader, ServiceCard } from "@/components";
import Tabs from "@/components/Dashboard/Tabs";
import {
  AllIcon,
  ContentCopywritingIcon,
  CreativeDesignIcon,
  DigitalMarketingIcon,
} from "@/public/svgs";
import { getPackages } from "@/redux/shop/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState, useCallback, useRef } from "react";

const Services = () => {
  const dispatch = useAppDispatch();
  const { services, isLoading, error, packages } = useAppSelector(
    (state) => state.shop
  );

  const [limit, setLimit] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPackageElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLimit((prevLimit) => prevLimit + 1);
          setOffset((prevOffset) => prevOffset + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    dispatch(getPackages({ limit, offset })).then((action) => {
      if (getPackages.fulfilled.match(action) && action.payload.length === 0) {
        setHasMore(false);
      }
    });
  }, [dispatch, limit, offset]);

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

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages.filter((pkg) =>
          pkg.provisions.some((prov) => prov.tags.includes(activeTab))
        );

  const packageCards = filteredPackages.flatMap((pkg) =>
    pkg.provisions.map((provision) => ({
      category: pkg.package_name,
      title: pkg.description || "No Description Available",
      description: provision.description,
      color: bundleColors[pkg.bundle.bundle_name] || "#000000",
      id: pkg.package_id,
    }))
  );

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
        <div className="w-full grid grids-cols-2 md:grids-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto place-items-center">
          {packageCards.map((card, index) => (
            <div
              key={index}
              ref={
                index === packageCards.length - 1 ? lastPackageElementRef : null
              }
            >
              <ServiceCard
                category={card.category}
                title={card.title}
                description={card.description}
                color={card.color}
                id={card.id}
              />
            </div>
          ))}
          {isLoading && (
            <div className="w-full h-full flex items-center justify-center col-span-full">
              <Loader />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
