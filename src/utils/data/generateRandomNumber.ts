export const generateRandomNumber = (minNumber: number, maxNumber: number): number => {
	const randomNumber: number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	return randomNumber;
};