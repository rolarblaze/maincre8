import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PackagePayment, UploadBriefFile } from "./interface";

// pay for package
export const payForPackage = createAsyncThunk(
  "services/payForPackage",
  async (payload: PackagePayment, { rejectWithValue }) => {
    try {
      const response = await api.post(`user/make-payment`, {
        package_id: payload.package_id,
        currency: payload.currency || "NGN",
      });
      console.log(response);
      return response.data.tracking_details;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// track user order
export const trackUserOrder = createAsyncThunk(
  "services/trackUserOrder",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`user/package-tracking/${id}`);
      // console.log(response.data);
      return response.data.tracking_details;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// get user order history
export const getUserOrderHistory = createAsyncThunk(
  "services/getUserOrderHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/get-user-order-history");

      return response.data.user_transactions;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// submit brief for tracking
export const submitBriefForTracking = createAsyncThunk(
  "services/submitBriefForTracking",
  async (payload: UploadBriefFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", payload.file);

      const response = await api.post(
        `user/package-tracking/submit-package-brief/package_brief/${payload.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("file upload response", response.data);
      return response.data;
    } catch (error) {
      console.log("file upload error", error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// download submitted brief
export const downloadBrief = createAsyncThunk(
  "services/downloadBrief",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `user/package-tracking/download-package-brief/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// book discovery call
export const bookDiscoveryCall = createAsyncThunk(
  "services/bookDiscoveryCall",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `meetings/schedule-meeting/on-boarding-call/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// get call link
export const getCalendlyLink = createAsyncThunk(
  "services/getCalendlyLink",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`meetings/get-calendly-user-data`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// book offboarding call
export const bookOffBoardingCall = createAsyncThunk(
  "services/bookOffBoardingCall",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `meetings/schedule-meeting/off-boarding-call/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
