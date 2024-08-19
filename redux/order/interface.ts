
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

export interface Appointment {
  event_name: string;
  event_date: string;
  product_name: string;
}


export type AppointmentResponse = Appointment[];

export interface Brief {
  id: number;
  contact_phone_number: string;
  target_audience_interest: string;
  additional_context: string;
  company_name: string;
  current_specific_business_challenges: string;
  existing_audience_persona_available: boolean;
  relevant_document_link: string;
  existing_audience_persona_description: string;
  type_of_industry: string;
  previously_implemented_digital_solutions: string;
  news_letter_subscription: boolean;
  solution_and_outcome_description: string;
  budget_projection_range: string;
  created_at: string;
  company_size: string;
  target_audience: string;
  preferred_solutions: string;
  updated_at: string;
  website_url: string;
  target_audience_age_group: string;
  main_competitors: string;
  user_email: string;
  contact_person_name: string;
  target_audience_gender: string;
  competitor_website_links: string;
  contact_email: string;
  target_audience_location: string;
  competitor_like_and_dislike: string;
}

export interface RecommendationHistoryResponse {
  briefs: Brief[];
}


