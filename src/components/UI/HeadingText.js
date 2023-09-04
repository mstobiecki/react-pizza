import classes from './HeadingText.module.css';

const HeadingText = (props) => {
	return (
		<div className={classes.wrapper}>
			<span className={classes.subtitle}>{props.subtitle}</span>
			<h2 className={classes.title}>{props.title}</h2>
		</div>
	);
};

export default HeadingText;
