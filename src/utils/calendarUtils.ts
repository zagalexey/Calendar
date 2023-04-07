export function createHourArray(): string[] {
	let hoursArray: string[] = []
	for (let i = 0; i < 18; i++) {
		let newHour = i + ':00'
		hoursArray.push(newHour)
	}
	return hoursArray
}
