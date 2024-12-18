import api from "@/utils/axios/api";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { handleAxiosError } from "@/utils/helpers/general/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  InitializeSessionResponse,
  AddItemToCartPayload,
  AddItemToCartResponse,
  GetCartItemsResponse,
  ClearCartResponse,
} from "./interface";

// Initialize session
export const initializeSession = createAsyncThunk<InitializeSessionResponse>(
  "cart/initializeSession",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("landingpage-cart/initialize-session", {
        withCredentials: true,
      });

      const { refresh_token, session_id } = response.data;

      // Store session_id in local storage
      localStorage.setItem("session_id", session_id);

      // Set the refresh token as a cookie
      setUserTokenCookie(refresh_token);

      return { refresh_token, session_id };
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

// Add item to cart
export const addItemToCart = createAsyncThunk<
  AddItemToCartResponse,
  AddItemToCartPayload
>("cart/addItemToCart", async (payload, { rejectWithValue }) => {
  try {
    const sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      throw new Error(
        "Session ID not found. Please initialize the session first.",
      );
    }

    const response = await api.post("landingpage-cart/add-to-cart", {
      ...payload,
      session_id: sessionId,
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

// Get cart items
export const getCartItems = createAsyncThunk<GetCartItemsResponse>(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        throw new Error(
          "Session ID not found. Please initialize the session first.",
        );
      }

      // Sending session_id as a URL parameter
      const response = await api.get(
        `landingpage-cart/get-cart-items/${sessionId}`,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

// Delete cart item
export const deleteCartItem = createAsyncThunk<
  { message: string },
  { cartItemId: number }
>("cart/deleteCartItem", async ({ cartItemId }, { rejectWithValue }) => {
  try {
    const sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      throw new Error(
        "Session ID not found. Please initialize the session first.",
      );
    }

    // Make the DELETE request with the cart item ID and session ID
    const response = await api.delete(
      `landingpage-cart/remove-from-cart/${cartItemId}`,
      {
        data: { session_id: sessionId },
      },
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

// Clear Cart
export const clearCart = createAsyncThunk<ClearCartResponse>(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        throw new Error(
          "Session ID not found. Please initialize the session first.",
        );
      }

      // Make the DELETE request to clear the cart
      const response = await api.delete("landingpage-cart/clear-cart", {
        data: { session_id: sessionId },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

// Switch Package
export const switchPackage = createAsyncThunk<
  { message: string },
  { cartItemId: number; packageId: number }
>(
  "cart/switchPackage",
  async ({ cartItemId, packageId }, { rejectWithValue }) => {
    try {
      const sessionId = localStorage.getItem("session_id");

      if (!sessionId) {
        throw new Error("Session ID not found. Please initialize the session first.");
      }

      const response = await api.put(
        `landingpage-cart/change-package/${cartItemId}`,
        {
          package_id: packageId,
          session_id: sessionId,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

// Checkout Cart
export const checkoutCart = createAsyncThunk<
  {
    detail: string;
    added_addons: {
      addon_id: number;
      cart_item_id: number;
      quantity: number;
      session_addon_id: number;
    }[];
  },
  { addons: { addon_id: number; cart_item_id: number; quantity: number }[] }
>("cart/checkoutCart", async ({ addons }, { rejectWithValue }) => {
  try {
    const sessionId = localStorage.getItem("session_id");

    if (!sessionId) {
      throw new Error(
        "Session ID not found. Please initialize the session first."
      );
    }

    const response = await api.post(
      "landingpage-cart/checkout-cart-with-optional-addons",
      {
        session_id: sessionId,
        addons,
      }
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

// Make Payment
export const makePayment = createAsyncThunk<
  { status: string; message: string; data: { link: string } },
  { package_id: number; currency: string }
>("cart/makePayment", async ({ package_id, currency }, { rejectWithValue }) => {
  try {
    const response = await api.post("user/make-payment", {
      package_id,
      currency,
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});






