const useValidation = () => {
	const isEmail = (value) => {
		const validateEmailRegex = /^\S+@\S+\.\S+$/;
		return validateEmailRegex.test(value);
	};

	const isPhoneNumber = (value) => {
		const validatePhoneNumberRegex =
			/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
		return validatePhoneNumberRegex.test(value);
	};

	const isPostalCode = (value) => {
		const validatePostalCodeRegex = /^[0-9]{2}-?[0-9]{3}/;
		return validatePostalCodeRegex.test(value);
	};

	const isString = (value) => {
		const validateStringRegex = /(.|\s)*\S(.|\s)*/;
		return validateStringRegex.test(value);
	};

	return {
		isEmail,
		isPhoneNumber,
		isPostalCode,
		isString,
	};
};

export default useValidation;
