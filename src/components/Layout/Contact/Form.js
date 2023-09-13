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

const isNotEmpty = (value) => value.trim() !== '';

const Form = () => {
	const {
		inputValue: enteredName,
		inputHasError: enteredNameHasError,
		inputChangeHandler: enteredNameChangeHandler,
		inputBlurHandler: enteredNameBlurHandler,
		inputResetHandler: enteredNameResetHandler,
	} = useInput(isNotEmpty);

	const {
		inputValue: enteredEmail,
		inputHasError: enteredEmailHasError,
		inputChangeHandler: enteredEmailChangeHandler,
		inputBlurHandler: enteredEmailBlurHandler,
		inputResetHandler: enteredEmailResetHandler,
	} = useInput(validateEmail);

	const {
		inputValue: enteredPhone,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(validatePhoneNumber);

	const {
		inputValue: enteredMessage,
		inputHasError: enteredMessageHasError,
		inputChangeHandler: enteredMessageChangeHandler,
		inputBlurHandler: enteredMessageBlurHandler,
		inputResetHandler: enteredMessageResetHandler,
	} = useInput(isNotEmpty);

	const submitHandler = (event) => {
		event.preventDefault();

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
				name='name'
				label='Podaj imię:'
				type='text'
			/>
			<Input
				onError={enteredEmailHasError}
				onChange={enteredEmailChangeHandler}
				onBlur={enteredEmailBlurHandler}
				name='email'
				label='Podaj email:'
				type='text'
			/>
			<Input
				onError={enteredPhoneHasError}
				onChange={enteredPhoneChangeHandler}
				onBlur={enteredPhoneBlurHandler}
				name='phone'
				label='Podaj telefon:'
				type='tel'
			/>
			<Input
				onError={enteredMessageHasError}
				onChange={enteredMessageChangeHandler}
				onBlur={enteredMessageBlurHandler}
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
