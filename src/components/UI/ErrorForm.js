import classes from './ErrorForm.module.css';

const ErrorForm = () => {
	return (
		<div className={classes['error-box']}>
			<p>Uzupełnij poprawnie formlarz przed wysłaniem.</p>
		</div>
	);
};

export default ErrorForm;
