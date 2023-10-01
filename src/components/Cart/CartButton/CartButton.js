import { useContext } from 'react';
import classes from './CartButton.module.css';

import { ShoppingCart } from '@phosphor-icons/react';
import CartContex from '../../../store/CartContext';

const CartButton = (props) => {
	const ctxCart = useContext(CartContex);
	const totalProductsInCart = ctxCart.items.reduce(
		(acc, cur) => acc + cur.amount,
		0
	);

	return (
		<button
			aria-label='koszyk'
			onClick={props.onShowModal}
			className={classes.cart}>
			<ShoppingCart aria-hidden='true' className={classes.icon} />
			<span className={classes.quantity}>{totalProductsInCart}</span>
		</button>
	);
};

export default CartButton;
