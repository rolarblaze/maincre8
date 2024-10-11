// alertsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the Alert interface
interface Alert {
  id?: string;
  headText: string;
  subText: string;
  type: "error" | "warning" | "success";
  autoClose?: boolean;
  icon?: string;
  spin?: boolean;
}

// Define the AlertsState interface
export interface AlertsState {
  messages: Alert[];
}

// Initial state for AlertsSlice
const initialState: AlertsState = {
  messages: [],
};

// Create the AlertsSlice
export const AlertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      // Generate a unique ID using uuidv4
      const newAlert = {
        id: action.payload.id || uuidv4(),
        ...action.payload,
      };
      // Add the generated alert and push it into the state
      state.messages.push(newAlert);
    },
    removeAlert: (state: AlertsState, action: PayloadAction<string>) => {
      // action payload is the id of the alert
      state.messages = state.messages.filter(
        (alert) => alert.id !== action.payload,
      );
    },
  },
});

// Export the actions
export const { addAlert, removeAlert } = AlertsSlice.actions;

// Export the reducer
export default AlertsSlice.reducer;
