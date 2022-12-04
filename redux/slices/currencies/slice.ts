import {createSlice} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";


export const currenciesSlice = createSlice({
  name: 'app',
  initialState: {} as any,
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


export const fetchCurrencies = () => async (dispatch) => {
  const data = await (await fetch
  ('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,DOGE,XPR&tsyms=USD'))
    ?.json()
  dispatch(setCurrencies(data))
};


export default currenciesSlice.reducer
