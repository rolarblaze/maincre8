import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/axios/api"; // Ensure this points to your Axios instance

interface PaymentState {
  tx_ref: string | null;
  status: string | null;
  transaction_id: string | null;
  orderDetails: any | null; // Define appropriate type based on backend response
  isLoading: boolean;
  error: string | null;
}

const initialState: PaymentState = {
  tx_ref: null,
  status: null,
  transaction_id: null,
  orderDetails: null,
  isLoading: false,
  error: null,
};

// Async thunk to fetch order details using tx_ref
export const sendTxRefToBackend = createAsyncThunk(
  "payment/sendTxRef",
  async (
    payload: { tx_ref: string; status: string; transaction_id: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get(`user/get-order-details/${payload.tx_ref}`);
      return response.data; // Assuming the backend response contains order details
    } catch (error: any) {
      console.error("Error fetching order details:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch order details"
      );
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendTxRefToBackend.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendTxRefToBackend.fulfilled, (state, action) => {
        state.isLoading = false;
        const { tx_ref, status, transaction_id, ...orderDetails } = action.payload;
        state.tx_ref = tx_ref;
        state.status = status;
        state.transaction_id = transaction_id;
        state.orderDetails = orderDetails?.order_details; // Save order details in the state
      })
      .addCase(sendTxRefToBackend.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
