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

	const validateStringInput = (value) => {
		const validateStringRegex = /(.|\s)*\S(.|\s)*/;
		return validateStringRegex.test(value);
	};

	return {
		validateEmail,
		validatePhoneNumber,
		validateStringInput,
	};
};

export default useValidation;
