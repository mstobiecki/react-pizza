import classes from './MenuItem.module.css';

import { useContext } from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import CartContex from '../../../store/cart-context';

const MenuItem = (props) => {
	const ctxCart = useContext(CartContex);

	const addItemToCartHandler = () => {
		ctxCart.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: props.amount,
		});
	};
	return (
		<div className={classes['pizza-wrapper']}>
			<div className={classes['pizza-item']}>
				<p className={classes['pizza-name']}>{props.name}</p>
				<p className={classes['pizza-description']}>{props.description}</p>
			</div>
			<div className={classes['pizza-actions']}>
				<button
					aria-label='zamów'
					onClick={addItemToCartHandler}
					className={classes.button}>
					<ShoppingCart aria-hidden='true' className={classes.icon} />
					<span className={classes.price}>{props.price} zł</span>
				</button>
			</div>
		</div>
	);
};

export default MenuItem;
