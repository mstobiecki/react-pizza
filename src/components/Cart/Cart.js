import classes from './Cart.module.css';
import {
	Pizza,
	XCircle,
	PlusCircle,
	Trash,
	Basket,
} from '@phosphor-icons/react';

import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContex from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
	const ctxCart = useContext(CartContex);
	console.log(ctxCart);
	const singleItemInCart = ctxCart.items.map((item) => (
		<CartItem key={item.id} name={item.name} price={item.price} />
	));
	return (
		<Modal onCloseModal={props.onCloseModal}>
			<div className={classes.container}>
				<h2 className={classes.cart}>
					<span>
						<Basket className={classes.basket} />
					</span>
					Co dziś dobrego zjesz?
				</h2>
				{singleItemInCart}
				<div className={classes.controls}>
					<button onClick={props.onCloseModal} className={classes.close}>
						Zamknij
					</button>
					<button className={classes.order}>Zamów</button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
