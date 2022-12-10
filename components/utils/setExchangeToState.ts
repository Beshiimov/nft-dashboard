import {InDisplay} from '../../redux/slices/currencies/types';
import {InputStateType} from '../home/Exchange';

export const setExchangeToState = (
	field: number, index: number,
	inputs: InputStateType, setInputs: any,
	coins: InDisplay[], value?: number | string
) => {
	const cleanPrice = (price: string) => {
		if (typeof price === "string") {
			return +price.substring(1)
				.replace(/[\s,%]/g, '')

		} else return console.error('price is not typeof String')
	}

	if (field === 1) {
		if (value === undefined) {
			setInputs({
				firstIndex: index,
				firstInput: inputs.firstInput,
				secondIndex: inputs.secondIndex,
				secondInput: (inputs.firstInput * +cleanPrice(coins[index].USD.PRICE)) / +cleanPrice(coins[inputs.secondIndex].USD.PRICE),
			})
		} else
			setInputs({
				firstIndex: index,
				firstInput: value,
				secondIndex: inputs.secondIndex,
				secondInput: (+value * +cleanPrice(coins[inputs.firstIndex].USD.PRICE)) / +cleanPrice(coins[inputs.secondIndex].USD.PRICE),
			})
	}

	if (field === 2) {
		if (value === undefined) {
			setInputs({
				firstIndex: inputs.firstIndex,
				firstInput: (inputs.secondInput * +cleanPrice(coins[index].USD.PRICE)) / +cleanPrice(coins[inputs.firstIndex].USD.PRICE),
				secondIndex: index,
				secondInput: inputs.secondInput,
			})
		} else
			setInputs({
				firstIndex: inputs.firstIndex,
				firstInput: (+value * +cleanPrice(coins[inputs.secondIndex].USD.PRICE)) / +cleanPrice(coins[inputs.firstIndex].USD.PRICE),
				secondIndex: index,
				secondInput: value,
			})
	}
}