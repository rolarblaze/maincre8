// src/redux/slices/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formConfig } from "@/redux/myServices/formConfig";
import { submitFormData } from "./features";

// Define the state for each form
interface FormState<T> {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  formData: T | null;
}

// Define the state for all forms
type FormsState = {
  [key in keyof typeof formConfig]: FormState<any>;
};

// Initial state for all forms, based on formConfig
const initialState: FormsState = Object.keys(formConfig).reduce((state, key) => {
  state[key as keyof typeof formConfig] = {
    isLoading: false,
    successMessage: null,
    errorMessage: null,
    formData: null,
  };
  return state;
}, {} as FormsState);

// Slice to handle form state
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
        };
      }
    },
  },
  extraReducers: (builder) => {
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
          console.log("loading....");
          state[formName].successMessage = data.message || "Form submitted successfully!";
          state[formName].formData = data;
        }
      })
      .addCase(submitFormData.rejected, (state, action) => {
        const formName = action.meta.arg.formName;
        if (state[formName]) {
          state[formName].isLoading = false;
          // state[formName].errorMessage = action.payload.error || "Error submitting form.";
        }
      });
  },
});

export const { resetFormState } = formSlice.actions;

export default formSlice.reducer;
