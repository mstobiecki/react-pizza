import classes from './History.module.css';
import image from '../../../assets/history.jpg';

import Section from '../../UI/Section';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';
const History = () => {
	return (
		<Section>
			<HeadingText subtitle='historia' title='Poznaj nas bliżej' />
			<Card>
				<div className={classes.wrapper}>
					<img
						className={classes.picture}
						src={image}
						alt='Wnętrze pizzeri zapełnione stolikami'
					/>
					<p className={classes.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</Card>
		</Section>
	);
};

export default History;
