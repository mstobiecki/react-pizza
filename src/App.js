import { Fragment } from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import History from './components/Layout/History/History';
import Offer from './components/Layout/Offer/Offer';
import Menu from './components/Layout/Menu/Menu';
import Gastronomy from './components/Layout/Gastronomy/Gastronomy';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Hero />
				<History />
				<Offer />
				<Menu />
				<Gastronomy />
			</main>
		</Fragment>
	);
};

export default App;
