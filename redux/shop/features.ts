import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import {
  GetBundlesEndPoint,
  Package,
  Packages,
  PageViewData,
  Service,
} from "./interface";
import { API_BASE_URL } from "@/utils/axios/config";

// Fetch services
export const getServices = createAsyncThunk<Service[], void>(
  "shop/getServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("admin-user/services");
      return response.data.services;
    } catch (error) {
      console.error("Error fetching services:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

// Fetch bundles
export const getBundles = createAsyncThunk<PageViewData[], void>(
  "shop/getBundles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("admin-user/bundles");
      return response.data.bundles;
    } catch (error) {
      console.error("Error fetching services:", error);
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getPackages = createAsyncThunk<
  Package[],
  { limit: number; offset: number }
>("shop/getPackages", async ({ limit, offset }, { rejectWithValue }) => {
  try {
    const response = await api.get(
      `user/packages?limit=${limit}&offset=${offset}`,
    );
    return response.data.packages;
  } catch (error) {
    console.error("Error fetching services:", error);
    return rejectWithValue(handleAxiosError(error));
  }
});
