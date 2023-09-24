import classes from './Offer.module.css';
import { Smiley, Carrot, Truck } from '@phosphor-icons/react';

import SectionWrapper from '../../UI/SectionWrapper/SectionWrapper';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import useAnimation from '../../../hooks/use-animation';

const Offer = () => {
	const { section, animationClasses } = useAnimation('animate__backInRight');

	return (
		<SectionWrapper className={classes.section}>
			<HeadingText subtitle='nasza oferta' title='Dlaczego nasza pizza?' />
			<Card>
				<div
					ref={section}
					className={`${classes.container} ${animationClasses}`}>
					<div className={classes.chef}>
						<span className={classes.icon}>
							<Smiley />
						</span>
						<h3 className={classes.title}>Świetny kucharz</h3>
						<p className={classes.description}>
							Jego kuchnia to nieustający taniec smaków i aromatów, gdzie
							tradycyjne techniki łączą się z nowoczesnym podejściem do
							gotowania. Nasz kucharz potrafi przywrócić życie każdemu
							składnikowi, tworząc dania, które są prawdziwymi dziełami sztuki.
						</p>
					</div>
					<div className={classes.fresh}>
						<span className={classes.icon}>
							<Carrot />
						</span>
						<h3 className={classes.title}>Świeża żywność</h3>
						<p className={classes.description}>
							Świeżość to dla nas więcej niż zasada - to nasza filozofia.
							Chcemy, aby każdy posiłek, który podajemy, był nie tylko smaczny,
							ale także zdrowy i pożywny. Dlatego też dbamy o to, aby nasza
							żywność była jak najbliżej natury, dostarczając Wam to, co
							najlepsze.
						</p>
					</div>
					<div className={classes.delivery}>
						<span className={classes.icon}>
							<Truck />
						</span>
						<h3 className={classes.title}>Szybka dostawa</h3>
						<p className={classes.description}>
							Niezależnie od okazji - czy to rodzinnego obiadu, randki, imprezy
							lub wieczornego przekąszenia - nasza szybka dostawa zawsze jest
							gotowa, aby dostarczyć Ci najlepsze smaki z naszego menu. Wybierz
							naszą usługę dostawy i przekonaj się!
						</p>
					</div>
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Offer;
