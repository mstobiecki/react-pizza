import classes from './MenuItem.module.css';
import { ShoppingCart } from '@phosphor-icons/react';

const MenuItem = (props) => {
	return (
		<div className={classes['pizza-wrapper']}>
			<div className={classes['pizza-item']}>
				<p className={classes['pizza-name']}>{props.name}</p>
				<p className={classes['pizza-description']}>{props.description}</p>
			</div>
			<div className={classes['pizza-actions']}>
				<button className={classes.button}>
					<ShoppingCart className={classes.icon} />
					<span className={classes.price}>{props.price} zł</span>
				</button>
			</div>
		</div>
	);
};

export default MenuItem;
