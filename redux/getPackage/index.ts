import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPackageDetails } from "./getPkg";

interface PackageState {
  pkgDetails: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PackageState = {
  pkgDetails: null,
  status: "idle",
  error: null,
};

const getPackageSlice = createSlice({
  name: "getPackage",
  initialState,
  reducers: {
    clearPackageState: (state) => {
      state.pkgDetails = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPackageDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getPackageDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.pkgDetails = action.payload;
          state.error = null;
        }
      )
      .addCase(
        getPackageDetails.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const { clearPackageState } = getPackageSlice.actions;
export const getPackageReducer = getPackageSlice.reducer;
