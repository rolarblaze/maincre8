import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { AxiosError } from "axios";

// Subscribe to newsletter
export const subscribeToNewsletter = createAsyncThunk<
    { detail: string },
    { email: string },
    { rejectValue: { errorMessage: string } }
>(
    "newsletter/subscribe",
    async ({ email }, { rejectWithValue }) => {
        try {
            const response = await api.post("newsletter/subscribe", { email });
            console.log("Newsletter subscription successful:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error subscribing to newsletter:", error);
            if (error instanceof AxiosError) {
                if (error.response && error.response.data && error.response.data.detail) {
                    return rejectWithValue({ errorMessage: error.response.data.detail });
                }
            }
            const errorMessage = handleAxiosError(error);
            return rejectWithValue({ errorMessage });
        }
    }
);
