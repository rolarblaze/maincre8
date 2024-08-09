export interface UserProfile {
  purchases: any[];
  user_email: string;
  phone_number: string;
  country: string;
  state: string;
  address: string;
  profile_image_link: string | null;
  created_at: string;
  updated_at: string;
}

export interface User {
  id?: string;
  access_token?: string;
  email?: string;
  is_business?: boolean;
  is_individual?: boolean;
  is_verified?: boolean;
  profile?: UserProfile;
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

export interface UpdatePassword {
  new_password: string;
}
