import axios, {
  AxiosResponse,
} from "axios";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  MediumJson,
  NavBarLink,
} from "../Typings/interfaces";
import { initialAppState } from "../Typings/AppConstants";
import { RootState } from "../store";
import projects from "../content/projects";
// import { RootState } from "@reduxjs/toolkit/query";

export interface AppState {
  currentTab: NavBarLink;
  showNavBar: boolean;
  mediumData: MediumJson | undefined;
  isLoading: boolean;
  projectsData: any[];
}

export const getMediumData =
  createAsyncThunk(
    "medium/data",
    async (_, { rejectWithValue }) => {
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40gurkirat801802&api_key=ekja4gsioge6vbwo9weoayxxinfsnpapxcbxju6l`;
      try {
        const response: AxiosResponse<MediumJson> =
          await axios.get(url);
        return response.data;
      } catch (e) {
        return rejectWithValue(e);
      }
    },
  );

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialAppState,
  reducers: {
    setCurrentTab(
      state,
      action: PayloadAction<NavBarLink>,
    ) {
      state.currentTab = action.payload;
    },
    setShowNavBar(
      state,
      action: PayloadAction<boolean>,
    ) {
      state.showNavBar = action.payload;
    },
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<AppState>,
  ) => {
    builder
      .addCase(
        getMediumData.fulfilled,
        (state: AppState, action) => {
          state.mediumData =
            action.payload;
          state.isLoading = false;
        },
      )
      .addCase(
        getMediumData.pending,
        (state: AppState) => {
          state.isLoading = true;
        },
      );  
    },
});
export const selectCurrentTab = (
  state: RootState,
) => state.appState.currentTab;
export const selectShowNavBar = (
  state: RootState,
) => state.appState.showNavBar;
export const selectMediumData = (
  state: RootState,
) => state.appState.mediumData;
export const selectIsLoading = (
  state: RootState,
) => state.appState.isLoading;

export const {
  setCurrentTab,
  setShowNavBar,
} = appSlice.actions;
export default appSlice.reducer;
