import React, { useEffect, useState } from 'react'

import { EventType } from '../../models'
import dayjs from 'dayjs'

import '../weekCalendar/styles.css'
import { useAppDispatch } from '../../app/hooks'
import { deleteEvent } from '../../features/days/daysSlice'
import WeekEventShort from './WeekEventShort'
import WeekEventLong from './WeekEventLong'

interface IEventProps {
	event: EventType
}

const WeekEvent: React.FC<IEventProps> = ({ event }) => {
	const dispatch = useAppDispatch()
	const [eventStartTime, setEventStartTime] = useState<number>()
	const [eventDuration, setEventDuration] = useState<number>()
	const [eventHover, setEventHover] = useState<boolean>(false)
	const [isShortEvent, setIsShortEvent] = useState<boolean>(false)

	useEffect(() => {
		calculateEventTime()
	}, [event])

	useEffect(() => {
		if (eventDuration! <= 0.5) {
			setIsShortEvent(true)
		}
	}, [eventDuration])

	function calculateEventTime() {
		let startTimeHour = parseInt(event.startTime.split(':')[0])
		let startTimeMinute = parseInt(event.startTime.split(':')[1])
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
