import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {currenciesSliceType} from "./types";
import {HYDRATE} from "next-redux-wrapper";

const initialState: currenciesSliceType = {
  data: null
}

export const currenciesSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.data = action.payload
    }
  },
  extraReducers: (builder => {
    builder.addCase(HYDRATE, (state, action:any) => {
      state.data = action.payload.currenciesSlice.data
    })
  })
})

const { setCurrencies } = currenciesSlice.actions


export const fetchCurrencies = ():any => async (dispatch) => {
  const data = await (await fetch
  ('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,DOGE,XPR&tsyms=USD'))
    ?.json()
  dispatch(setCurrencies(data))
};


export default currenciesSlice.reducer
