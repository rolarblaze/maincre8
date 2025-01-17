import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackingProgress } from "./interface";

interface TrackingState {
  trackingProgress: TrackingProgress;
}

const initialState: TrackingState = {
  trackingProgress: {
    SubmitBriefInProgress: false,
    BookDiscoveryCallInProgress: false,
    CompleteOnboardingCallInProgress: false,
    ZohoProjectOnboardingInProgress: false,
    MilestoneTrackingInProgress: false,
    BookOffboardingCallInProgress: false,
    OffboardingCallInProgress: false,
    ProjectCompletedInProgress: false,
    activeBundle: null,
  },
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    updateProgress: (
      state,
      action: PayloadAction<Partial<TrackingProgress>>,
    ) => {
      state.trackingProgress = { ...state.trackingProgress, ...action.payload };
    },
    handleSetCurrentTrackingBundleName: (
      state,
      action: PayloadAction<{
        activeBundleName: string;
        trackingId: string;
      }>,
    ) => {
      state.trackingProgress.activeBundle = action.payload;
    },
  },
});

export const { updateProgress, handleSetCurrentTrackingBundleName } =
  trackerSlice.actions;
export const trackerReducer = trackerSlice.reducer;
