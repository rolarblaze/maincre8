import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateInfo } from "./updateProfile";

interface ProfileState {
  briefData: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  briefData: null,
  status: "idle",
  error: null,
};

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {
    clearProfileState: (state) => {
      state.briefData = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateInfo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateInfo.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.briefData = action.payload;
        state.error = null;
      })
      .addCase(updateInfo.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearProfileState } = updateProfileSlice.actions;
export const updateProfileReducer = updateProfileSlice.reducer;
