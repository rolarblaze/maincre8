import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderHistoryResponse, AppointmentResponse, RecommendationHistoryResponse , Brief} from "./interface";

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


// Submit recommendation brief
export const submitRecommendationBrief = createAsyncThunk<void, Brief>(
  "recommendation/submitRecommendationBrief",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("user/submit-recommendation-brief", data);
      return response.data;
    } catch (error) {
      console.error("Error submitting brief:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Upload relevant document
export const uploadRelevantDocument = createAsyncThunk<{ file_link: string }, FormData>(
  "recommendation/uploadRelevantDocument",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("user/upload-relevant-document/recommendation_brief", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading file:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);