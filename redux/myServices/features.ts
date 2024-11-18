import { BrandDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/brandDesignTypes";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";



// Thunk to submit brand design brief details to the API. 
export const brandDesignBriefs = createAsyncThunk(
    "user/brandDesignBriefs",
    async (payload: BrandDesignValues, { rejectWithValue }) => {
      try {
        const response = await api.post("user/brand-design-briefs", {
            core_value: payload?.brandCoreValue,
            target_market: payload?.brandMarket,
            brand_tone: payload?.brandPersonality,
            brand_assets: payload?.brandAsset,
            brandDeliverable:payload?.brandDeliverable,
            brandKPI:payload?.brandKPI,
            brandCompetitors:payload?.brandCompetitors,
            brandGuidelines:payload?.brandGuidelines,
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(handleAxiosError(error));
      }
    }
  );