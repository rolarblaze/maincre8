import { ReactElement } from "react";
import { Service } from "@/redux/shop/interface";
import { BasicIcon, PremiumIcon, StandardIcon } from "@/public/icons";

const getIconForPackage = (packageName: string): ReactElement => {
  switch (packageName) {
    case "Basic Package":
      return BasicIcon;
    case "Standard Package":
      return StandardIcon;
    case "Premium Package":
      return PremiumIcon;
    default:
      return BasicIcon; // Default icon
  }
};


export const mapServicesToProps = (servicesData: Service[]) => {
  return servicesData.map(service => ({
    serviceName: service.service_name,
    bundles: service.bundles?.map(bundle => ({
      bundleId: bundle.bundle_id,
      bundle: bundle.bundle_name,
      packages: bundle.packages?.map(pkg => ({
        packageId: pkg.package_id,
        packageName: pkg.package_name,
        icon: getIconForPackage(pkg.package_name),
        description: pkg.description || "",
        price: pkg.price || "$0.00",
        features: pkg.provisions.map(provision => provision.description) || [],
      })) || []
    })) || []
  }));
};

