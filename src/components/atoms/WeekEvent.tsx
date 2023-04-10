import React, { useEffect, useState } from 'react'

import dayjs from 'dayjs'

import { type EventType } from '../../models'

import '../weekCalendar/styles.css'

import WeekEventShort from './WeekEventShort'
import WeekEventLong from './WeekEventLong'

interface IEventProps {
	event: EventType
}

const WeekEvent: React.FC<IEventProps> = ({ event }) => {
	const [eventStartTime, setEventStartTime] = useState<number | null>(null)
	const [eventDuration, setEventDuration] = useState<number | null>(null)
	const [eventHover, setEventHover] = useState<boolean>(false)
	const [isShortEvent, setIsShortEvent] = useState<boolean>(false)

	useEffect(() => {
		calculateEventTime()
	}, [event])

	useEffect(() => {
		if (eventDuration !== null) {
			eventDuration < 1 && setIsShortEvent(true)
		}
	}, [eventDuration])

	function calculateEventTime() {
		const startTimeHour = parseInt(event.startTime.split(':')[0])
		const startTimeMinute = parseInt(event.startTime.split(':')[1])
		setEventStartTime(startTimeHour + startTimeMinute / 60 - 6)

		const eventStartDate = dayjs(`${event.date}T${event.startTime}:00`)
		const eventEndDate = dayjs(`${event.date}T${event.endTime}:00`)
		setEventDuration(eventEndDate.diff(eventStartDate, 'minutes') / 60)
	}

	return (
		<>
			{isShortEvent ? (
				<WeekEventShort
					event={event}
					eventStartTime={eventStartTime}
					onMouseOver={setEventHover}
					onMouseLeave={setEventHover}
					eventHover={eventHover}
				/>
			) : (
				<WeekEventLong
					event={event}
					eventStartTime={eventStartTime}
					eventDuration={eventDuration}
					onMouseOver={setEventHover}
					onMouseLeave={setEventHover}
					eventHover={eventHover}
				/>
			)}
		</>
	)
}

export default WeekEvent
