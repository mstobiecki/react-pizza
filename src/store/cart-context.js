import { createContext } from 'react';

const CartContex = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

export default CartContex;
