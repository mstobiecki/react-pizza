import { useEffect, useRef, useState } from 'react';
import classes from './Form.module.css';

import Input from '../../UI/Input';
import useInput from '../../../hooks/use-input';

const validateEmail = (value) => {
	const validateEmailRegex = /^\S+@\S+\.\S+$/;
	return validateEmailRegex.test(value);
};

const validatePhoneNumber = (value) => {
	const validatePhoneNumberRegex =
		/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
	return validatePhoneNumberRegex.test(value);
};

const validateStringInput = (value) => {
	const validateStringValue = /(.|\s)*\S(.|\s)*/;
	return validateStringValue.test(value);
};

const Form = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const enteredNameInput = useRef();
	const enteredEmailInput = useRef();
	const enteredPhoneInput = useRef();
	const enteredMessageInput = useRef();

	const {
		inputIsValid: enteredNameIsValid,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(validateStringInput);

	const {
		inputIsValid: enteredEmailIsValid,
		inputHasError: enteredEmailHasError,
		inputChangeHandler: enteredEmailChangeHandler,
		inputBlurHandler: enteredEmailBlurHandler,
		inputResetHandler: enteredEmailResetHandler,
	} = useInput(validateEmail);

	const {
		inputIsValid: enteredPhoneIsValid,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(validatePhoneNumber);

	const {
		inputIsValid: enteredMessageIsValid,
		inputHasError: enteredMessageHasError,
		inputChangeHandler: enteredMessageChangeHandler,
		inputBlurHandler: enteredMessageBlurHandler,
		inputResetHandler: enteredMessageResetHandler,
	} = useInput(validateStringInput);

	useEffect(() => {
		if (
			enteredNameIsValid &&
			enteredEmailIsValid &&
			enteredPhoneIsValid &&
			enteredMessageIsValid
		)
			setFormIsValid(true);
	}, [
		enteredNameIsValid,
		enteredEmailIsValid,
		enteredPhoneIsValid,
		enteredMessageIsValid,
	]);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) return;

		enteredNameInput.current.value = '';
		enteredEmailInput.current.value = '';
		enteredPhoneInput.current.value = '';
		enteredMessageInput.current.value = '';

		enteredNameResetHandler();
		enteredEmailResetHandler();
		enteredPhoneResetHandler();
		enteredMessageResetHandler();
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
				onError={enteredEmailHasError}
				onChange={enteredEmailChangeHandler}
				onBlur={enteredEmailBlurHandler}
				ref={enteredEmailInput}
				name='email'
				label='Podaj email:'
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
				onError={enteredMessageHasError}
				onChange={enteredMessageChangeHandler}
				onBlur={enteredMessageBlurHandler}
				ref={enteredMessageInput}
				textarea={true}
				name='message'
				label='Podaj wiadomość:'
			/>
			<div className={classes['button-box']}>
				<button className={classes.button} type='submit'>
					Wyślij
				</button>
			</div>
		</form>
	);
};

export default Form;
