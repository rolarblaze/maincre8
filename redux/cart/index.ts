import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initializeSession,
    addItemToCart,
    getCartItems,
    clearCart,
    deleteCartItem,
    switchPackage,
    checkoutCart,
    makePayment,
} from "./features";
import {
    InitializeSessionResponse,
    CartItem,
    RecommAddOns,
    GetCartItemsResponse,
    ClearCartResponse,
    CheckoutCartResponse,
    CheckoutCartPayload,
} from "./interface";

interface CartState {
    session_id: string | null;
    refresh_token: string | null;
    isInitializing: boolean;
    isAddingToCart: boolean;
    isGettingCartItems: boolean;
    isClearingCart: boolean;
    isDeletingCartItem: boolean;
    isSwitchingPackage: boolean;
    isCheckingOut: boolean;
    isMakingPayment: boolean;
    error: string | null;
    cartItems: CartItem[];
    recommendedAddOns: RecommAddOns[];
    total_price: number;
}

const initialState: CartState = {
    session_id: null,
    refresh_token: null,
    isInitializing: false,
    isAddingToCart: false,
    isGettingCartItems: false,
    isClearingCart: false,
    isDeletingCartItem: false,
    isSwitchingPackage: false,
    isCheckingOut: false,
    isMakingPayment: false,
    error: null,
    cartItems: [],
    recommendedAddOns: [],
    total_price: 0, // Default value
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
                state.total_price = action.payload.total_price;
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
            })

            //Switch package
            .addCase(switchPackage.pending, (state) => {
                state.isSwitchingPackage = true;
                state.error = null;
            })
            .addCase(
                switchPackage.fulfilled,
                (state, action: PayloadAction<{ message: string }>) => {
                    state.isSwitchingPackage = false;
                }
            )
            .addCase(switchPackage.rejected, (state, action) => {
                state.isSwitchingPackage = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "An unknown error occurred";
                console.error("Switch Package Error:", state.error);
            })

            .addCase(checkoutCart.pending, (state) => {
                state.isCheckingOut = true;
                state.error = null;
            })
            .addCase(
                checkoutCart.fulfilled,
                (
                    state,
                    action: PayloadAction<{
                        detail: string;
                        added_addons: {
                            addon_id: number;
                            cart_item_id: number;
                            quantity: number;
                            session_addon_id: number;
                        }[];
                    }>
                ) => {
                    state.isCheckingOut = false;
                    console.log("Checkout successful:", action.payload);
                }
            )
            .addCase(checkoutCart.rejected, (state, action) => {
                state.isCheckingOut = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "An unknown error occurred during checkout";
            })

            //Make payment
            .addCase(makePayment.pending, (state) => {
                state.isMakingPayment = true;
                state.error = null;
            })
            .addCase(
                makePayment.fulfilled,
                (
                    state,
                    action: PayloadAction<{
                        status: string;
                        message: string;
                        data: { link: string };
                    }>
                ) => {
                    state.isMakingPayment = false;
                }
            )
            .addCase(makePayment.rejected, (state, action) => {
                state.isMakingPayment = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "An unknown error occurred during payment.";
            });

    },
});

export default cartSlice.reducer;
