import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UpdateInfo {
  phone_number: string;
  country: string;
  state: string;
  address: string;
}

export const updateInfo = createAsyncThunk(
  "dashboard/updateProfile",
  async (payload: UpdateInfo, { rejectWithValue }) => {
    try {
      const response = await api.put("user/update-profile-info", {
        phone_number: payload.phone_number,
        country: payload.country,
        state: payload.state,
        address: payload.address,
      });
      // console.log("form data:", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
