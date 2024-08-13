import { createSlice } from "@reduxjs/toolkit";
import {
  trackUserOrder,
  getUserOrderHistory,
  submitBriefForTracking,
  downloadBrief,
  bookDiscoveryCall,
  getCalendlyLink,
  bookOffBoardingCall,
} from "./features";
import {
  TrackingDetails,
  DownloadSubmittedTransactionBrief,
  BookDiscoveryCall,
  CalendlyDetails,
  BookOffBoardingCall,
  OrderHistoryResponse,
  SubmitBriefForPackage,
} from "./interface";

interface InitialState {
  trackingDetails: TrackingDetails | null;
  orderHistory: OrderHistoryResponse[] | null;
  uploadResponse: SubmitBriefForPackage | null;
  downloadBrief: DownloadSubmittedTransactionBrief | null;
  discoveryCall: BookDiscoveryCall | null;
  calendlyDetails: CalendlyDetails | null;
  offBoardingCall: BookOffBoardingCall | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  trackingDetails: null,
  orderHistory: null,
  uploadResponse: null,
  downloadBrief: null,
  discoveryCall: null,
  calendlyDetails: null,
  offBoardingCall: null,
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // trackUserOrder cases
      .addCase(trackUserOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trackUserOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.trackingDetails = payload;
      })
      .addCase(trackUserOrder.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // getUserOrderHistory cases
      .addCase(getUserOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserOrderHistory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orderHistory = payload;
      })
      .addCase(getUserOrderHistory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // submitBriefForTracking cases
      .addCase(submitBriefForTracking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitBriefForTracking.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.uploadResponse = payload;
      })
      .addCase(submitBriefForTracking.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // downloadBrief cases
      .addCase(downloadBrief.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(downloadBrief.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.downloadBrief = payload;
      })
      .addCase(downloadBrief.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // bookDiscoveryCall cases
      .addCase(bookDiscoveryCall.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookDiscoveryCall.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.discoveryCall = payload;
      })
      .addCase(bookDiscoveryCall.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // getCalendlyLink cases
      .addCase(getCalendlyLink.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCalendlyLink.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.calendlyDetails = payload;
      })
      .addCase(getCalendlyLink.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })

      // bookOffBoardingCall cases
      .addCase(bookOffBoardingCall.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookOffBoardingCall.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.offBoardingCall = payload;
      })
      .addCase(bookOffBoardingCall.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export default servicesSlice.reducer;
