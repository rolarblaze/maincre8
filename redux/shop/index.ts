import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageViewData {
  title: string;
  icon: string;
  message: string;
  body: string;
  packagePlans: {
    title: string;
    description: string;
    pricePerMonth: string;
    features: string[];
    link: string;
    isPackagePopular: boolean;
  }[];
  addons: {
    title: string;
    description: string;
    price: string;
  }[];
}

type PageViewDataType = {
  data: PageViewData
}

// Define the initial state with default values
const initialPageViewData: PageViewDataType = {
  data: {
  title: '',
  icon: '',
  message: '',
  body: '',
  packagePlans: [],
  addons: [], }
};

export const PageDataSlice = createSlice({
  name: "pageViewData",
  initialState: initialPageViewData, // Corrected to use initialState
  reducers: {
    changePageData: (state, action: PayloadAction<PageViewData>) => {
      // alert(JSON.stringify(action.payload))
      // Update the state with the new page data
      state.data = action.payload
    },
  },
});

// Export the actions
export const { changePageData } = PageDataSlice.actions;

// Export the reducer
export default PageDataSlice.reducer;
