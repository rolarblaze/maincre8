import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SubmitBrief {
  first_name: string;
  last_name: string;
  company_name: string;
  phone_number: string;
  work_email: string;
  industry_type: string;
  brief_objectives: string;
  brief_description: string;
  competitors: string;
  benchmarks: string;
  brief_attachment: string;
  package_id: number;
  bundle_id: number;
}

export const submitBrief = createAsyncThunk(
  "auth/submitBrief",
  async (payload: SubmitBrief, { rejectWithValue }) => {
    console.log(payload.competitors);
    try {
      const response = await api.post("briefs/submit-brief", {
        first_name: payload.first_name,
        last_name: payload.last_name,
        company_name: payload.company_name,
        phone_number: payload.phone_number,
        work_email: payload.work_email,
        industry_type: payload.industry_type,
        brief_objectives: payload.brief_objectives,
        brief_description: payload.brief_description,
        competitors: payload.competitors,
        benchmarks: payload.benchmarks,
        brief_attachment: payload.brief_attachment,
        package_id: payload.package_id,
        bundle_id: payload.bundle_id,
      });
      console.log("form data:", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
