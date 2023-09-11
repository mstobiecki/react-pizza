import classes from './Input.module.css';

const Input = (props) => {
	const inputType = props.textarea ? (
		<textarea className={classes.textarea} />
	) : (
		<input className={classes.input} id={props.name} type={props.type} />
	);

	return (
		<div className={classes.control}>
			<label className={classes.label} htmlFor={props.name}>
				{props.label}
			</label>
			{inputType}
		</div>
	);
};

export default Input;
