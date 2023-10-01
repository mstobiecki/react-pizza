import classes from './History.module.css';
import image from '../../../assets/history.jpg';

import SectionWrapper from '../../UI/SectionWrapper/SectionWrapper';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import useAnimation from '../../../hooks/useAnimation';

const History = () => {
	const { section, animationClasses } = useAnimation('animate__backInLeft');

	return (
		<SectionWrapper id='history'>
			<HeadingText subtitle='historia' title='Poznaj nas bliżej' />
			<Card>
				<div ref={section} className={`${classes.wrapper} ${animationClasses}`}>
					<img
						className={classes.picture}
						src={image}
						alt='Wnętrze pizzeri zapełnione stolikami'
					/>
					<p className={classes.description}>
						Witajcie w Pizzerii React Pizza, gdzie każda kawałek smakuje jak
						podróż do słonecznych Włoch! Nasza historia rozpoczęła się kilka
						dekad temu, kiedy to pasja do autentycznej włoskiej kuchni skradła
						nasze serca. Dzięki naszemu zaangażowaniu w zachowanie tradycyjnych
						smaków i składników, nasze dania są prawdziwą ucztą dla
						podniebienia. Nasza włoska pizza wyróżnia się cienkim, chrupiącym
						ciastem i wyjątkowym sosem pomidorowym, a nasze dania makaronowe to
						prawdziwe dzieła sztuki kulinarnego rzemiosła.
					</p>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default History;
