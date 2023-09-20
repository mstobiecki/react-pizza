import classes from './CartButton.module.css';

import { ShoppingCart } from '@phosphor-icons/react';

const CartButton = (props) => {
	return (
		<button onClick={props.onShowModal} className={classes.cart}>
			<ShoppingCart />
			<span>3</span>
		</button>
	);
};

export default CartButton;
