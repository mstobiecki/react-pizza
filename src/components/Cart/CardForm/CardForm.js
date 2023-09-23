import Input from '../../UI/Input';
import classes from './CardForm.module.css';

const CardForm = () => {
	return (
		<form className={classes.form}>
			<Input name='name' label='Podaj imię:' type='text' />
			<Input name='city' label='Podaj miasto:' type='text' />
			<Input name='street' label='Podaj ulicę:' type='text' />
			<Input name='house' label='Podaj numer domu:' type='text' />
			<Input name='postal' label='Podaj kod pocztowy:' type='text' />
		</form>
	);
};

export default CardForm;
