import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {currenciesSliceType, InDisplay} from "./types";
import {HYDRATE} from "next-redux-wrapper";
import {fetchStatus} from "../../../types/fetchTypes";
import {AppThunk} from "../../store";


const initialState: currenciesSliceType = {
  display: [],
  charts: [],
  status: fetchStatus.initial
}

export const currenciesSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.display = action.payload
    },
    setCharts(state, action) {
      state.charts = action.payload
    },
    errorStatus(state) {
      state.status = fetchStatus.error
    }
  },
  extraReducers: (builder => {
    builder.addCase(HYDRATE, (state, action:any) => {
      state.display = action.payload.currenciesSlice.display
      state.charts = action.payload.currenciesSlice.charts
    })
  })
})

const { setCurrencies, errorStatus, setCharts } = currenciesSlice.actions


export const fetchCurrencies = ():any => async (dispatch, getState) => {
  const coins = getState().appSlice.coins
  try {
    const {DISPLAY} = await (await fetch
    (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins}&tsyms=${getState().appSlice.currency}`))
      ?.json()

    const data = []
    for (let i = 0; i < Object.keys(DISPLAY).length; i++) {
      Object.values(DISPLAY)[i]["Name"] = Object.keys(DISPLAY)[i]
      data.push(Object.values(DISPLAY)[i])
    }
    dispatch(setCurrencies(data))
  }
  catch (e) {
    dispatch(errorStatus())
    console.log(e, '--Currencies fetch error')
  }
};


export const fetchCoinsChart = ():any => async (dispatch, getState) => {
  const coins = getState().appSlice.coins

  const data = await Promise.all(coins.map(async (e) => {
    const {Data} = await (await fetch(
      `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${e}&tsym=USD&limit=12`))
      .json()
    Data.Name = e
    return Data
  }))
  dispatch(setCharts(data))

};


export default currenciesSlice.reducer
