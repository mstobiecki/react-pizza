import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';

import classes from './Navigation.module.css';

const Navigation = () => {
	const [navigationToggle, setNavigationToggle] = useState(false);
	const [navigationIsOpen, setNavigationIsOpen] = useState(false);

	const navigationHandler = () => {
		setNavigationToggle((prevState) => !prevState);
	};

	useEffect(() => {
		if (navigationToggle) {
			setNavigationIsOpen(true);
			document.body.classList.add('overflow-blocked');
		} else {
			setNavigationIsOpen(false);
			document.body.classList.remove('overflow-blocked');
		}
	}, [navigationToggle]);

	const navigationClasses = navigationToggle
		? `${classes['navigation-wrapper']} ${classes['navigation-open']}`
		: `${classes['navigation-wrapper']}`;

	const navigationChangeIcon = navigationIsOpen ? (
		<X aria-hidden='true' className={classes['navigation-button']} />
	) : (
		<List aria-hidden='true' className={classes['navigation-button']} />
	);

	return (
		<nav className={classes.navigation}>
			<div className={navigationClasses}>
				<ul className={classes['navigation-list']}>
					<li className={classes['navigation-item']}>
						<a
							href='#history'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							Nasza historia
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a
							href='#menu'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							Menu
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a
							href='#contact'
							onClick={navigationHandler}
							className={classes['navigation-link']}>
							Kontakt
						</a>
					</li>
				</ul>
			</div>
			<button
				aria-label='nawigacja'
				onClick={navigationHandler}
				className={classes['navigation-control']}
				type='button'>
				{navigationChangeIcon}
			</button>
		</nav>
	);
};

export default Navigation;
