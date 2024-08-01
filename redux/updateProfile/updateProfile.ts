import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UpdateInfo {
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string;
  state_of_residence: string;
  address: string;
}

export const updateInfo = createAsyncThunk(
  "dashboard/updateProfile",
  async (payload: UpdateInfo, { rejectWithValue }) => {
    try {
      const response = await api.patch("briefs/updateInfo", {
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone_number: payload.phone_number,
        country: payload.country,
        state_of_residence: payload.state_of_residence,
        address: payload.address,
      });
      console.log("form data:", response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
