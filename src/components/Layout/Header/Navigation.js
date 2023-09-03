import { useState, useEffect } from 'react';
import classes from './Navigation.module.css';
import { List, X } from '@phosphor-icons/react';

const Navigation = () => {
	const [navigationToggle, setNavigationToggle] = useState(false);
	const [navigationIsOpen, setNavigationIsOpen] = useState(false);

	const navigationHandler = () => {
		setNavigationToggle((prevState) => !prevState);
	};

	useEffect(() => {
		if (navigationToggle) setNavigationIsOpen(true);
		else setNavigationIsOpen(false);
	}, [navigationToggle]);

	const navigationClasses = navigationToggle
		? `${classes['navigation-wrapper']} ${classes['navigation-open']}`
		: `${classes['navigation-wrapper']}`;

	const navigationChangeIcon = navigationIsOpen ? (
		<X className={classes['navigation-button']} />
	) : (
		<List className={classes['navigation-button']} />
	);

	return (
		<nav>
			<div className={navigationClasses}>
				<ul className={classes['navigation-list']}>
					<li className={classes['navigation-item']}>
						<a
							href='#'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							O nas
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a
							href='#'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							Menu
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a
							href='#'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							Kontakt
						</a>
					</li>
				</ul>
			</div>
			<button
				onClick={navigationHandler}
				className={classes['navigation-control']}
				type='button'>
				{navigationChangeIcon}
			</button>
		</nav>
	);
};

export default Navigation;
