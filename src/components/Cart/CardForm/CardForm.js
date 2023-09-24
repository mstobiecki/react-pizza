import { useRef, useState, useEffect } from 'react';
import classes from './CardForm.module.css';

import Input from '../../UI/Input';
import useInput from '../../../hooks/use-input';
import useValidation from '../../../hooks/use-validation';
import ErrorForm from '../../UI/ErrorForm';

const CardForm = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [formIsComplete, setFormIsComplete] = useState(false);
	const enteredNameInput = useRef();
	const enteredPhoneInput = useRef();
	const enteredCityInput = useRef();
	const enteredStreetInput = useRef();
	const enteredHouseInput = useRef();
	const enteredPostalCodeInput = useRef();

	const { validatePhoneNumber, validatePostalCode, validateString } =
		useValidation();

	const {
		inputValue: enteredName,
		inputIsValid: enteredNameIsValid,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(validateString);

	const {
		inputValue: enteredPhone,
		inputIsValid: enteredPhoneIsValid,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(validatePhoneNumber);

	const {
		inputValue: enteredCity,
		inputIsValid: enteredCityIsValid,
		inputHasError: enteredCityHasError,
		inputChangeHandler: enteredCityChangeHandler,
		inputBlurHandler: enteredCityBlurHandler,
		inputResetHandler: enteredCityResetHandler,
	} = useInput(validateString);

	const {
		inputValue: enteredStreet,
		inputIsValid: enteredStreetIsValid,
		inputHasError: enteredStreetHasError,
		inputChangeHandler: enteredStreetChangeHandler,
		inputBlurHandler: enteredStreetBlurHandler,
		inputResetHandler: enteredStreetResetHandler,
	} = useInput(validateString);

	const {
		inputValue: enteredHouse,
		inputIsValid: enteredHouseIsValid,
		inputHasError: enteredHouseHasError,
		inputChangeHandler: enteredHouseChangeHandler,
		inputBlurHandler: enteredHouseBlurHandler,
		inputResetHandler: enteredHouseResetHandler,
	} = useInput(validateString);

	const {
		inputValue: enteredPostalCode,
		inputIsValid: enteredPostalCodeIsValid,
		inputHasError: enteredPostalCodeHasError,
		inputChangeHandler: enteredPostalCodeChangeHandler,
		inputBlurHandler: enteredPostalCodeBlurHandler,
		inputResetHandler: enteredPostalCodeResetHandler,
	} = useInput(validatePostalCode);

	useEffect(() => {
		if (
			enteredNameIsValid &&
			enteredPhoneIsValid &&
			enteredCityIsValid &&
			enteredStreetIsValid &&
			enteredHouseIsValid &&
			enteredPostalCodeIsValid
		)
			setFormIsValid(true);
	}, [
		enteredNameIsValid,
		enteredPhoneIsValid,
		enteredCityIsValid,
		enteredStreetIsValid,
		enteredHouseIsValid,
		enteredPostalCodeIsValid,
	]);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			setFormIsComplete(true);
			return;
		}

		enteredNameResetHandler();
		enteredPhoneResetHandler();
		enteredCityResetHandler();
		enteredStreetResetHandler();
		enteredHouseResetHandler();
		enteredPostalCodeResetHandler();
		setFormIsComplete(false);

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
			{formIsComplete && <ErrorForm />}
			<div className={classes.action}>
				<button className={classes.button} type='submit'>
					Zamów pizzę 🍕
				</button>
			</div>
		</form>
	);
};

export default CardForm;
