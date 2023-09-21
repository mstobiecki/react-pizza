import classes from './CartControls.module.css';

const CartControls = (props) => {
	return (
		<div className={classes.controls}>
			<button onClick={props.onCloseModal} className={classes.close}>
				Zamknij
			</button>
			<button className={classes.order}>Zamów</button>
		</div>
	);
};

export default CartControls;
