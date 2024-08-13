
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserOrderHistory } from "./features";
import { OrderHistoryResponse } from "./interface";

export interface OrderSliceState {
  orders: OrderHistoryResponse | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: OrderSliceState = {
  orders: null,
  isLoading: false,
  error: null,
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchUserOrderHistory.fulfilled,
        (state, action: PayloadAction<OrderHistoryResponse>) => {
          state.orders = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default OrderSlice.reducer;
