import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UploadFile {
  file: File;
}

// upload file
export const uploadFiles = createAsyncThunk(
  "/uploadFile",
  async (payload: UploadFile, { rejectWithValue }) => {
    try {
      const response = await api.post("briefs/upload-brief/company_brief", {
        first_name: payload.file,
      });
      console.log("file upload response", response.data);
      return response.data;
    } catch (error) {
      console.log("file upload error", error);

      return rejectWithValue(handleAxiosError(error));
    }
  }
);
