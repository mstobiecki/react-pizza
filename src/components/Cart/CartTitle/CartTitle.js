import { Basket } from '@phosphor-icons/react';
import classes from './CartTitle.module.css';

const CartTitle = () => {
	return (
		<h2 className={classes.cart}>
			<span>
				<Basket className={classes.basket} />
			</span>
			Co dziś dobrego zjesz?
		</h2>
	);
};

export default CartTitle;
