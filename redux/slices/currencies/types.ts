import {fetchStatus} from "../../../types/fetchTypes";
export type InDisplay = {
  USD: DisplayUsd
  Name: string
}
export type DisplayUsd = Record<string, string>

export type chartItemType = {
  time: number
  high: number
  low: number
  open: number
  volumefrom: number
  volumeto: number
  close: number
  conversionType: string
  conversionSymbol: string
}

export type chartsType = {
  Aggregated: boolean
  TimeFrom: number
  TimeTo: number
  Name: string
  Data: chartItemType[]
}

export interface currenciesSliceType {
  display: InDisplay[]
  charts: chartsType[]
  status: fetchStatus
}
