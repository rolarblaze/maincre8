import { BrandDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/brandDesignTypes";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utility function to convert payload values to string
const convertToString = (value: unknown): string => {
  if (Array.isArray(value)) {
      return value.join(", ");
  }
  return String(value);
};


// Thunk to submit brand design brief details to the API.
export const brandDesignBriefs = createAsyncThunk(
  "user/brandDesignBriefs",
  async (payload: BrandDesignValues, { rejectWithValue }) => {
      try {
          const response = await api.post("", {
              core_value: convertToString(payload?.brandCoreValue),
              target_market: convertToString(payload?.brandMarket),
              brand_tone: convertToString(payload?.brandPersonality),
              brand_assets: convertToString(payload?.brandAsset),
              key_deliverables: convertToString(payload?.brandDeliverable),
              kpis: convertToString(payload?.brandKPI),
              brandCompetitors: convertToString(payload?.brandCompetitors),
              guidelines: convertToString(payload?.brandGuidelines),
              
          });
          return response.data;
      } catch (error) {
          return rejectWithValue(handleAxiosError(error));
      }
  }
);

  // Upload file
export const uploadDocument  = createAsyncThunk(
  "user/uploadDocument",
  async (formData: FormData, endPoint, { rejectWithValue }) => {
    try {
      const response = await api.post(`user/upload-relevant-document/${endPoint}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Return the uploaded file data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);


