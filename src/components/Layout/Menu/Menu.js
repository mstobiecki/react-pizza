import { useEffect, useState } from 'react';
import classes from './Menu.module.css';

import SectionWrapper from '../../UI/SectionWrapper/SectionWrapper';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import MenuItem from './MenuItem';
import useFetch from '../../../hooks/useFetch';
import LoadingData from '../../UI/LoadingData/LoadingData';
import ErrorData from '../../UI/ErrorData/ErrorData';

const Menu = () => {
	const [dataFetching, setDataFetching] = useState([]);
	const { errorRequest, loadingRequest, sendRequest } = useFetch();

	useEffect(() => {
		const fetchingMenu = (data) => {
			const loadedPizza = [];

			for (const [key, value] of Object.entries(data))
				loadedPizza.push({
					id: key,
					name: value.name,
					description: value.description,
					price: value.price,
				});

			setDataFetching(loadedPizza);
		};

		sendRequest(
			{
				url: 'https://react-pizza-1d17a-default-rtdb.europe-west1.firebasedatabase.app/menu.json',
			},
			fetchingMenu
		);
	}, [sendRequest]);

	const pizzaItems = dataFetching.map((item) => (
		<MenuItem
			key={item.id}
			id={item.id}
			name={item.name}
			description={item.description}
			price={item.price}
			amount={1}
		/>
	));

	let requestData = pizzaItems;

	if (loadingRequest) requestData = <LoadingData />;

	if (errorRequest) requestData = <ErrorData errorMessage={errorRequest} />;

	return (
		<SectionWrapper id='menu'>
			<HeadingText subtitle='menu' title='Na co masz chęć?' />
			<Card>
				<div className={classes.container}>{requestData}</div>
			</Card>
		</SectionWrapper>
	);
};

export default Menu;
