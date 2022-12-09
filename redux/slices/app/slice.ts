import { createSlice } from '@reduxjs/toolkit'
import {appSliceType} from "./types";

const initialState: appSliceType = {
  currency: 'USD',
  coins: ['BTC','ETH','BNB','DOGE','XPR'],
  searchText: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload
    }
  },
})

export const { changeCurrency, changeSearchText } = appSlice.actions
export default appSlice.reducer
