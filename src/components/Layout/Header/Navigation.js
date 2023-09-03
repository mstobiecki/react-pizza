import { useState } from 'react';
import classes from './Navigation.module.css';
import { List } from '@phosphor-icons/react';

const Navigation = () => {
	const [navigationOpen, setNavigationOpen] = useState(false);

	const navigationHandler = (event) => {
		event.preventDefault();
		setNavigationOpen((prevState) => !prevState);
	};

	const navigationClasses = navigationOpen
		? `${classes['navigation-wrapper']} ${classes['navigation-open']}`
		: `${classes['navigation-wrapper']}`;

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
				<List className={classes['navigation-button']} />
			</button>
		</nav>
	);
};

export default Navigation;
