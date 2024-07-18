export interface Provision {
    description: string;
    provision_id: number;
    package_id: number;
    availability: boolean;
}

export interface Package {
    package_name: string;
    package_id: number;
    bundle_id: number;
    price: string | null;
    description: string;
    provisions: Provision[];
}

export interface Bundle {
    bundle_name: string;
    bundle_id: number;
    service_id: number;
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
