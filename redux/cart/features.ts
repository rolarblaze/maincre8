import api from "@/utils/axios/api";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitializeSessionResponse, AddItemToCartPayload, AddItemToCartResponse } from "./interface";

// Initialize session
export const initializeSession = createAsyncThunk<InitializeSessionResponse>(
    "cart/initializeSession",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("landingpage-cart/initialize-session",
                {
                    withCredentials: true,
                }
            );

            const { refresh_token, session_id } = response.data;

            // Set the refresh token as a cookie
            setUserTokenCookie(refresh_token);

            console.log("Set-Cookie header:", response.headers['set-cookie']);
            console.log("Cookies after initializeSession:", document.cookie);

            return { refresh_token, session_id };
        } catch (error) {
            return rejectWithValue(handleAxiosError(error));
        }
    }
);

// Add item to cart
export const addItemToCart = createAsyncThunk<AddItemToCartResponse, AddItemToCartPayload>(
    "cart/addItemToCart",
    async (payload, { rejectWithValue }) => {
        try {
            console.log("Payload being sent to add-to-cart:", payload);
            console.log("Cookies before addItemToCart:", document.cookie);

            const response = await api.post("landingpage-cart/add-to-cart", payload, {
                withCredentials: true,

            });

            console.log("Response from add-to-cart:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error in addItemToCart:", error);
            return rejectWithValue(handleAxiosError(error));
        }
    }
);
