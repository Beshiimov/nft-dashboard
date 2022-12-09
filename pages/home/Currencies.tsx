import {FC, useEffect} from "react";
import Image from "next/image"
import {useDispatch, useSelector} from "react-redux";

import {
  Title,
  CurrenciesContainer,
  CurrenciesItem,
  Currency,
  BgChart
} from "../../components/styles/CurrenciesStyle";
import {RootState} from "../../redux/store";
import {fetchCurrencies} from "../../redux/slices/currencies/slice";
import {fetchStatus} from "../../types/fetchTypes";
import ChartLine from "./ChartLine";
import {InDisplay} from "../../redux/slices/currencies/types";



const Currencies:FC = ():JSX.Element => {
  const display = useSelector<RootState, InDisplay[]>(state => state.currenciesSlice.display)
  const status = useSelector<RootState, fetchStatus>(state => state.currenciesSlice.status)

  if (!display) {
    return <>Loading...</>
  }
  if (status === fetchStatus.error) {
    return <>Something Gone Wrong...</>
  }


  const dispatch = useDispatch()

  useEffect(() => {
    const int = setInterval(() => {
      const fetchInterval = () => {
        dispatch(fetchCurrencies())
      }
      fetchInterval()
    },15000)
    return () => clearInterval(int)
  }, [])

    const items = display.map((i) => {
      let growUp = null
      i.USD.CHANGEPCT24HOUR[0] === '-' ? growUp = false : growUp = true

      return <CurrenciesItem key={i.Name} href={"/currency/" + i.Name}>
          <Title>
            <Image src={'https://www.cryptocompare.com' + i.USD.IMAGEURL} height={25} width={25} alt='bitcoin' />
            <span>{i.Name} <span>(today)</span></span>
          </Title>
          <Currency>
            {i.USD.PRICE}
            {growUp ?
              <i style={{color: "#28d01a"}}>
                {'+' + i.USD.CHANGEPCT24HOUR}%
              </i> :
              <i style={{color: "rgba(255,0,0,0.7)"}}>
                {i.USD.CHANGEPCT24HOUR}%
              </i>
            }
          </Currency>
          <BgChart>
            <ChartLine element={i.Name} growUp={growUp}/>
          </BgChart>
        </CurrenciesItem>
      }
    )



  return (
    <CurrenciesContainer>
      {items}
    </CurrenciesContainer>
  );
};



export default Currencies;
