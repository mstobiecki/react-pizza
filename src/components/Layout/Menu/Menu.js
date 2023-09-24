import { useEffect, useState } from 'react';
import { SpinnerGap } from '@phosphor-icons/react';
import classes from './Menu.module.css';

import SectionWrapper from '../../UI/SectionWrapper';
import HeadingText from '../../UI/HeadingText';
import Card from '../../UI/Card';
import MenuItem from './MenuItem';
import useFetch from '../../../hooks/use-fetch';

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

	if (loadingRequest)
		requestData = (
			<div className={classes.information}>
				<span className={classes.icon}>
					<SpinnerGap className={classes.icon} />
				</span>
			</div>
		);
	if (errorRequest)
		requestData = (
			<div className={classes.information}>
				<span className={classes.error}>{errorRequest}</span>
			</div>
		);

	return (
		<SectionWrapper>
			<HeadingText subtitle='menu' title='Na co masz chęć?' />
			<Card>
				<div className={classes.container}>{requestData}</div>
			</Card>
		</SectionWrapper>
	);
};

export default Menu;
