import { FC } from 'react';
import {useSelector} from "react-redux";

import {RootState} from "../../redux/store"
import {ExchangeContainer, Title} from "../../components/styles/ExchangerStyle";
import InputFields from "./InputFields";


const Exchange:FC = () => {
  const currency = useSelector((state: RootState) => state.appSlice.currency)

  return (
    <ExchangeContainer>
      <Title>
        <h3>Exchange</h3>
        <div>{currency}</div>
      </Title>
      <InputFields />
      <InputFields />
    </ExchangeContainer>
  );
};

export default Exchange;
