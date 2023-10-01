import { useReducer } from 'react';
import { updateValueInput } from './updateValueInput';

const initialStateInput = {
	value: '',
	isClicked: false,
};

const Action = {
	Update: 'VALUE_INPUT',
	Blur: 'BLUR_INPUT',
	Reset: 'RESET_INPUT',
};

const inputReducer = (state, { type, value }) => {
	switch (type) {
		case Action.Update: {
			return {
				value,
				isClicked: state.isClicked,
			};
		}
		case Action.Blur: {
			return {
				value: state.value,
				isClicked: true,
			};
		}
		case Action.Reset: {
			return initialStateInput;
		}
		default:
			return initialStateInput;
	}
};

const useInput = (validateValue) => {
	const [inputState, dispatchInput] = useReducer(
		inputReducer,
		initialStateInput
	);

	const valueIsValid = validateValue(inputState.value);
	const inputHasError = !valueIsValid && inputState.isClicked;

	const inputChangeHandler = (event) => {
		dispatchInput(updateValueInput(Action.Update, event.target.value));
	};

	const inputBlurHandler = () => {
		dispatchInput({ type: Action.Blur });
	};

	const inputResetHandler = () => {
		dispatchInput({ type: Action.Reset });
	};

	return {
		inputValue: inputState.value,
		inputIsValid: valueIsValid,
		inputHasError,
		inputChangeHandler,
		inputBlurHandler,
		inputResetHandler,
	};
};

export default useInput;
