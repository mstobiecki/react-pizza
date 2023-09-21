import classes from './Cart.module.css';
import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContex from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import CartControls from './CartControls/CartControls';
import CartTitle from './CartTitle/CartTitle';

const Cart = (props) => {
	const ctxCart = useContext(CartContex);

	const singleItemInCart = ctxCart.items.map((item) => (
		<CartItem key={item.id} name={item.name} price={item.price} />
	));

	const products =
		singleItemInCart.length === 0 ? (
			<p className={classes.empty}>Brak przedmiotów w koszyku.</p>
		) : (
			singleItemInCart
		);

	return (
		<Modal onCloseModal={props.onCloseModal}>
			<div className={classes.container}>
				<CartTitle />
				{products}
				<CartControls onCloseModal={props.onCloseModal} />
			</div>
		</Modal>
	);
};

export default Cart;
