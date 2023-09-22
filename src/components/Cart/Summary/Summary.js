import classes from './Summary.module.css';

const Summary = (props) => {
	return (
		<div className={classes.summary}>
			<p className={classes.total}>Łącznie do zapłaty: {props.totalCoast} zł</p>
		</div>
	);
};

export default Summary;
