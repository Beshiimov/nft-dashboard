import { createSlice } from '@reduxjs/toolkit'
import {appSliceType} from "./types";

const initialState: appSliceType = {
  currency: 'USD'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload
    }
  },
})

export const { changeCurrency } = appSlice.actions
export default appSlice.reducer
