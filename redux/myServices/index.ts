import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { brandDesignBriefs, uploadDocument } from "./features"; // Adjust the import based on your file structure
import { BrandDesignValues } from "@/components/Dashboard/SubmitBrief/shared/formTypes/brandDesignTypes";

export interface BrandDesignSliceState {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  brandDesign: BrandDesignValues;

}

const initialState: BrandDesignSliceState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  brandDesign: {
    brandCoreValue: "",
    brandMarket: [],
    brandPersonality: "",
    brandAsset: "",
    brandDeliverable: [],
    brandKPI: [],
    brandCompetitors: "",
    brandCompetitorsDocument: "",
    brandGuidelines: "",
  }
};

export const BrandDesignSlice = createSlice({
  name: "brandDesign",
  initialState,
  reducers: {
    resetBrandDesignState: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit brand design brief
      .addCase(brandDesignBriefs.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(
        brandDesignBriefs.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          
          state.successMessage = action.payload.message; // Adjust based on your API response structure
        }
      )
      .addCase(brandDesignBriefs.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.errorMessage = action.payload; // This will be the error from handleAxiosError
      })
      //upload file briefs
      .addCase(uploadDocument.fulfilled, (state, action: PayloadAction<any>) => {

        console.log('uploaded', state.brandDesign)
        // if (state.profile && state.profile.user.profile) {
        //    state.profile.user.profile.profile_image_link = action.payload.file_link;
        // }
        state.isLoading = false;
      })
      .addCase(uploadDocument.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadDocument.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const { resetBrandDesignState } = BrandDesignSlice.actions;

export default BrandDesignSlice.reducer;
