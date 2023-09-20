import { useReducer } from 'react';
import CartContex from './cart-context';

const initialCartState = {
	items: 0,
	totalAmount: 0,
};

const cartReducer = (state, action) => {};

const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

	const addItemHandler = (item) => {
		dispatchCart({ type: 'ADD_ITEM', item: item });
	};

	const removeItemHandler = (id) => {
		dispatchCart({ type: 'REMOVE_ITEM', id: id });
	};

	const clearCartHandler = () => {
		dispatchCart({ type: 'CLEAR_CART' });
	};

	const cartContex = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
		clearCart: clearCartHandler,
	};
	return (
		<CartContex.Provider value={cartContex}>
			{props.children}
		</CartContex.Provider>
	);
};

export default CartProvider;
