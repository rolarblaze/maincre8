
export interface Service {
    service_name: string;
    service_id: number;
  }
  
  export interface Bundle {
    bundle_name: string;
    bundle_id: number;
    service: Service;
  }
  
  export interface Package {
    package_name: string;
    package_id: number;
    price: number | null;
    description: string;
    bundle: Bundle;
  }
  
  export interface UserTransaction {
    transaction_id: number;
    trans_ref: string;
    amount: number;
    currency: string;
    status: string;
    package: Package;
    created_at: string;
    updated_at: string;
  }
  
  export interface OrderHistoryResponse {
    user_transactions: UserTransaction[];
  }
  