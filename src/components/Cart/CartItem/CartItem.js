import classes from './CartItem.module.css';
import { Pizza, XCircle, PlusCircle, Trash } from '@phosphor-icons/react';

const CartItem = (props) => {
	return (
		<div className={classes.item}>
			<Pizza className={classes.icon} />
			<h3 className={classes.title}>{props.name}</h3>
			<button className={classes.button}>
				<PlusCircle />
			</button>
			<span className={classes.count}>3</span>
			<button className={classes.button}>
				<XCircle />
			</button>
			<span className={classes.price}>{props.price} zł</span>
			<span className={classes.delete}>
				<Trash />
			</span>
		</div>
	);
};

export default CartItem;
