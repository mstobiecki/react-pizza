import { Fragment } from 'react';
import classes from './Navigation.module.css';
import { List } from '@phosphor-icons/react';

const Navigation = () => {
	return (
		<Fragment>
			<nav className={`${classes.navigation} ${classes['navigation-pen']}`}>
				<ul className={classes['navigation-list']}>
					<li className={classes['navigation-item']}>
						<a href='#' className={classes['navigation-link']}>
							O nas
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a href='#' className={classes['navigation-link']}>
							Menu
						</a>
					</li>
					<li className={classes['navigation-item']}>
						<a href='#' className={classes['navigation-link']}>
							Kontakt
						</a>
					</li>
				</ul>
			</nav>
			<button className={classes['navigation-control']} type='button'>
				<List className={classes['navigation-button']} />
			</button>
		</Fragment>
	);
};

export default Navigation;
