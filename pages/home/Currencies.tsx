import {FC} from "react";
import Image from "next/image"

import {Title, CurrenciesContainer, CurrenciesItem, Currency} from "../../components/styles/CurrenciesStyle";
import {Display} from "../../types/fetch";

type CurrenciesProps = {
  data: Display
}


const Currencies:FC<CurrenciesProps> = ({data}):JSX.Element => {
  console.log(data, '---2')
  let items = []

  for (let i = 0; i < Object.keys(data).length; i++) {
    items.push(<CurrenciesItem key={i} href={"/currency/" + Object.keys(data)[i]}>
      <Title>
        <Image src={'https://www.cryptocompare.com' + Object.values(data)[i].USD.IMAGEURL} height={25} width={25} alt='bitcoin' />
        <span>{Object.keys(data)[i]} (24h)</span>
      </Title>
      <Currency>
        {Object.values(data)[i].USD.PRICE}
        {Object.values(data)[i].USD.CHANGEPCT24HOUR[0] === '-' ?
          <i style={{color: "rgba(255,0,0,0.77)"}}>
            {Object.values(data)[i].USD.CHANGEPCT24HOUR}%
          </i> :
          <i style={{color: "#28d01a"}}>
            +{Object.values(data)[i].USD.CHANGEPCT24HOUR}%
          </i>
        }
      </Currency>
    </CurrenciesItem>)
  }

  return (
    <CurrenciesContainer>
      {items}
    </CurrenciesContainer>
  );
};



export default Currencies;
