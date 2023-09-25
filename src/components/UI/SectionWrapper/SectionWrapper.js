import classes from './SectionWrapper.module.css';

const SectionWrapper = (props) => {
	return (
		<section
			id={props.id || ''}
			className={`${classes.section} ${props.className || ''}`}>
			{props.children}
		</section>
	);
};

export default SectionWrapper;
