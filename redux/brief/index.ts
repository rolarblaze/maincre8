import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitBrief } from "./features";

interface BriefState {
  briefData: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BriefState = {
  briefData: null,
  status: "idle",
  error: null,
};

const briefSlice = createSlice({
  name: "brief",
  initialState,
  reducers: {
    clearBriefState: (state) => {
      state.briefData = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBrief.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitBrief.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.briefData = action.payload;
        state.error = null;
      })
      .addCase(submitBrief.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearBriefState } = briefSlice.actions;
export const briefReducer = briefSlice.reducer;
