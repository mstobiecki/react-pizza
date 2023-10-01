import classes from './CartItem.module.css';
import { Pizza, XCircle, PlusCircle, Trash } from '@phosphor-icons/react';

const CartItem = (props) => {
	return (
		<div className={classes.item}>
			<Pizza className={classes.icon} />
			<h3 className={classes.title}>{props.name}</h3>
			<button
				aria-label='zwiększ ilość'
				onClick={props.onAddItemQuantity}
				className={classes.button}>
				<PlusCircle aria-hidden='true' className={classes.action} />
			</button>
			<span className={classes.quantity}>{props.quantity}</span>
			<button
				aria-label='zmniejsz ilość'
				onClick={props.onDeleteItemQuantity}
				className={classes.button}>
				<XCircle aria-hidden='true' className={classes.action} />
			</button>
			<p className={classes.price}>{props.price} zł</p>
			<button
				aria-label='usuń przedmiot z koszyka'
				onClick={props.onRemoveItem}
				className={classes.delete}>
				<Trash aria-hidden='true' className={classes.action} />
			</button>
		</div>
	);
};

export default CartItem;
