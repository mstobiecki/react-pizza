import classes from './Cart.module.css';
import {
	Pizza,
	XCircle,
	PlusCircle,
	Trash,
	Basket,
} from '@phosphor-icons/react';

import Modal from '../UI/Modal';

const Cart = (props) => {
	return (
		<Modal onCloseModal={props.onCloseModal}>
			<div className={classes.container}>
				<h2 className={classes.cart}>
					<span>
						<Basket className={classes.basket} />
					</span>
					Co dziś dobrego zjesz?
				</h2>
				<div className={classes.item}>
					<Pizza className={classes.icon} />
					<h3 className={classes.title}>Pizza Name</h3>
					<button className={classes.button}>
						<PlusCircle />
					</button>
					<span className={classes.count}>3</span>
					<button className={classes.button}>
						<XCircle />
					</button>
					<span className={classes.price}>23 zł</span>
					<span className={classes.delete}>
						<Trash />
					</span>
				</div>
				<div className={classes.item}>
					<Pizza className={classes.icon} />
					<h2 className={classes.title}>Pizza Name</h2>
					<button className={classes.button}>
						<PlusCircle />
					</button>
					<span className={classes.count}>3</span>
					<button className={classes.button}>
						<XCircle />
					</button>
					<span className={classes.price}>23 zł</span>
					<span className={classes.delete}>
						<Trash />
					</span>
				</div>
				<div className={classes.item}>
					<Pizza className={classes.icon} />
					<h2 className={classes.title}>Pizza Name</h2>
					<button className={classes.button}>
						<PlusCircle />
					</button>
					<span className={classes.count}>3</span>
					<button className={classes.button}>
						<XCircle />
					</button>
					<span className={classes.price}>23 zł</span>
					<span className={classes.delete}>
						<Trash />
					</span>
				</div>
				<div className={classes.controls}>
					<button onClick={props.onCloseModal} className={classes.close}>
						Zamknij
					</button>
					<button className={classes.order}>Zamów</button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
