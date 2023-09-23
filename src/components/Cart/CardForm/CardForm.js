import { useRef } from 'react';
import classes from './CardForm.module.css';

import Input from '../../UI/Input';
import useInput from '../../../hooks/use-input';
import useValidation from '../../../hooks/use-validation';

const CardForm = () => {
	const enteredNameInput = useRef();
	const enteredPhoneInput = useRef();
	const enteredCityInput = useRef();
	const enteredStreetInput = useRef();
	const enteredHouseInput = useRef();
	const enteredPostalCodeInput = useRef();

	const { validatePhoneNumber, validatePostalCode, validateString } =
		useValidation();

	const {
		inputIsValid: enteredNameIsValid,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(validateString);

	const {
		inputIsValid: enteredPhoneIsValid,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(validatePhoneNumber);

	const {
		inputIsValid: enteredCityIsValid,
		inputHasError: enteredCityHasError,
		inputChangeHandler: enteredCityChangeHandler,
		inputBlurHandler: enteredCityBlurHandler,
		inputResetHandler: enteredCityResetHandler,
	} = useInput(validateString);

	const {
		inputIsValid: enteredStreetIsValid,
		inputHasError: enteredStreetHasError,
		inputChangeHandler: enteredStreetChangeHandler,
		inputBlurHandler: enteredStreetBlurHandler,
		inputResetHandler: enteredStreetResetHandler,
	} = useInput(validateString);

	const {
		inputIsValid: enteredHouseIsValid,
		inputHasError: enteredHouseHasError,
		inputChangeHandler: enteredHouseChangeHandler,
		inputBlurHandler: enteredHouseBlurHandler,
		inputResetHandler: enteredHouseResetHandler,
	} = useInput(validateString);

	const {
		inputIsValid: enteredPostalCodeIsValid,
		inputHasError: enteredPostalCodeHasError,
		inputChangeHandler: enteredPostalCodeChangeHandler,
		inputBlurHandler: enteredPostalCodeBlurHandler,
		inputResetHandler: enteredPostalCodeResetHandler,
	} = useInput(validatePostalCode);

	const submitHandler = (event) => {
		event.preventDefault();

		enteredNameResetHandler();
		enteredPhoneResetHandler();
		enteredCityResetHandler();
		enteredStreetResetHandler();
		enteredHouseResetHandler();
		enteredPostalCodeResetHandler();

		enteredNameInput.current.value = '';
		enteredPhoneInput.current.value = '';
		enteredCityInput.current.value = '';
		enteredStreetInput.current.value = '';
		enteredHouseInput.current.value = '';
		enteredPostalCodeInput.current.value = '';
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				onError={enteredNameHasError}
				onChange={enteredNameChangeHandler}
				onBlur={enteredNameBlurHandler}
				ref={enteredNameInput}
				name='name'
				label='Podaj imię:'
				type='text'
			/>
			<Input
				onError={enteredPhoneHasError}
				onChange={enteredPhoneChangeHandler}
				onBlur={enteredPhoneBlurHandler}
				ref={enteredPhoneInput}
				name='phone'
				label='Podaj telefon:'
				type='tel'
			/>
			<Input
				onError={enteredCityHasError}
				onChange={enteredCityChangeHandler}
				onBlur={enteredCityBlurHandler}
				ref={enteredCityInput}
				name='city'
				label='Podaj miasto:'
				type='text'
			/>
			<Input
				onError={enteredStreetHasError}
				onChange={enteredStreetChangeHandler}
				onBlur={enteredStreetBlurHandler}
				ref={enteredStreetInput}
				name='street'
				label='Podaj ulicę:'
				type='text'
			/>
			<Input
				onError={enteredHouseHasError}
				onChange={enteredHouseChangeHandler}
				onBlur={enteredHouseBlurHandler}
				ref={enteredHouseInput}
				name='house'
				label='Podaj numer domu:'
				type='text'
			/>
			<Input
				onError={enteredPostalCodeHasError}
				onChange={enteredPostalCodeChangeHandler}
				onBlur={enteredPostalCodeBlurHandler}
				ref={enteredPostalCodeInput}
				name='postalCode'
				label='Podaj kod pocztowy:'
				type='text'
			/>
			<button type='submit'>wyślij</button>
		</form>
	);
};

export default CardForm;
