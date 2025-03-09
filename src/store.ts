import { configureStore } from "@reduxjs/toolkit";
import reducer from './RootReducer.ts'

// export const store = (preloadedState?: Partial<RootState>) => configureStore({reducer, preloadedState})

export const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>
// export type Store = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch;

export default store