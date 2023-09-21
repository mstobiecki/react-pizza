import { useReducer } from 'react';
import CartContex from './cart-context';

const initialCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const itemsInCart = state.items.concat(action.item);
		const totalAmountInCart = state.totalAmount + action.item.price;

		return {
			items: itemsInCart,
			totalAmount: totalAmountInCart,
		};
	}

	if (action.type === 'REMOVE_ITEM') {
		const updatedItems = state.items.filter((item) => item.id !== action.id);

		return {
			items: updatedItems,
			totalAmount: state.totalAmount,
		};
	}

	return initialCartState;
};

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
