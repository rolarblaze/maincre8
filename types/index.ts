export interface Package {
  package_name: string;
  package_id: number;
  bundle_id: number;
  price: number | null;
  description: string;
  provisions: Provision[];
}

export interface Provision {
  description: string;
  provision_id: number;
  package_id: number;
  availability: boolean;
  tags: string;
}
