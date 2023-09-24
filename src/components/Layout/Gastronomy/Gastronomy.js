import classes from './Gastronomy.module.css';
import pizzaCake from '../../../assets/gastronomy-1.jpg';
import pizzaOven from '../../../assets/gastronomy-2.jpg';

import Card from '../../UI/Card/Card';
import HeadingText from '../../UI/HeadingText/HeadingText';
import SectionWrapper from '../../UI/SectionWrapper/SectionWrapper';
import useAnimation from '../../../hooks/use-animation';

const Gastronomy = () => {
	const { section: ingredients, animationClasses: ingredientsClasses } =
		useAnimation('animate__backInLeft');
	const { section: recipes, animationClasses: recipesClasses } = useAnimation(
		'animate__backInRight'
	);

	return (
		<SectionWrapper className={classes.gastronomy}>
			<HeadingText subtitle='jakość' title='Jak przyrządzamy nasze pizze?' />
			<Card>
				<div className={classes.wrapper}>
					<div
						ref={ingredients}
						className={`${classes.box} ${ingredientsClasses}`}>
						<div className={classes['text-box']}>
							<h2 className={classes.title}>Składniki najwyższej jakości</h2>
							<p className={classes.description}>
								W naszej kuchni jakość to fundament, na którym budujemy naszą
								kulinarną reputację. Zawsze wybieramy składniki najwyższej
								jakości, aby dostarczać naszym klientom niezapomniane
								doświadczenia smakowe, które wyróżniają nas od innych. Nasza
								pasja do składników najwyższej jakości zaczyna się od wyboru
								dostawców, z którymi utrzymujemy bliskie relacje oparte na
								zaufaniu. Współpracujemy z lokalnymi rolnikami i dostawcami, aby
								mieć pewność, że nasze warzywa, owoce, mięso i ryby są świeże,
								naturalne i pochodzą z odpowiedzialnych źródeł.
							</p>
						</div>
						<div className={classes['image-box']}>
							<img
								className={classes.image}
								src={pizzaCake}
								alt='proces wyrabiania ciasta do pizzy'
							/>
						</div>
					</div>
					<div ref={recipes} className={`${classes.box} ${recipesClasses}`}>
						<div className={classes['text-box']}>
							<h2 className={classes.title}>Przepisy tworzone z miłości</h2>
							<p className={classes.description}>
								Nasze przepisy to nie tylko zbiór składników i instrukcji - to
								historie, które opowiadają o pasji, staranności i oddaniu, które
								wkładamy w każdy posiłek. Każde danie jest wynikiem naszych
								kulinarnych eksperymentów i poszukiwań, mających na celu
								stworzenie smaku, który rozkwita na podniebieniu. Nasze dania to
								nie tylko połączenie smaków, to wyraz naszej miłości do sztuki
								kulinarnej. Każdy detal jest dopracowany, każdy smak jest
								wyważony, a prezentacja potrawy jest estetyczna i zachwycająca.
							</p>
						</div>
						<div className={classes['image-box']}>
							<img
								className={classes.image}
								src={pizzaOven}
								alt='proces pieczenia pizzy'
							/>
						</div>
					</div>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Gastronomy;
