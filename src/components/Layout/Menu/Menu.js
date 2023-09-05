import classes from './Menu.module.css';
import { ShoppingCart } from '@phosphor-icons/react';

import Section from '../../UI/Section';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';

const Menu = () => {
	return (
		<Section>
			<HeadingText subtitle='menu' title='Na co masz chęć?' />
			<Card>
				<div className={classes.container}>
					<div className={classes['pizza-wrapper']}>
						<div className={classes['pizza-item']}>
							<p className={classes['pizza-name']}>Margherita</p>
							<p className={classes['pizza-description']}>
								mozzarella, sos pomidorowy, bazylia
							</p>
						</div>
						<div className={classes['pizza-price']}>
							<p>13 zł</p>
						</div>
					</div>
					<div className={classes['pizza-wrapper']}>
						<div className={classes['pizza-item']}>
							<p className={classes['pizza-name']}>Margherita</p>
							<p className={classes['pizza-description']}>
								mozzarella, sos pomidorowy, bazylia
							</p>
						</div>
						<div className={classes['pizza-price']}>
							<p>13 zł</p>
						</div>
					</div>
				</div>
			</Card>
		</Section>
	);
};

export default Menu;
