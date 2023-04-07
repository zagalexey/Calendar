import { EventType } from '../models'
import { v4 as uuid } from 'uuid'

export function createNewEvent(
	eventDate: string,
	name: string,
	startTime: string,
	endTime: string,
	color: string
): EventType {
	return {
		id: uuid(),
		date: eventDate!,
		name: name,
		startTime: startTime,
		endTime: endTime,
		color: color
	}
}

export function checkIfTimeValid(
	inputStartH: string,
	inputStartM: string,
	inputEndH: string,
	inputEndM: string
): boolean {
	const startTime = parseInt(inputStartH) + parseInt(inputStartM) / 60
	const endTime = parseInt(inputEndH) + parseInt(inputEndM) / 60

	return startTime < endTime
}

export function checkForEventsOverlap(events: EventType[] | null, newEvent: EventType): boolean {
	let isValid = true
	if (events) {
		const allDayEvents: EventType[] = events.filter((event) => event.date === newEvent.date)
		allDayEvents.forEach((event) => {
			const newEventStart = convertTimeIntoFloat(newEvent.startTime)
			const newEventEnd = convertTimeIntoFloat(newEvent.endTime)
			const eventStart = convertTimeIntoFloat(event.startTime)
			const eventEnd = convertTimeIntoFloat(event.endTime)
			if (newEventStart >= eventStart && newEventStart < eventEnd) {
				isValid = false
			} else if (newEventEnd > eventStart && newEventEnd < eventEnd) {
				isValid = false
			}
		})
	}
	return isValid
}

function convertTimeIntoFloat(time: string): number {
	const hours = parseInt(time.split(':')[0])
	const minutes = parseInt(time.split(':')[1])
	return hours + minutes / 60
}
