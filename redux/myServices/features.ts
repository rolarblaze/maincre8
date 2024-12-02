import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formConfig } from "./formConfig";

interface SubmitFormDataArgs {
  formName: string;
  payload: Record<string, any>;
}

// Reusable thunk for submitting form data to various endpoints

export const submitFormData = createAsyncThunk(
  "forms/submitFormData",
  async (
    {
      formName,
      payload,
      trackingId,
    }: { formName: keyof typeof formConfig; payload: any; trackingId: string },
    { rejectWithValue },
  ) => {
    try {
      const form = formConfig[formName];

      if (!form) {
        throw new Error(`Form configuration for ${formName} not found.`);
      }

      const response = await api.post(
        `${form.endpoint}/${trackingId}`,
        payload,
      );

      return { formName, data: response.data };
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue({ formName, error: handleAxiosError(error) });
    }
  },
);

// Upload file
export const uploadDocument = createAsyncThunk(
  "user/uploadDocument",
  async (
    {
      formData,
      endpoint,
      fileId,
    }: { formData: FormData; endpoint: string; fileId: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post(`${endpoint}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Return the uploaded file data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
