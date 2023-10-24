interface ITimerData {
	value: string
	label: string
}

const pluralize = (value: number, forms: string[]): string => {
	if (value % 10 == 1 && value % 100 != 11) return forms[0]
	else if (
		1 < value % 10 &&
		value % 10 < 5 &&
		(value % 100 < 10 || value % 100 >= 20)
	)
		return forms[1]
	else return forms[2]
}

export const formatTimerUnits = (
	days: number,
	hours: number,
	minutes: number
): ITimerData[] => {
	const daysLabel = pluralize(days, ['день', 'дня', 'дней'])
	const hoursLabel = pluralize(hours, ['час', 'часа', 'часов'])
	const minutesLabel = pluralize(minutes, ['минута', 'минуты', 'минут'])

	const timerData: ITimerData[] = [
		{
			label: daysLabel,
			value: days.toString().padStart(2, '0')
		},
		{
			label: hoursLabel,
			value: hours.toString().padStart(2, '0')
		},
		{
			label: minutesLabel,
			value: minutes.toString().padStart(2, '0')
		}
	]

	return timerData
}
