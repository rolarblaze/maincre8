import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface GetPackage {
  id: number | string;
}

export const getPackageDetails = createAsyncThunk(
  "details/getPackageDetails",
  async (payload: GetPackage, { rejectWithValue }) => {
    try {
      const response = await api.get(`admin-user/packages/${payload.id}`);
      console.log("form data:", response.data.package);

      return response.data.package;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
