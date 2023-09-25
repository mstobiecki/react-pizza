import classes from './Contact.module.css';

import HeadingText from '../../UI/HeadingText/HeadingText';
import SectionWrapper from '../../UI/SectionWrapper/SectionWrapper';
import Card from '../../UI/Card/Card';
import Form from './Form';
import LocationMap from '../../UI/LocationMap/LocationMap';

const Contact = () => {
	return (
		<SectionWrapper id='contact'>
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
