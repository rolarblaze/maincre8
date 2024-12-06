import { Package } from "../shop/interface";

export interface PackagePayment {
  package_id: number;
  currency: "NGN";
}
export interface UploadBriefFile {
  file: File;
  id: number;
}

export interface TrackingDetails {
  transaction: {
    transaction_id: number;
    created_at: string;
  };
  package_tracking_id: number;
  transaction_id: number;
  brief_submitted: boolean;
  brief_attachment_link: string;
  onboarding_call_booked: boolean;
  onboarding_call_link: string;
  offboarding_call_booked: boolean;
  offboarding_call_link: string;
  project_completed_status: boolean;
  meeting_start_time: string;
  meeting_end_time: string;
  brief_submission_date: string;
  meeting_code: string;
  off_boarding_meeting_code: string;
  off_boarding_meeting_start_time: string;
  off_boarding_meeting_end_time: string;
  zoho_project_is_available: true;
  zoho_project_status: string;
  milestone_tracking_completed: boolean;
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

export interface TrackingProgress {
  SubmitBriefInProgress: boolean;
  BookDiscoveryCallInProgress: boolean;
  CompleteOnboardingCallInProgress: boolean;
  ZohoProjectOnboardingInProgress: boolean;
  MilestoneTrackingInProgress: boolean;
  BookOffboardingCallInProgress: boolean;
  OffboardingCallInProgress: boolean;
  ProjectCompletedInProgress: boolean;
  activeBundle: {
    activeBundleName: string;
    trackingId: string;
  } | null;
}
