export const convertPhone = (phoneNumber: string): string => {
	const cleanedPhoneNumber: string = phoneNumber.replace(/\D/g, '')

	if (cleanedPhoneNumber.match(/^(8|\+7)/)) {
		return '7' + cleanedPhoneNumber.slice(1)
	}

	return cleanedPhoneNumber
}
