import {Action, configureStore, Store, ThunkAction} from '@reduxjs/toolkit'
import {createWrapper} from "next-redux-wrapper";

import appSlice from "./slices/app/slice";
import currenciesSlice from "./slices/currencies/slice";


export const makeStore = () => configureStore({
  reducer: {
    appSlice,
    currenciesSlice
  },
})

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<Store<RootState>>(makeStore)