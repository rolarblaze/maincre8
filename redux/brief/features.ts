import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface BriefPayload {
  interested_services: string;
  primary_goal: string;
  monthly_budget: string;
  campaign_duration: string;
  business_type: string;
  additional_info: string;
  phone_number: string;
  email: string;
  uploaded_brief: string;
}

export const submitBrief = createAsyncThunk(
  "user/submitBrief",
  async (
    { endpoint, payload }: { endpoint: string; payload: BriefPayload },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post(endpoint, payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const submitBriefEndpoints = {
  businessBrief: "user/business-briefs",
  personalizedBrief: "user/personalized-recommendations",
};
