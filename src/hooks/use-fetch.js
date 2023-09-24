import { useCallback, useState } from 'react';

const useFetch = () => {
	const [errorRequest, setErrorRequest] = useState('');
	const [loadingRequest, setLoadingRequest] = useState(false);

	const sendRequest = useCallback(async (requestConfig, forwardData) => {
		try {
			setLoadingRequest(true);
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : 'GET',
				headers: requestConfig.header ? requestConfig.header : {},
				body: requestConfig.body ? requestConfig.body : null,
			});
			if (!response.ok)
				throw new Error('Pojawił się problem z API, spróbuj odświeżyć stronę.');

			const responseData = await response.json();

			forwardData(responseData);
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
