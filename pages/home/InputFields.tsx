import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import {Button, CoinList} from "../../components/styles/ExchangerStyle";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

import {Field} from "../../components/styles/ExchangerStyle";
import arrowDown from "/public/icons/arrow.svg"

export type fieldType = {
  input: '' | number,
  index: number,
  isOpen: boolean
}

const InputFields:FC = () => {
  const [field, setField] = useState<fieldType>({
    input: '',
    index: 0,
    isOpen: false
  })

  const coins = useSelector((state: RootState) => state.currenciesSlice.display)
  if (!coins) return <>Something Gone Wrong</>

  const coinListRef = useRef(null)
  const buttonRef = useRef(null)


  const setFields = (e: ChangeEvent<HTMLInputElement>) => {
    let value: '' | number = +e.target.value
    if (value === 0) value = ''
    setField({input: value, index: field.index, isOpen: false})
  }

  const setModalWindow = (boolean?: boolean) => {
    setField({input: field.input, index: field.index, isOpen: boolean ? boolean : !field.isOpen})
  }

  const onClickButton = (i: number) => {

    setField({input: field.input, index: i, isOpen: false})
  }

  useEffect(() => {
    const clickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.closest('div') !== coinListRef.current &&
        target.closest('div') !== buttonRef.current) {
        setField({input: field.input, index: field.index, isOpen: false})
      }
    }
    document.body.addEventListener('mousedown', clickOutside)
    return () => document.body.removeEventListener('mousedown', clickOutside)
  }, [field])


  return (
    <>
      <h4>{coins[field.index].Name}</h4>
      <Field>
        <input
          type="number"
          value={field.input}
          onChange={setFields}
        />
        <Button
          onClick={() => setModalWindow()}
          open={field.isOpen}
          ref={buttonRef}
        >
          <Image
            src={'https://www.cryptocompare.com' + coins[field.index].USD.IMAGEURL}
            alt="coin" width={25}
            height={25}
          />
          <Image src={arrowDown.src}
            alt="Select coin"
            width={10} height={10}
          />
        </Button>
        <CoinList open={field.isOpen} ref={coinListRef}>
          {coins.map((e, i:number) =>
            <button key={e.Name} onClick={() => onClickButton(i)}>
              <h4>{e.Name}</h4>
              <Image
                src={'https://www.cryptocompare.com' + e.USD.IMAGEURL}
                alt="coin" width={25} height={25}
              />
            </button>
          )}
        </CoinList>
      </Field>
    </>
  )
}

export default InputFields;
