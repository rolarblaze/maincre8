import { BrandDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/brandDesignTypes";
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
    { formName, payload }: { formName: keyof typeof formConfig; payload: any },
    { rejectWithValue }
  ) => {
    try {
      const form = formConfig[formName];

      if (!form) {
        throw new Error(`Form configuration for ${formName} not found.`);
      }

      const response = await api.post(form.endpoint, payload);

      return { formName, data: response.data };
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue({ formName, error: handleAxiosError(error) });
    }
  }
);





// Upload file
export const uploadDocument = createAsyncThunk(
  "user/uploadDocument",
  async (
    { formData, endpoint }: { formData: FormData; endpoint: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await api.post(
        `user/upload-relevant-document/${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data; // Return the uploaded file data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
