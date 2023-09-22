import { useReducer } from 'react';
import CartContex from './cart-context';

const initialCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
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

	if (action.type === 'DELETE_ITEM') {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;

		let updatedItems;

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE_ITEM_FROM_CART') {
		const updatedItems = state.items.filter((item) => item.id !== action.id);

		const updatedTotalAmount = state.items
			.filter((item) => item.id === action.id)
			.map((item) => item.price * item.amount);

		const [totalAmountRemoveItem] = updatedTotalAmount;

		return {
			items: updatedItems,
			totalAmount: state.totalAmount - totalAmountRemoveItem,
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
		dispatchCart({ type: 'REMOVE_ITEM_FROM_CART', id: id });
	};

	const deleteItemHandler = (id) => {
		dispatchCart({ type: 'DELETE_ITEM', id: id });
	};

	const clearCartHandler = () => {
		dispatchCart({ type: 'CLEAR_CART' });
	};

	const cartContex = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
		deleteItem: deleteItemHandler,
		clearCart: clearCartHandler,
	};

	return (
		<CartContex.Provider value={cartContex}>
			{props.children}
		</CartContex.Provider>
	);
};

export default CartProvider;
