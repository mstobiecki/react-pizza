import classes from './Header.module.css';

import CartButton from '../../Cart/CartButton/CartButton';

import Logo from '../../UI/Logo/Logo';
import Navigation from './Navigation';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<Logo />
			<CartButton onShowModal={props.onShowModal} />
			<Navigation />
		</header>
	);
};

export default Header;
