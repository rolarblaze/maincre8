import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitFormData, uploadDocument } from "./features";
import { formConfig } from "@/redux/myServices/formConfig";

interface FormState<T> {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  formData: T | null;
  uploadedFile: any | null; // Added for handling file uploads
}

type FormsState = {
  [key in keyof typeof formConfig]: FormState<any>;
};

const initialState: FormsState = Object.keys(formConfig).reduce((state, key) => {
  state[key as keyof typeof formConfig] = {
    isLoading: false,
    successMessage: null,
    errorMessage: null,
    formData: null,
    uploadedFile: null, // Initialize uploadedFile to null
  };
  return state;
}, {} as FormsState);

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    resetFormState: (state, action: PayloadAction<keyof typeof formConfig>) => {
      const formName = action.payload;
      if (state[formName]) {
        state[formName] = {
          isLoading: false,
          successMessage: null,
          errorMessage: null,
          formData: null,
          uploadedFile: null,
        };
      }
    },
  },
  extraReducers: (builder) => {
    // Handle form submission
    builder
      .addCase(submitFormData.pending, (state, action) => {
        const formName = action.meta.arg.formName;
        if (state[formName]) {
          state[formName].isLoading = true;
          state[formName].successMessage = null;
          state[formName].errorMessage = null;
        }
      })
      .addCase(submitFormData.fulfilled, (state, action) => {
        const { formName, data } = action.payload;
        if (state[formName]) {
          state[formName].isLoading = false;
          state[formName].successMessage = data || "Form submitted successfully!";
          state[formName].formData = data;
        }
      })
      .addCase(submitFormData.rejected, (state, action) => {
        const formName = action.meta.arg.formName;
        if (state[formName]) {
          state[formName].isLoading = false;
          state[formName].errorMessage =
            action.error?.message || "Error submitting form.";
        }
      });

    // Handle file upload
    builder
      .addCase(uploadDocument.pending, (state) => {
        // Optional: Add global loading state if needed
        Object.values(state).forEach((formState) => {
          formState.isLoading = true;
        });
      })
      .addCase(uploadDocument.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("File uploaded successfully", action.payload);
        // Update specific uploadedFile in state
        Object.values(state).forEach((formState) => {
          formState.isLoading = false;
          formState.uploadedFile = action.payload;
          formState.successMessage = "File uploaded successfully!";
        });
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        Object.values(state).forEach((formState) => {
          formState.isLoading = false;
          formState.errorMessage =
            action.error?.message || "Error uploading file.";
        });
      });
  },
});

export const { resetFormState } = formSlice.actions;
export default formSlice.reducer;
