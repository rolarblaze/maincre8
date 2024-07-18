import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServices } from "./features";
import { ServicesState, Service } from "./interface";

export interface AuthSliceState {
    services: Service,
    isLoading: boolean,
    error?: null,
}

// Initial state
const initialState: ServicesState = {
  services: [],
  isLoading: false,
  error: null,
};

// Create the slice
export const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch services
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
        state.services = action.payload;
        state.isLoading = false;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const shopReducer = ShopSlice.reducer;