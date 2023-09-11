import classes from './Contact.module.css';

import HeadingText from '../../UI/HeadingText';
import SectionWrapper from '../../UI/SectionWrapper';
import Card from '../../UI/Card';
import Form from './Form';
import LocationMap from '../../UI/LocationMap';

const Contact = () => {
	return (
		<SectionWrapper>
			<HeadingText subtitle='kontakt' title='Porozmawiajmy o pizzy' />
			<Card>
				<div className={classes.wrapper}>
					<Form />
					<LocationMap />
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Contact;
