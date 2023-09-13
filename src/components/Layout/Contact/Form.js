import classes from './Form.module.css';

import Input from '../../UI/Input';
import useInput from '../../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.trim().includes('@');

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
	} = useInput(isEmail);

	const {
		inputValue: enteredPhone,
		inputHasError: enteredPhoneHasError,
		inputChangeHandler: enteredPhoneChangeHandler,
		inputBlurHandler: enteredPhoneBlurHandler,
		inputResetHandler: enteredPhoneResetHandler,
	} = useInput(isNotEmpty);

	const {
		inputValue: enteredMessage,
		inputHasError: enteredMessageHasError,
		inputChangeHandler: enteredMessageChangeHandler,
		inputBlurHandler: enteredMessageBlurHandler,
		inputResetHandler: enteredMessageResetHandler,
	} = useInput(isNotEmpty);

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(enteredName, enteredEmail, enteredPhone, enteredMessage);
		enteredNameResetHandler();
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
				type='email'
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
