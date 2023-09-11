import classes from './Gastronomy.module.css';
import pizzaCake from '../../../assets/gastronomy-1.jpg';
import pizzaOven from '../../../assets/gastronomy-2.jpg';

import Card from '../../UI/Card';
import HeadingText from '../../UI/HeadingText';
import SectionWrapper from '../../UI/SectionWrapper';

const Gastronomy = () => {
	return (
		<SectionWrapper className={classes.gastronomy}>
			<HeadingText subtitle='jakość' title='Jak przyrządzamy nasze pizze?' />
			<Card>
				<div className={classes.wrapper}>
					<div className={classes.box}>
						<h2 className={classes.title}>Składniki najwyższej jakości</h2>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<img
							className={classes.image}
							src={pizzaCake}
							alt='proces wyrabiania ciasta do pizzy'
						/>
					</div>
					<div className={classes.box}>
						<h2 className={classes.title}>Przepisy tworzone z miłości</h2>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<img
							className={classes.image}
							src={pizzaOven}
							alt='proces pieczenia pizzy'
						/>
					</div>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Gastronomy;
