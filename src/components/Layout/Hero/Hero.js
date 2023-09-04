import classes from './Hero.module.css';

const Hero = () => {
	return (
		<setion className={classes.hero}>
			<div className={classes.text}>
				<h1 className={classes.heading}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
				</h1>
				<p className={classes.paragraph}>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<a href='#offer' className={classes.cta}>
					Sprawdź nasze menu
				</a>
			</div>
		</setion>
	);
};

export default Hero;
