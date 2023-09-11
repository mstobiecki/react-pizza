import classes from './Form.module.css';

import Input from '../../UI/Input';

const Form = () => {
	return (
		<form className={classes.form}>
			<Input name='name' label='Podaj imię:' type='text' />
			<Input name='email' label='Podaj email:' type='email' />
			<Input name='phone' label='Podaj telefon:' type='tel' />
			<Input textarea={true} name='message' label='Podaj wiadomość:' />
			<div className={classes['button-box']}>
				<button className={classes.button} type='submit'>
					Wyślij
				</button>
			</div>
		</form>
	);
};

export default Form;
