import classes from './History.module.css';
import image from '../../../assets/history.jpg';

import SectionWrapper from '../../UI/SectionWrapper';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';
import useAnimation from '../../../hooks/use-animation';

const History = () => {
	const { section, animationClasses } = useAnimation('animate__backInLeft');

	return (
		<SectionWrapper className={animationClasses}>
			<HeadingText subtitle='historia' title='Poznaj nas bliżej' />
			<Card>
				<div ref={section} className='dadadadadda'>
					<div className={classes.wrapper}>
						<img
							className={classes.picture}
							src={image}
							alt='Wnętrze pizzeri zapełnione stolikami'
						/>
						<p className={classes.description}>
							Witajcie w Pizzerii React Pizza, gdzie każda kawałek smakuje jak
							podróż do słonecznych Włoch! Nasza historia rozpoczęła się kilka
							dekad temu, kiedy to pasja do autentycznej włoskiej kuchni skradła
							nasze serca. Dzięki naszemu zaangażowaniu w zachowanie
							tradycyjnych smaków i składników, nasze dania są prawdziwą ucztą
							dla podniebienia. Nasza włoska pizza wyróżnia się cienkim,
							chrupiącym ciastem i wyjątkowym sosem pomidorowym, a nasze dania
							makaronowe to prawdziwe dzieła sztuki kulinarnego rzemiosła.
						</p>
					</div>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default History;

// const [isIntersecting, setIsIntersecting] = useState(false);
// const historySection = useRef();

// useEffect(() => {
// 	const observer = new IntersectionObserver(
// 		(entries) => {
// 			const [entry] = entries;

// 			if (!entry.isIntersecting) return;

// 			if (entry.isIntersecting) {
// 				setIsIntersecting(true);
// 				observer.unobserve(historySection.current);
// 			}

// 			console.log(entry);
// 		},
// 		{
// 			root: null,
// 			threshold: 0.05,
// 		}
// 	);

// 	observer.observe(historySection.current);
// }, [isIntersecting]);
// const animationClasses = isIntersecting
// 	? `${'animate__animated'} ${'animate__backInLeft'}`
// 	: '';
// console.log(isIntersecting);
