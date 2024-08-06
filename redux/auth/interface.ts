export interface User {
  id?: string;
  access_token?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  is_business?: boolean;
  is_individual?: boolean;
  is_verified?: boolean;
}

export interface SignUpFormValues {
  firstName?: string;
  lastName?: string;
  businessName?: string;
  email: string;
  password: string;
  isBusiness?: boolean;
}

export interface UpdateInfo {
  phone_number: string;
  country: string;
  state: string;
  address: string;
}
