import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavBarLink } from "../Typings/interfaces";
import { initialAppState } from "../Typings/AppConstants";
import { RootState } from "../store";
// import { RootState } from "@reduxjs/toolkit/query";

export interface AppState {
  currentTab: NavBarLink;
  showNavBar: boolean;
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialAppState,
  reducers: {
    setCurrentTab(state, action: PayloadAction<NavBarLink>) {
      state.currentTab = action.payload;
    },
    setShowNavBar(state, action: PayloadAction<boolean>) {
      state.showNavBar = action.payload;
    },
  },
});
export const selectCurrentTab = (state: RootState) => state.appState.currentTab;
export const selectShowNavBar = (state: RootState) => state.appState.showNavBar;
export const { setCurrentTab, setShowNavBar } = appSlice.actions;
export default appSlice.reducer;
