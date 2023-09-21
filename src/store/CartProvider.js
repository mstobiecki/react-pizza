import { useReducer } from 'react';
import CartContex from './cart-context';

const initialCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		// const itemsInCart = state.items.concat(action.item);
		const totalAmountInCart = state.totalAmount + action.item.price;

		const existingItem = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existingPizza = state.items[existingItem];
		let updatedItems;
		if (existingPizza) {
			const updatePizza = {
				...existingPizza,
				totalAmount: state.totalAmount + existingPizza.price,
				amount: (existingPizza.amount += 1),
			};
			updatedItems = [...state.items];
			updatedItems[existingItem] = updatePizza;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
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
	console.log(cartState.items);
	console.log(cartState.totalAmount);
	return (
		<CartContex.Provider value={cartContex}>
			{props.children}
		</CartContex.Provider>
	);
};

export default CartProvider;
