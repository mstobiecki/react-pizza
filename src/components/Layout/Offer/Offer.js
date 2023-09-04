import classes from './Offer.module.css';
import { Smiley, Carrot, Truck } from '@phosphor-icons/react';

import Section from '../../UI/Section';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';

const Offer = () => {
	return (
		<Section>
			<HeadingText subtitle='nasza oferta' title='Dlaczego nasza pizza?' />
			<Card>
				<div className={classes.container}>
					<div className={classes.chef}>
						<span className={classes.icon}>
							<Smiley />
						</span>
						<h3 className={classes.title}>Świetny kucharz</h3>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					<div className={classes.fresh}>
						<span className={classes.icon}>
							<Carrot />
						</span>
						<h3 className={classes.title}>Świeża żywność</h3>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
					<div className={classes.delivery}>
						<span className={classes.icon}>
							<Truck />
						</span>
						<h3 className={classes.title}>Szybka dostawa</h3>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</Card>
		</Section>
	);
};

export default Offer;
