export function createHourArray(): string[] {
	const hoursArray: string[] = []
	const workHours = 18
	for (let i = 0; i < workHours; i++) {
		const newHour = i + ':00'
		hoursArray.push(newHour)
	}
	return hoursArray
}
