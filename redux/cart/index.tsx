import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddOn, CartItem } from "@/types/cart";

interface CartState {
  addOn: AddOn[];
}

const initialState: CartState = {
  addOn: [
    {
      type: "brand designs",
      cart: [],
    },
    {
      type: "graphic designs",
      cart: [],
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ type: string; item: CartItem }>,
    ) => {
      const { type, item } = action.payload;

      const addOn = state.addOn.find((addOn) => addOn.type === type);

      if (addOn) {
        const existingItem = addOn.cart.find(
          (cartItem) => cartItem.id === item.id,
        );

        if (existingItem) {
          existingItem.quantity = item.quantity;
        } else {
          addOn.cart.push(item);
        }
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
