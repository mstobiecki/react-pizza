import classes from './Header.module.css';

import CartButton from '../../Cart/CartButton';

import Logo from '../../UI/Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className={classes.header}>
			<Logo />
			<CartButton />
			<Navigation />
		</header>
	);
};

export default Header;
