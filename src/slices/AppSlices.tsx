import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavBarLink } from "../Typings/interfaces";
import { initialAppState } from "../Typings/AppConstants";
import { RootState } from "../store";
// import { RootState } from "@reduxjs/toolkit/query";

export interface AppState {
  currentTab: NavBarLink;
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialAppState,
  reducers: {
    setCurrentTab(state, action: PayloadAction<NavBarLink>) {
      state.currentTab = action.payload;
    },
  },
});
export const selectCurrentTab = (state: RootState) => state.appState.currentTab;
export const selectState = (state: RootState) => state;
export const { setCurrentTab } = appSlice.actions;
export default appSlice.reducer;
