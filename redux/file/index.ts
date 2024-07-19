import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { uploadFiles } from "./file";

interface FileUploadState {
  file: File | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FileUploadState = {
  file: null,
  status: "idle",
  error: null,
};

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFiles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(uploadFiles.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.file = action.payload;
        state.error = null;
      })
      .addCase(uploadFiles.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const fileUploadReducer = fileUploadSlice.reducer;

// Selectors
export const selectFileUploadStatus = (state: RootState) =>
  state.fileUpload.status;
export const selectFileUploadError = (state: RootState) =>
  state.fileUpload.error;
export const selectUploadedFile = (state: RootState) => state.fileUpload.file;
