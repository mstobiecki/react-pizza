import { useState } from 'react';

const useFetch = async (requestConfig) => {
	const [errorRequest, setErrorRequest] = useState('');
	const [loadingRequest, setLoadingRequest] = useState(false);
	const [dataRequest, setDataRequest] = useState([]);
	try {
		setLoadingRequest(true);
		const response = await fetch(requestConfig.url);
		if (!response.ok)
			throw new Error('Pojawił się problem z API, spróbuj odświeżyć stronę.');

		const responseData = await response.json();

		setDataRequest(responseData);
		setLoadingRequest(false);
	} catch (error) {
		setLoadingRequest(false);
		setErrorRequest(error.message);
	}
};

export default useFetch;
