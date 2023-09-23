const useValidation = () => {
	const validateEmail = (value) => {
		const validateEmailRegex = /^\S+@\S+\.\S+$/;
		return validateEmailRegex.test(value);
	};

	const validatePhoneNumber = (value) => {
		const validatePhoneNumberRegex =
			/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
		return validatePhoneNumberRegex.test(value);
	};

	const validatePostalCode = (value) => {
		const validatePostalCodeRegex = /^[0-9]{2}-?[0-9]{3}/;
		return validatePostalCodeRegex.test(value);
	};

	const validateString = (value) => {
		const validateStringRegex = /(.|\s)*\S(.|\s)*/;
		return validateStringRegex.test(value);
	};

	return {
		validateEmail,
		validatePhoneNumber,
		validatePostalCode,
		validateString,
	};
};

export default useValidation;
