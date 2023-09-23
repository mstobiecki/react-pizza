import classes from './Cart.module.css';
import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartContex from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import CartControls from './CartControls/CartControls';
import CartTitle from './CartTitle/CartTitle';
import Summary from './Summary/Summary';
import CardForm from './CardForm/CardForm';

const Cart = (props) => {
	const [orderFoodButton, setOrderFoodButton] = useState(false);

	const orderFoodButtonHandler = () => {
		setOrderFoodButton(true);
	};

	const ctxCart = useContext(CartContex);
	const emptyCart = ctxCart.items.length === 0;

	const addItemQuantity = (item) => {
		ctxCart.addItem(item);
	};

	const deleteItemQuantity = (id) => {
		ctxCart.deleteItem(id);
	};

	const removeItemFromCart = (id) => {
		ctxCart.removeItem(id);
	};

	const singleItemInCart = ctxCart.items.map((item) => (
		<CartItem
			onDeleteItemQuantity={deleteItemQuantity.bind(null, item.id)}
			onAddItemQuantity={addItemQuantity.bind(null, item)}
			onRemoveItem={removeItemFromCart.bind(null, item.id)}
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			quantity={item.amount}
		/>
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
				{!emptyCart && <Summary totalCoast={ctxCart.totalAmount} />}
				{orderFoodButton && <CardForm />}
				<CartControls
					orderedFood={orderFoodButton}
					emptyCart={emptyCart}
					onOrderFood={orderFoodButtonHandler}
					onCloseModal={props.onCloseModal}
				/>
			</div>
		</Modal>
	);
};

export default Cart;
