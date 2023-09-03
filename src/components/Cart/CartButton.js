import { ShoppingCart } from '@phosphor-icons/react';
import classes from './CartButton.module.css';
const CartButton = () => {
	return (
		<button className={classes.cart}>
			<ShoppingCart />
			<span>3</span>
		</button>
	);
};

export default CartButton;
