import { useRef, useState, useEffect, useContext, Fragment } from 'react';
import classes from './CartForm.module.css';

import Input from '../../UI/Input/Input';
import useInput from '../../../hooks/useInput';
import useValidation from '../../../hooks/useValidation';
import ErrorForm from '../../UI/ErrorForm/ErrorForm';
import useFetch from '../../../hooks/useFetch';
import CartContex from '../../../store/CartContext';
import LoadingData from '../../UI/LoadingData/LoadingData';
import ErrorData from '../../UI/ErrorData/ErrorData';

const CardForm = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [formIsComplete, setFormIsComplete] = useState(false);
	const [sendData, setSendData] = useState(false);
	const { errorRequest, loadingRequest, sendRequest } = useFetch();
	const ctxCart = useContext(CartContex);

	const enteredNameInput = useRef();
	const enteredPhoneInput = useRef();
	const enteredCityInput = useRef();
	const enteredStreetInput = useRef();
	const enteredHouseInput = useRef();
	const enteredPostalCodeInput = useRef();

	const { isPhoneNumber, isPostalCode, isString } = useValidation();

	const {
		inputValue: enteredName,
		inputIsValid: enteredNameIsValid,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(isString);

	const {
		inputValue: enteredPhone,
		inputIsValid: enteredPhoneIsValid,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(isPhoneNumber);

	const {
		inputValue: enteredCity,
		inputIsValid: enteredCityIsValid,
		inputHasError: enteredCityHasError,
		inputChangeHandler: enteredCityChangeHandler,
		inputBlurHandler: enteredCityBlurHandler,
		inputResetHandler: enteredCityResetHandler,
	} = useInput(isString);

	const {
		inputValue: enteredStreet,
		inputIsValid: enteredStreetIsValid,
		inputHasError: enteredStreetHasError,
		inputChangeHandler: enteredStreetChangeHandler,
		inputBlurHandler: enteredStreetBlurHandler,
		inputResetHandler: enteredStreetResetHandler,
	} = useInput(isString);

	const {
		inputValue: enteredHouse,
		inputIsValid: enteredHouseIsValid,
		inputHasError: enteredHouseHasError,
		inputChangeHandler: enteredHouseChangeHandler,
		inputBlurHandler: enteredHouseBlurHandler,
		inputResetHandler: enteredHouseResetHandler,
	} = useInput(isString);

	const {
		inputValue: enteredPostalCode,
		inputIsValid: enteredPostalCodeIsValid,
		inputHasError: enteredPostalCodeHasError,
		inputChangeHandler: enteredPostalCodeChangeHandler,
		inputBlurHandler: enteredPostalCodeBlurHandler,
		inputResetHandler: enteredPostalCodeResetHandler,
	} = useInput(isPostalCode);

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

		sendRequest({
			url: 'https://react-pizza-1d17a-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				items: ctxCart.items,
				userName: enteredName,
				userPhone: enteredPhone,
				userCity: enteredCity,
				userStreet: enteredStreet,
				userHouse: enteredHouse,
				userPostalCode: enteredPostalCode,
			}),
		});

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
		ctxCart.clearCart();

		setSendData(true);
	};

	const showFormBeforeSendData = (
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
				<button
					aria-label='złóż zamówienie'
					className={classes.button}
					type='submit'>
					Zamów pizzę 🍕
				</button>
			</div>
		</form>
	);

	let requestData;

	if (loadingRequest) requestData = <LoadingData />;
	if (errorRequest) requestData = <ErrorData errorMessage={errorRequest} />;

	return (
		<Fragment>
			{!sendData && showFormBeforeSendData}
			{sendData && requestData}
			{sendData && !requestData && (
				<div className={classes.information}>
					<p className={classes.success}>
						Zamówienie zostało prawidłowo złożone ✅
					</p>
				</div>
			)}
		</Fragment>
	);
};

export default CardForm;
