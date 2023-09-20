import { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import History from './components/Layout/History/History';
import Offer from './components/Layout/Offer/Offer';
import Menu from './components/Layout/Menu/Menu';
import Gastronomy from './components/Layout/Gastronomy/Gastronomy';
import Contact from './components/Layout/Contact/Contact';
import Cart from './components/Cart/Cart';

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => setShowModal(true);
	const hiddenModalHandler = () => setShowModal(false);

	return (
		<Fragment>
			<Header onShowModal={showModalHandler} />
			<main>
				<Hero />
				<History />
				<Offer />
				<Menu />
				<Gastronomy />
				<Contact />
				{showModal && <Cart onCloseModal={hiddenModalHandler} />}
			</main>
		</Fragment>
	);
};

export default App;
