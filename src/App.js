import { Fragment } from 'react';
import './App.css';

import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';

const App = () => {
	return (
		<Fragment>
			<Header />
			<Main />
		</Fragment>
	);
};

export default App;
