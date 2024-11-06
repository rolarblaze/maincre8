import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBundles } from "./features";
import { GetBundlesEndPoint, PageViewData, ShopReduxState } from "./interface";

// Define the initial state with default values
const initialPageViewData: ShopReduxState = {
  allShopBundles: [],
  currentViewBundle: "",
};

export const PageDataSlice = createSlice({
  name: "pageViewData",
  initialState: initialPageViewData,
  reducers: {
    changePageData: (state, action: PayloadAction<string>) => {
      // Update the state with the new page data
      let allShopBundles = state.allShopBundles;
      if (allShopBundles.length === 0) {
        state.currentViewBundle = "";
        return;
      }
      let selectedBundleName = action.payload;
      let selectedBundle = allShopBundles.filter(
        (bundle) =>
          bundle.bundle_name.toLowerCase().replaceAll(" ", "-") ===
          selectedBundleName,
      );

      if (selectedBundle.length === 0) {
        state.currentViewBundle = allShopBundles[0];
      } else {
        state.currentViewBundle = selectedBundle[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBundles.pending, (state: ShopReduxState) => {
        state.allShopBundles = [];
        state.currentViewBundle = "";
      })
      .addCase(
        getBundles.fulfilled,
        (state: ShopReduxState, action: PayloadAction<PageViewData[]>) => {
          state.allShopBundles = action.payload;
          state.currentViewBundle = action.payload[0];
        },
      )
      .addCase(getBundles.rejected, (state: ShopReduxState) => {
        state.allShopBundles = [];
        state.currentViewBundle = "";
      });
  },
});

// Export the actions
export const { changePageData } = PageDataSlice.actions;

// Export the reducer
export default PageDataSlice.reducer;
