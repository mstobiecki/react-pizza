import { useContext } from 'react';
import classes from './CartButton.module.css';

import { ShoppingCart } from '@phosphor-icons/react';
import CartContex from '../../../store/cart-context';

const CartButton = (props) => {
	const ctxCart = useContext(CartContex);
	const totalProductsInCart = ctxCart.items.reduce(
		(acc, cur) => acc + cur.amount,
		0
	);

	return (
		<button onClick={props.onShowModal} className={classes.cart}>
			<ShoppingCart />
			<span>{totalProductsInCart}</span>
		</button>
	);
};

export default CartButton;
