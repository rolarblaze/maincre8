import { AppDispatch } from "../redux/store";
import { updateProgress } from "../redux/servicesTracker/tracker";
import { TrackingDetails } from "../redux/servicesTracker/interface";

export const handleProgressUpdate = (
  dispatch: AppDispatch,
  trackingDetails: TrackingDetails | null
) => {
  if (!trackingDetails) return;

  if (trackingDetails.brief_submission_date) {
    dispatch(updateProgress({ SubmitBriefInProgress: false }));
  }

  if (trackingDetails.onboarding_call_booked) {
    dispatch(updateProgress({ BookDiscoveryCallInProgress: false }));
  }

  if (trackingDetails.onboarding_call_link) {
    dispatch(updateProgress({ CompleteOnboardingCallInProgress: false }));
  }

  if (trackingDetails.brief_attachment_link) {
    dispatch(updateProgress({ ZohoProjectOnboardingInProgress: false }));
  }

  if (trackingDetails.meeting_start_time && trackingDetails.meeting_end_time) {
    dispatch(updateProgress({ MilestoneTrackingInProgress: false }));
  }

  if (trackingDetails.offboarding_call_booked) {
    dispatch(updateProgress({ BookOffboardingCallInProgress: false }));
  }

  if (trackingDetails.offboarding_call_link) {
    dispatch(updateProgress({ OffboardingCallInProgress: false }));
  }

  if (trackingDetails.project_completed_status) {
    dispatch(updateProgress({ ProjectCompletedInProgress: false }));
  }
};
