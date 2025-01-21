import { combineReducers } from "@reduxjs/toolkit";
import appReducer from './slices/AppSlices';

const rootReducer = combineReducers({
    appState: appReducer
})

export default rootReducer;