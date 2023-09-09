import Card from '../../UI/Card';
import HeadingText from '../../UI/HeadingText';
import SectionWrapper from '../../UI/SectionWrapper';
import classes from './Gastronomy.module.css';

const Gastronomy = () => {
	return (
		<SectionWrapper>
			<HeadingText subtitle='jakość' title='Jak przyrządzamy nasze pizze?' />
			<Card>
				<div className={classes.wrapper}>
					<div className={classes.box}>
						<h2>Składniki najwyższej jakości</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className={classes.box}>
						<h2>Przepisy tworzone z miłości</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Gastronomy;
