import classes from './CartButton.module.css';

import { ShoppingCart } from '@phosphor-icons/react';

const CartButton = () => {
	return (
		<button className={classes.cart}>
			<ShoppingCart />
			<span>3</span>
		</button>
	);
};

export default CartButton;
