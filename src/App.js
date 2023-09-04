import { Fragment } from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Offer from './components/Layout/Offer/Offer';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Hero />
				<Offer />
			</main>
		</Fragment>
	);
};

export default App;
