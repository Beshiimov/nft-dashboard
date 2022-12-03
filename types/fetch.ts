export type fetchCoinType = {
  DISPLAY: CoinType
  RAW: CoinType
}

export type CoinType = Record<string, Record<string, Record<string, Record<string, string>>>>
