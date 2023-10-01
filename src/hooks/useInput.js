import { useReducer } from 'react';

const initialStateInput = {
	value: '',
	isClicked: false,
};

const actionInput = {
	update: 'VALUE_INPUT',
	blur: 'BLUR_INPUT',
	reset: 'RESET_INPUT',
};

const inputReducer = (state, { type, value }) => {
	switch (type) {
		case actionInput.update: {
			return {
				value,
				isClicked: state.isClicked,
			};
		}
		case actionInput.blur: {
			return {
				value: state.value,
				isClicked: true,
			};
		}
		case actionInput.reset: {
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
		dispatchInput({ type: actionInput.update, value: event.target.value });
	};

	const inputBlurHandler = () => {
		dispatchInput({ type: actionInput.blur });
	};

	const inputResetHandler = () => {
		dispatchInput({ type: actionInput.reset });
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
