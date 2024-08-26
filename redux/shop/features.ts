import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { Service } from "./interface";

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
    }
);


