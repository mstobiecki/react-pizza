import classes from './Section.module.css';

const SectionWrapper = (props) => {
	return (
		<section className={`${classes.section} ${props.className || ''}`}>
			{props.children}
		</section>
	);
};

export default SectionWrapper;
