import { Package } from "../shop/interface";

export interface UploadBriefFile {
  file: File;
  id: number;
}

export interface TrackingDetails {
  package_tracking_id: number;
  transaction_id: number;
  brief_submitted: true;
  brief_attachment_link: string;
  onboarding_call_booked: boolean;
  onboarding_call_link: string;
  offboarding_call_booked: boolean;
  offboarding_call_link: string;
  project_completed_status: string;
  meeting_start_time: string;
  meeting_end_time: string;
  brief_submission_date: string;
}

export interface BookDiscoveryCall {
  detail: string;
  booking_link: string;
}

export interface DownloadSubmittedTransactionBrief {
  detail: string;
  brief_attachment_link: string;
}

export interface BookOffBoardingCall extends BookDiscoveryCall {}

export interface CalendlyDetails {
  detail: string;
}

export interface SubmitBriefForPackage extends BookDiscoveryCall {}

export interface OrderHistoryResponse {
  transaction_id: number;
  trans_ref: string;
  amount: number;
  currency: string;
  status: string;
  package: Package;
  created_at: string;
  updated_at: string;
}
[];
