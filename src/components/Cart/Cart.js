import classes from './Cart.module.css';
import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContex from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import CartControls from './CartControls/CartControls';
import CartTitle from './CartTitle/CartTitle';

const Cart = (props) => {
	const ctxCart = useContext(CartContex);
	console.log(ctxCart);
	const singleItemInCart = ctxCart.items.map((item) => (
		<CartItem key={item.id} name={item.name} price={item.price} />
	));
	return (
		<Modal onCloseModal={props.onCloseModal}>
			<div className={classes.container}>
				<CartTitle />
				{singleItemInCart}
				<CartControls onCloseModal={props.onCloseModal} />
			</div>
		</Modal>
	);
};

export default Cart;
