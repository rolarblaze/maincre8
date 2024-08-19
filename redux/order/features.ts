import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderHistoryResponse, AppointmentResponse, RecommendationHistoryResponse } from "./interface";

// Fetch user order history
export const fetchUserOrderHistory = createAsyncThunk<OrderHistoryResponse, void>(
  "order/fetchUserOrderHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/get-user-order-history");
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Fetch user latest appointments
export const fetchLatestAppointments = createAsyncThunk<AppointmentResponse, void>(
  "appointments/fetchLatestAppointments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/get-latest-appointments");
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Fetch user recommendation history
export const fetchRecommendationHistory = createAsyncThunk<RecommendationHistoryResponse, void>(
  "recommendation/fetchRecommendationHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/recommendation-history");
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);