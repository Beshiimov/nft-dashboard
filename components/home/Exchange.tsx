import {FC, useState} from 'react';
import {useSelector} from "react-redux";

import {RootState} from "../../redux/store"
import {ExchangeContainer, Title} from "../styles/ExchangerStyle";
import InputFields from "./InputFields";
import {InDisplay} from '../../redux/slices/currencies/types';
import {setExchangeToState} from '../utils/setExchangeToState';

export type InputStateType = {
  firstIndex: number
  firstInput: number
  secondIndex: number
  secondInput: number
}

const Exchange:FC = () => {
  const currency = useSelector((state: RootState) => state.appSlice.currency)
  const [inputs, setInputs] = useState<InputStateType>({
    firstIndex: 0,
    firstInput: 0,
    secondIndex: 1,
    secondInput: 0,
  })

  const coins = useSelector<RootState, InDisplay[]>
  (state => state.currenciesSlice.display)

  const setInput = (field: number,
                    index: number,
                    value?: number | string) => {
    setExchangeToState(field, index, inputs, setInputs, coins, value )
  }


  return (
    <ExchangeContainer>
      <Title>
        <h3>Exchange</h3>
        <div>{currency}</div>
      </Title>
      <InputFields
        index={inputs.firstIndex}
        input={inputs.firstInput}
        setInput={setInput}
        fieldNumber={1}
        coins={coins}
      />
      <InputFields
        index={inputs.secondIndex}
        input={inputs.secondInput}
        setInput={setInput}
        fieldNumber={2}
        coins={coins} />
    </ExchangeContainer>
  );
};

export default Exchange;
