import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitFormData, uploadDocument } from "./features";
import { formConfig } from "@/redux/myServices/formConfig";

interface FormState<T> {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  formData: T | null;
  uploadedFile: any | null; // Added for handling file uploads
  isModalOpen: boolean;
}

interface ModalPayload {
  isModalOpen: boolean;
  formName: keyof typeof formConfig;
}

type FormsState = {
  [key in keyof typeof formConfig]: FormState<any>;
};

const initialState: FormsState = Object.keys(formConfig).reduce(
  (state, key) => {
    state[key as keyof typeof formConfig] = {
      isLoading: false,
      successMessage: null,
      errorMessage: null,
      formData: null,
      uploadedFile: null, // Initialize uploadedFile to null
      isModalOpen: false,
    };
    return state;
  },
  {} as FormsState,
);

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
          isModalOpen: true,
        };
      }
    },
    handleFormModal: (state, action: PayloadAction<ModalPayload>) => {
      const { formName, isModalOpen } = action.payload;
      
      if (formName && state[formName]) {
        state[formName].isModalOpen = isModalOpen;
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
          state[formName].successMessage =
            data.detail || "Form submitted successfully!";
          state[formName].formData = data;
          state[formName].isModalOpen = false;
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
  },
});

export const { resetFormState, handleFormModal } = formSlice.actions;
export default formSlice.reducer;
