import classes from './CartItem.module.css';
import { Pizza, XCircle, PlusCircle, Trash } from '@phosphor-icons/react';

const CartItem = (props) => {
	return (
		<div className={classes.item}>
			<Pizza className={classes.icon} />
			<h3 className={classes.title}>{props.name}</h3>
			<button onClick={props.onAddItemQuantity} className={classes.button}>
				<PlusCircle className={classes.action} />
			</button>
			<span className={classes.quantity}>{props.quantity}</span>
			<button onClick={props.onDeleteItemQuantity} className={classes.button}>
				<XCircle className={classes.action} />
			</button>
			<p className={classes.price}>{props.price} zł</p>
			<button onClick={props.onRemoveItem} className={classes.delete}>
				<Trash className={classes.action} />
			</button>
		</div>
	);
};

export default CartItem;
