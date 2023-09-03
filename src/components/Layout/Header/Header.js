import classes from './Header.module.css';

import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className={classes.header}>
			<Logo />
			<Navigation />
		</header>
	);
};

export default Header;
