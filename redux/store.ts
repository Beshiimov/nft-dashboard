import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import appSlice from "./slices/app/slice";
import currenciesSlice from "./slices/currencies/slice";
import {createWrapper} from "next-redux-wrapper";
import {useDispatch} from "react-redux";

export const makeStore = () => configureStore({
  reducer: {
    appSlice,
    currenciesSlice
  },
})

export const store = makeStore()


export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore)