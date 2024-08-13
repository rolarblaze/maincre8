import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderHistoryResponse } from "./interface";

// Fetch user order history
export const fetchUserOrderHistory = createAsyncThunk<OrderHistoryResponse, void>(
  "order/fetchUserOrderHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("user/get-user-order-history");
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);