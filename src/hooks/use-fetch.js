import { useCallback, useState } from 'react';

const useFetch = () => {
	const [errorRequest, setErrorRequest] = useState('');
	const [loadingRequest, setLoadingRequest] = useState(false);

	const sendRequest = useCallback(async (requestConfig, forwardData) => {
		try {
			setLoadingRequest(true);
			const response = await fetch(requestConfig.url);
			if (!response.ok)
				throw new Error('Pojawił się problem z API, spróbuj odświeżyć stronę.');

			const responseData = await response.json();
			const loadedPizza = [];

			for (const [key, value] of Object.entries(responseData))
				loadedPizza.push({
					id: key,
					name: value.name,
					description: value.description,
					price: value.price,
				});
			forwardData(loadedPizza);
			setLoadingRequest(false);
		} catch (error) {
			setLoadingRequest(false);
			setErrorRequest(error.message);
		}
	}, []);

	return {
		errorRequest,
		loadingRequest,
		sendRequest,
	};
};

export default useFetch;
