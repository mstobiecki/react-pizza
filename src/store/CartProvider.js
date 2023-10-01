import { useReducer } from 'react';
import CartContex from './cart-context';

const initialCartState = {
	items: [],
	totalAmount: 0,
};

const actionCart = {
	increment: 'INCREMENT_QUANTITY',
	decrement: 'DECREMENT_QUANTITY',
	remove: 'REMOVE_ITEM_FROM_CART',
	clear: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
	const getItemCart = (id) => {
		return state.items.findIndex((item) => item.id === id);
	};

	const getUpdatedTotal = (price) => {
		return state.totalAmount + price;
	};

	switch (action.type) {
		case actionCart.increment: {
			const totalAmountInCart = getUpdatedTotal(action.item.price);
			const existingItem = getItemCart(action.item.id);

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
		case actionCart.decrement: {
			const existingCartItemIndex = getItemCart(action.id);
			const existingItem = state.items[existingCartItemIndex];
			const updatedTotalAmount = getUpdatedTotal(-existingItem.price);

			let updatedItems;

			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => item.id !== action.id);
			} else {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}
		case actionCart.remove: {
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
		default: {
			return initialCartState;
		}
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

	const addItemHandler = (item) => {
		dispatchCart({ type: actionCart.increment, item: item });
	};

	const deleteItemHandler = (id) => {
		dispatchCart({ type: actionCart.decrement, id: id });
	};

	const removeItemHandler = (id) => {
		dispatchCart({ type: actionCart.remove, id: id });
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
