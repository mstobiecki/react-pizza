import { useEffect, useRef, useState } from 'react';

const useAnimation = (animateName) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const section = useRef();

	useEffect(() => {
		const animationSection = (entries) => {
			const [entry] = entries;

			if (!entry.isIntersecting) return;

			if (entry.isIntersecting) {
				setIsIntersecting(true);
				observer.unobserve(section.current);
			}
		};

		const dependenciesAnimationSection = {
			root: null,
			threshold: 0.05,
		};

		const observer = new IntersectionObserver(
			animationSection,
			dependenciesAnimationSection
		);

		observer.observe(section.current);
	}, [isIntersecting]);

	const animationClasses = isIntersecting
		? `${'animate__animated'} ${animateName}`
		: '';

	return {
		section,
		animationClasses,
	};
};

export default useAnimation;
