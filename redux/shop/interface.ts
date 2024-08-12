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

export interface ServicesState {
  services: Service[];
  isLoading: boolean;
  error: string | null;
}
