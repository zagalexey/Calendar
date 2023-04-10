import { v4 as uuid } from 'uuid'

import { type Color, EVENT_COLORS, type EventType } from '../models'

export const eventColors: Color[] = [
	{ name: 'Green', value: EVENT_COLORS.GREEN },
	{ name: 'Yellow', value: EVENT_COLORS.YELLOW },
	{ name: 'Red', value: EVENT_COLORS.RED },
	{ name: 'Blue', value: EVENT_COLORS.BLUE },
	{ name: 'Purple', value: EVENT_COLORS.PURPLE },
	{ name: 'Pink', value: EVENT_COLORS.PINK },
]

export function createNewEvent(
	eventDate: string,
	name: string,
	startTime: string,
	endTime: string,
	color: string,
): EventType {
	return {
		id: uuid(),
		date: eventDate,
		name,
		startTime,
		endTime,
		color,
	}
}

export function isTimeValid(inputStartTime: number, inputEndTime: number): boolean {
	return inputStartTime < inputEndTime
}

export function checkForEventsOverlap(events: EventType[] | null, newEvent: EventType): boolean {
	let isValid = true
	if (events !== null) {
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
