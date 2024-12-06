import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitBrief, submitBriefEndpoints } from "./features";

interface BriefFormInterface<T> {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  formData: T | null;
  status?: string;
}

type StateInterface = {
  [key in keyof typeof submitBriefEndpoints]: BriefFormInterface<any>;
};

const initialState: StateInterface = Object.keys(submitBriefEndpoints).reduce(
  (state, key) => {
    state[key as keyof typeof submitBriefEndpoints] = {
      isLoading: false,
      successMessage: null,
      errorMessage: null,
      formData: null,
      status: "",
    };
    return state;
  },
  {} as StateInterface,
);

const briefSlice = createSlice({
  name: "brief",
  initialState,
  reducers: {
    clearFormState: (
      state,
      action: PayloadAction<keyof typeof submitBriefEndpoints>,
    ) => {
      const formName = action.payload;
      if (formName) {
        state[formName].isLoading = false;
        state[formName].successMessage = null;
        state[formName].errorMessage = null;
        state[formName].formData = null;
        state[formName].status = "";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBrief.pending, (state, action) => {
        const formName = action.meta.arg.formName;
        state[formName].isLoading = true;
        state[formName].successMessage = null;
        state[formName].errorMessage = null;
      })
      .addCase(submitBrief.fulfilled, (state, action) => {
        const formName = action.meta.arg.formName;
        state[formName].isLoading = false;
        state[formName].successMessage = "Form submitted successfully!";
        state[formName].formData = action.payload;
        state[formName].errorMessage = null;
      })
      .addCase(submitBrief.rejected, (state, action) => {
        const formName = action.meta.arg.formName;
        state[formName].isLoading = false;
        state[formName].errorMessage =
          action?.error.message || "Error submitting form";
      });
  },
});

export const { clearFormState } = briefSlice.actions;
export const briefReducer = briefSlice.reducer;
