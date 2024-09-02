import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getServices, getPackages } from "./features";
import { ServicesState, Service, Package, Packages } from "./interface";

// Initial state
const initialState: ServicesState = {
  services: [],
  packages: [],
  isLoading: false,
  error: null,
};

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
      .addCase(
        getServices.fulfilled,
        (state, action: PayloadAction<Service[]>) => {
          state.services = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getServices.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })

      // Fetch packages
      .addCase(getPackages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getPackages.fulfilled,
        (state, action: PayloadAction<Package[]>) => {
          state.packages = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getPackages.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const shopReducer = ShopSlice.reducer;
