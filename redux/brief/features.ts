import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitBriefEndpoints = {
  businessBrief: "user/business_brief",
  personalizedBrief: "user/personalized-recommendations",
};

interface PersonalizedBriefPayload {
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
interface BusinessBriefPayload {
  interested_services: string;
  primary_goal: string;
  estimated_budget: string;
  timeline: string;
  business_type: string;
  additional_info: string;
  phone_number: string;
  email: string;
  uploaded_brief: string;
}

export const submitBrief = createAsyncThunk(
  "user/submitBrief",
  async (
    {
      formName,
      endpoint,
      payload,
    }: {
      formName: keyof typeof submitBriefEndpoints;
      endpoint: string;
      payload: PersonalizedBriefPayload | BusinessBriefPayload;
    },
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
