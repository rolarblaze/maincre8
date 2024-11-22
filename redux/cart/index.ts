import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initializeSession,
    addItemToCart,
    getCartItems,
    clearCart,
    deleteCartItem,
} from "./features";
import {
    InitializeSessionResponse,
    CartItem,
    RecommAddOns,
    GetCartItemsResponse,
    ClearCartResponse,
} from "./interface";

interface CartState {
    session_id: string | null;
    refresh_token: string | null;
    isInitializing: boolean;
    isAddingToCart: boolean;
    isGettingCartItems: boolean;
    isClearingCart: boolean;
    isDeletingCartItem: boolean;
    error: string | null;
    cartItems: CartItem[];
    recommendedAddOns: RecommAddOns[];
}

const initialState: CartState = {
    session_id: null,
    refresh_token: null,
    isInitializing: false,
    isAddingToCart: false,
    isGettingCartItems: false,
    isClearingCart: false,
    isDeletingCartItem: false,
    error: null,
    cartItems: [],
    recommendedAddOns: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Initialize Session
        builder
            .addCase(initializeSession.pending, (state) => {
                state.isInitializing = true;
                state.error = null;
            })
            .addCase(initializeSession.fulfilled, (state, action: PayloadAction<InitializeSessionResponse>) => {
                state.isInitializing = false;
                state.session_id = action.payload.session_id;
                state.refresh_token = action.payload.refresh_token;
            })
            .addCase(initializeSession.rejected, (state, action) => {
                state.isInitializing = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })

            //Add to cart
            .addCase(addItemToCart.pending, (state) => {
                state.isAddingToCart = true;
                state.error = null;
            })
            .addCase(addItemToCart.fulfilled, (state) => {
                state.isAddingToCart = false;
            })
            .addCase(addItemToCart.rejected, (state, action) => {
                state.isAddingToCart = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })

            // Get Cart Items
            .addCase(getCartItems.pending, (state) => {
                state.isGettingCartItems = true;
                state.error = null;
            })
            .addCase(getCartItems.fulfilled, (state, action: PayloadAction<GetCartItemsResponse>) => {
                state.isGettingCartItems = false;
                state.cartItems = action.payload.items;
                state.recommendedAddOns = action.payload.recommended_addons;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.isGettingCartItems = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })


            // Clear Cart
            .addCase(clearCart.pending, (state) => {
                state.isClearingCart = true;
                state.error = null;
            })
            .addCase(clearCart.fulfilled, (state, action: PayloadAction<ClearCartResponse>) => {
                state.isClearingCart = false;
                state.cartItems = [];
            })
            .addCase(clearCart.rejected, (state, action) => {
                state.isClearingCart = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            })

            // Delete Cart Item
            .addCase(deleteCartItem.pending, (state) => {
                state.isDeletingCartItem = true;
                state.error = null;
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.isDeletingCartItem = false;
                
                // Filter out the deleted cart item
                const remainingCartItems = state.cartItems.filter(
                    (item) => item.id !== action.meta.arg.cartItemId
                );
                state.cartItems = remainingCartItems;

                // Update recommendedAddOns based on remaining cart items
                const remainingBundleIds = new Set(remainingCartItems.map(item => item.bundle_id));
                state.recommendedAddOns = state.recommendedAddOns.filter(
                    (addon) => remainingBundleIds.has(addon.bundle.bundle_id)
                );

            })
            .addCase(deleteCartItem.rejected, (state, action) => {
                state.isDeletingCartItem = false;
                state.error = action.payload as string || action.error.message || "An unknown error occurred";
            });

    },
});

export default cartSlice.reducer;
