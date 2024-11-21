import { createSlice } from "@reduxjs/toolkit";
import { uploadDocument } from "../myServices/features";
import { RootState } from "../store";

interface FileUploadState {
  fileUrl: string | null;
  fileName: string | null;
  isLoading: boolean;
  errorMessage: string | null;
}

// Default state for each fileId
const defaultFileState: FileUploadState = {
  fileUrl: null,
  fileName: null,
  isLoading: false,
  errorMessage: null,
};

// This is our initial state.
const initialState: Record<string, FileUploadState> = {};

// Helper function to initialize state[fileId] if it doesn’t exist
function getOrInitializeFileState(
  state: Record<string, FileUploadState>,
  fileId: string,
) {
  if (!state[fileId]) {
    state[fileId] = { ...defaultFileState };
  }
  return state[fileId];
}

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state, action) => {
        const { fileId } = action.meta.arg;

        console.log(fileId, "kkkk");
        

        const fileState = getOrInitializeFileState(state, fileId);

        // Update properties for the pending state
        fileState.isLoading = true;
        fileState.fileUrl = null;
        fileState.fileName = null;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        const { fileId } = action.meta.arg;
        const fileState = getOrInitializeFileState(state, fileId);

        // Update properties for the fulfilled state
        fileState.isLoading = false;
        fileState.fileUrl = action.payload.file_link;
        fileState.errorMessage = null;
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        const { fileId } = action.meta.arg;
        const fileState = getOrInitializeFileState(state, fileId);

        // Update properties for the rejected state
        fileState.isLoading = false;
        fileState.errorMessage = action.payload as string;
      });
  },
});

export const fileUploadReducer = fileUploadSlice.reducer;

// Selector with fallback for non-existent fileId
export const selectFileUploadState = (state: RootState, fileId: string) =>
  state.fileUpload[fileId] || defaultFileState;
