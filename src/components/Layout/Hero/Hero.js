import classes from './Hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.text}>
				<h1 className={classes.heading}>
					React Pizza to raj dla smakoszy pizzy. Zapraszamy na kulinarną
					przygodę
				</h1>
				<p className={classes.paragraph}>
					Gotujemy z pasją, serwując autentyczne włoskie smaki na Twoim talerzu.
					Dołącz do naszej kulinarniej podróży już teraz
				</p>
				<a href='#offer' className={classes.cta}>
					Sprawdź nasze menu
				</a>
			</div>
		</section>
	);
};

export default Hero;
