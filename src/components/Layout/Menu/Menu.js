import classes from './Menu.module.css';

import SectionWrapper from '../../UI/SectionWrapper';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';
import MenuItem from './MenuItem';

const Menu = () => {
	return (
		<SectionWrapper>
			<HeadingText subtitle='menu' title='Na co masz chęć?' />
			<Card>
				<div className={classes.container}>
					<MenuItem />
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Menu;
