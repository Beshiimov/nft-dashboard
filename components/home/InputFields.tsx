import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import {Button, CoinList, InputTitle} from "./ExchangerStyle";
import Image from "next/image";

import {Field} from "./ExchangerStyle";
import arrowDown from "/public/icons/arrow.svg"
import {InDisplay} from "../../redux/slices/currencies/types";

type InputFieldsType = {
  index: number
  input: number
  fieldNumber: number
  setInput: (field: number,
             index: number,
             value?: number | string
  ) => any
  coins: InDisplay[]
}

const InputFields:FC<InputFieldsType> = ({
    index,
    input,
    fieldNumber,
    setInput,
    coins
  }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (coins.length === 0) return <>Something Gone Wrong...</>

  const coinListRef = useRef(null)
  const buttonRef = useRef(null)


  const setFields = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\..*/g, '$1')
      .replace(/^0[^.]/, '0');

    setIsOpen(false)
    setInput(fieldNumber, index, value)
  }

  const setModalWindow = (boolean?: boolean) => {
    setIsOpen(boolean ? boolean : !isOpen)
    setInput(fieldNumber, index)
  }

  const onClickButton = (i: number) => {
    setIsOpen(false)
    setInput(fieldNumber, i)
  }

  useEffect(() => {
    const clickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.closest('div') !== coinListRef.current &&
        target.closest('div') !== buttonRef.current) {
        setIsOpen(false)
      }
    }
    document.body.addEventListener('mousedown', clickOutside)
    return () => document.body.removeEventListener('mousedown', clickOutside)
  }, [isOpen])


  return (
    <>
      <InputTitle>{coins[index].Name}</InputTitle>
      <Field>
        <input
          value={input === 0 ? '' : input}
          onChange={setFields}
          maxLength={10}
        />
        <Button
          onClick={() => setModalWindow()}
          open={isOpen}
          ref={buttonRef}
        >
          <Image
            src={'https://www.cryptocompare.com' + coins[index].USD.IMAGEURL}
            alt="coin" width={25}
            height={25}
          />
          <Image src={arrowDown.src}
            alt="Select coin"
            width={10} height={10}
          />
        </Button>
        <CoinList open={isOpen} ref={coinListRef}>
          {coins.map((e, i:number) => i !== index &&
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
