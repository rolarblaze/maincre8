"use client";
import Section from "./Sections";
import {
  Content_services,
  Creative_services,
  Digital_services,
} from "./Data/ShopBundlesData";
import {
  Content_Copywriting_Services,
  Creative_Design_Services,
  Digital_Marketing_Services,
} from "./Data/shopData";

const ShopSections = () => {
  return (
    <div className="flex flex-col gap-40 mb-40">
      <Section
        pageTitle="Digital Marketing Services"
        sideScrollItems={Digital_Marketing_Services}
        bundles={Digital_services}
      />
      <Section
        pageTitle="Creative Design Services s"
        sideScrollItems={Creative_Design_Services}
        bundles={Creative_services}
      />
      <Section
        pageTitle="Content/Copywriting Services "
        sideScrollItems={Content_Copywriting_Services}
        bundles={Content_services}
      />
    </div>
  );
};

export default ShopSections;
