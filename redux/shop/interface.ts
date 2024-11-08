export interface Transaction {
  amount: number;
  created_at: string;
  currency: string;
  package: Package;
  status: string;
  trans_ref: string;
  transaction_id: number | string;
  updated_at: string;
}

export interface Package {
  package_name: string;
  package_id: number;
  description?: string;
  price?: string | null;
  provisions: Provision[];
  bundle: Bundle;
}

export interface Provision {
  description: string;
  provision_id: number;
  availability: boolean;
  tags: string;
}

export interface Bundle {
  bundle_name: string;
  bundle_id: number;
  service?: {
    service_name: string;
    service_id: number;
  };
  packages: Package[];
}

export interface Service {
  service_name: string;
  service_id: number;
  bundles: Bundle[];
}
export interface Packages {
  limit: number;
  offset: number;
  packages: Package[];
  total_count: number;
}

export interface ServicesState {
  services: Service[];
  packages: Package[];
  isLoading: boolean;
  error: string | null;
}

// Bundles Type for Shop
export interface PageViewData {
  bundle_name: string;
  bundle_id: number;
  description: string;
  content: string;
  bundle_image_link: string | null;
  price: string | null;
  packages: PackagesType[];
  addons: AddOnsType[];
}

export interface PackagesType {
  package_name: string;
  package_id: number;
  description: string;
  price: number;
  provisions: {
    provision_id: number;
    description: string;
  }[];
  created_at: string;
  updated_at: string;
}

export interface AddOnsType {
  add_ons_name: string;
  add_ons_id: number;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface GetBundlesEndPoint {
  bundles: PageViewData[];
}

export interface ShopReduxState {
  allShopBundles: PageViewData[];
  currentViewBundle: PageViewData | "";
}
