import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tabs } from "./constants";

interface Tab {
  id: string;
  label: string;
}

export interface TabsState {
  activeTab: string;
  tabs: Tab[];
}

const initialState: TabsState = {
  activeTab: "summarised",
  tabs: tabs
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setOrToggleActiveTab: (state, action: PayloadAction<string>) => {
      const clickedTabId = action.payload;

      if (clickedTabId === state.activeTab) {
        const otherTab = state.tabs.find((tab) => tab.id !== state.activeTab);
        state.activeTab = otherTab ? otherTab.id : state.tabs[0].id;
      } else {
        state.activeTab = clickedTabId;
      }
    },
  },
});

export const { setOrToggleActiveTab } = tabsSlice.actions;

export default tabsSlice.reducer;
