import { useReducer } from 'react';

const initialStateInput = {
	value: '',
	isClicked: false,
};

const inputReducer = (state, action) => {
	if (action.type === 'VALUE_INPUT')
		return {
			value: action.value,
			isClicked: state.isClicked,
		};
	if (action.type === 'BLUR_INPUT')
		return {
			value: state.value,
			isClicked: true,
		};

	if (action.type === 'RESET_INPUT') return initialStateInput;

	return initialStateInput;
};

const useInput = (validateValue) => {
	const [inputState, dispatchInput] = useReducer(
		inputReducer,
		initialStateInput
	);

	const valueIsValid = validateValue(inputState.value);
	const inputHasError = !valueIsValid && inputState.isClicked;

	const inputChangeHandler = (event) => {
		dispatchInput({ type: 'VALUE_INPUT', value: event.target.value });
	};

	const inputBlurHandler = () => {
		dispatchInput({ type: 'BLUR_INPUT' });
	};

	const inputResetHandler = () => {
		dispatchInput({ type: 'RESET_INPUT' });
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
