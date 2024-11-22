import {
  BookDiscoveryCall,
  BookOffboardingCall,
  BundleBought,
  CompleteOnboardingCall,
  MilestoneTracking,
  OffboardingCall,
  ProjectCompleted,
  SubmittedBrief,
  ZohoProjectOnboarding,
} from "../Steps";



// let g = {
//   transaction: {
//     transaction_id: 39,
//     created_at: "2024-11-18T13:53:33.295064Z",
//   },
//   package_tracking_id: 5,
//   transaction_id: 39,
//   brief_submitted: false,
//   brief_attachment_link: null,
//   onboarding_call_booked: false,
//   onboarding_call_link: null,
//   offboarding_call_booked: false,
//   offboarding_call_link: null,
//   project_completed_status: false,
//   meeting_code: null,
//   meeting_start_time: null,
//   meeting_end_time: null,
//   brief_submission_date: null,
//   off_boarding_meeting_code: null,
//   off_boarding_meeting_start_time: null,
//   off_boarding_meeting_end_time: null,
//   zoho_project_is_available: false,
//   zoho_project_status: "In progress",
//   milestone_tracking_completed: false,
// };

const MyPackage = () => {
  return (
    <div className="space-y-6">
      <BundleBought />
      <SubmittedBrief />
      <BookDiscoveryCall />
      <CompleteOnboardingCall />
      <ZohoProjectOnboarding />
      <MilestoneTracking />
      <BookOffboardingCall />
      <OffboardingCall />
      <ProjectCompleted />
    </div>
  );
};

export default MyPackage;
