import { forwardRef } from 'react';
import classes from './Input.module.css';

const hasError = (isError, className) =>
	isError ? `${className} ${classes.invalid}` : `${className}`;

const Input = forwardRef((props, ref) => {
	const inputHasError = hasError(props.onError, classes.input);
	const textAreaHasError = hasError(props.onError, classes.textarea);

	const inputType = props.textarea ? (
		<textarea
			onChange={props.onChange}
			onBlur={props.onBlur}
			className={textAreaHasError}
			ref={ref}
		/>
	) : (
		<input
			onChange={props.onChange}
			onBlur={props.onBlur}
			className={inputHasError}
			id={props.name}
			type={props.type}
			ref={ref}
		/>
	);

	return (
		<div className={classes.control}>
			<label className={classes.label} htmlFor={props.name}>
				{props.label}
			</label>
			{inputType}
			{props.onError && (
				<p className={classes['input-error']}>
					Wprowadź poprawne dane w formularzu.
				</p>
			)}
		</div>
	);
});

export default Input;
