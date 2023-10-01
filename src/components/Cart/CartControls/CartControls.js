import classes from './CartControls.module.css';

const CartControls = (props) => {
	const hiddenOrderButton = props.orderedFood ? `${classes.hidden}` : '';

	const buttonActionOrder = !props.emptyCart && (
		<button
			aria-label='złóż zamówienie'
			onClick={props.onOrderFood}
			className={classes.order}>
			Zamów
		</button>
	);

	return (
		<div className={classes.controls}>
			<button
				aria-label='zamknij koszyk'
				onClick={props.onCloseModal}
				className={classes.close}>
				Zamknij
			</button>
			<div className={hiddenOrderButton}>{buttonActionOrder}</div>
		</div>
	);
};

export default CartControls;
