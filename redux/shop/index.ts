import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBundles } from "./features";
import { GetBundlesEndPoint, PageViewData, ShopReduxState } from "./interface";

// Define the initial state with default values
const initialPageViewData: ShopReduxState = {
  allShopBundles: [],
  currentViewBundle: "",
};

const filterBundle = (id: string, state: ShopReduxState) => {
  const allShopBundles = state.allShopBundles;

  if (allShopBundles.length === 0) {
    return "";
  }

  const selectedBundle = allShopBundles.find(
    (bundle) => bundle.bundle_id.toString() === id
  );
  
  return selectedBundle || allShopBundles[0];
};

export const PageDataSlice = createSlice({
  name: "pageViewData",
  initialState: initialPageViewData,
  reducers: {
    changePageData: (state, action: PayloadAction<string>) => {
      // Update the state with the new page data
      state.currentViewBundle = filterBundle(action.payload, state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBundles.pending, (state: ShopReduxState) => {
        state.allShopBundles = [];
        state.currentViewBundle = "";
      })
      .addCase(getBundles.fulfilled, (state, action) => {
        state.allShopBundles = action.payload;
        state.currentViewBundle = action.payload[0];
      })
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
