import classes from './CartControls.module.css';

const CartControls = (props) => {
	console.log(props);
	return (
		<div className={classes.controls}>
			<button onClick={props.onCloseModal} className={classes.close}>
				Zamknij
			</button>
			{!props.emptyCart && (
				<button onClick={props.onOrderFood} className={classes.order}>
					Zamów
				</button>
			)}
		</div>
	);
};

export default CartControls;
