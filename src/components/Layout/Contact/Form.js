import { useEffect, useRef, useState } from 'react';
import classes from './Form.module.css';

import Input from '../../UI/Input/Input';
import ErrorForm from '../../UI/ErrorForm/ErrorForm';
import useInput from '../../../hooks/useInput';
import useValidation from '../../../hooks/useValidation';

const Form = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [formIsComplete, setFormIsComplete] = useState(false);
	const enteredNameInput = useRef();
	const enteredEmailInput = useRef();
	const enteredPhoneInput = useRef();
	const enteredMessageInput = useRef();

	const { isEmail, isPhoneNumber, isString } = useValidation();

	const {
		inputIsValid: enteredNameIsValid,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(isString);

	const {
		inputIsValid: enteredEmailIsValid,
		inputHasError: enteredEmailHasError,
		inputChangeHandler: enteredEmailChangeHandler,
		inputBlurHandler: enteredEmailBlurHandler,
		inputResetHandler: enteredEmailResetHandler,
	} = useInput(isEmail);

	const {
		inputIsValid: enteredPhoneIsValid,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(isPhoneNumber);

	const {
		inputIsValid: enteredMessageIsValid,
		inputHasError: enteredMessageHasError,
		inputChangeHandler: enteredMessageChangeHandler,
		inputBlurHandler: enteredMessageBlurHandler,
		inputResetHandler: enteredMessageResetHandler,
	} = useInput(isString);

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

		if (!formIsValid) {
			setFormIsComplete(true);
			return;
		}

		enteredNameInput.current.value = '';
		enteredEmailInput.current.value = '';
		enteredPhoneInput.current.value = '';
		enteredMessageInput.current.value = '';

		enteredNameResetHandler();
		enteredEmailResetHandler();
		enteredPhoneResetHandler();
		enteredMessageResetHandler();
		setFormIsComplete(false);
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
			{formIsComplete && <ErrorForm />}
			<div className={classes['button-box']}>
				<button
					aria-label='wyślij wiadomość'
					className={classes.button}
					type='submit'>
					Wyślij
				</button>
			</div>
		</form>
	);
};

export default Form;
