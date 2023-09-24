import classes from './ErrorData.module.css';

const ErrorData = (props) => {
	return (
		<div className={classes.information}>
			<span className={classes.error}>{props.errorMessage}</span>
		</div>
	);
};

export default ErrorData;
