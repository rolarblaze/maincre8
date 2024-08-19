
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserOrderHistory, fetchLatestAppointments, fetchRecommendationHistory } from "./features";
import {
  OrderHistoryResponse,
  AppointmentResponse,
  Appointment,
  RecommendationHistoryResponse,
  Brief
} from "./interface";

export interface OrderSliceState {
  orders: OrderHistoryResponse | null;
  isLoading: boolean;
  isApointmentLoading: boolean;
  error: string | null;
  appointments: Appointment[] | null;
  recommendationHistory: Brief[] | null;
}

const initialState: OrderSliceState = {
  orders: null,
  isLoading: false,
  isApointmentLoading: false,
  error: null,
  appointments: null,
  recommendationHistory: null,
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchUserOrderHistory.fulfilled,
        (state, action: PayloadAction<OrderHistoryResponse>) => {
          state.orders = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      //latest appointments
      .addCase(fetchLatestAppointments.pending, (state) => {
        state.isApointmentLoading = true;
        state.error = null;
      })
      .addCase(
        fetchLatestAppointments.fulfilled,
        (state, action: PayloadAction<AppointmentResponse>) => {
          state.appointments = action.payload;
          state.isApointmentLoading = false;
        }
      )
      .addCase(fetchLatestAppointments.rejected, (state, action) => {
        state.isApointmentLoading = false;
        state.error = action.payload as string;
      })

      //recommendations meeting
      .addCase(fetchRecommendationHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchRecommendationHistory.fulfilled,
        (state, action: PayloadAction<RecommendationHistoryResponse>) => {
          state.recommendationHistory = action.payload.briefs;
          state.isLoading = false;
        }
      )
      .addCase(fetchRecommendationHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default OrderSlice.reducer;
