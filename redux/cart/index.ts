// index.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initializeSession, addItemToCart } from "./features";
import { InitializeSessionResponse, AddItemToCartPayload } from "./interface";

interface CartState {
    session_id: string | null;
    refresh_token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    session_id: null,
    refresh_token: null,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Initialize Session
        builder
            .addCase(initializeSession.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                initializeSession.fulfilled,
                (state, action: PayloadAction<InitializeSessionResponse>) => {
                    state.loading = false;
                    state.session_id = action.payload.session_id;
                    state.refresh_token = action.payload.refresh_token;
                }
            )
            .addCase(initializeSession.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })


        // Add Item to Cart
        builder
            .addCase(addItemToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addItemToCart.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addItemToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            });

    },
});

export default cartSlice.reducer;
