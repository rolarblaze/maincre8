// index.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initializeSession,
    addItemToCart,
    getCartItems,
    clearCart,
} from "./features";
import {
    InitializeSessionResponse,
    CartItem,
    GetCartItemsResponse,
    ClearCartResponse,
} from "./interface";

interface CartState {
    session_id: string | null;
    refresh_token: string | null;
    loading: boolean;
    error: string | null;
    cartItems: CartItem[];
}

const initialState: CartState = {
    session_id: null,
    refresh_token: null,
    loading: false,
    error: null,
    cartItems: [],
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


        builder
            // Add Item to Cart
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
            })

            // Get Cart Items
            .addCase(getCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getCartItems.fulfilled,
                (state, action: PayloadAction<GetCartItemsResponse>) => {
                    state.loading = false;
                    state.cartItems = action.payload.items;
                }
            )
            .addCase(getCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })

            // Clear Cart
            .addCase(clearCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                clearCart.fulfilled,
                (state, action: PayloadAction<ClearCartResponse>) => {
                    state.loading = false;
                    state.cartItems = []; // Clear the cart items from the state
                }
            )
            .addCase(clearCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            });

    },
});

export default cartSlice.reducer;
