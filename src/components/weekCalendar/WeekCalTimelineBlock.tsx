import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useAppSelector } from '../../app/hooks'
import { EventType } from '../../models'

import WeekCalTimelineUnit from './WeekCalTimelineUnit'
import WeekEvent from '../atoms/WeekEvent'

import './styles.css'
import { createHourArray } from '../../utils/calendarUtils'

interface IWeekCalTimelineUnitProps {
	weekDay: string
}

const WeekCalTimelineBlock: React.FC<IWeekCalTimelineUnitProps> = ({ weekDay }) => {
	const { events } = useAppSelector((state) => state.days)
	const [currentEvents, setCurrentEvents] = useState<EventType[] | null>(null)

	const hoursArray: string[] = createHourArray()

	useEffect(() => {
		checkForEvents()
	}, [weekDay, events])

	function checkForEvents() {
		if (events) {
			const currentDayFormat = dayjs(weekDay).format('YYYY-MM-DD')
			let currentDayEvents: EventType[] | null
			currentDayEvents = events.filter((event) => event.date === currentDayFormat)
			currentDayEvents && setCurrentEvents(currentDayEvents)
		}
	}

	return (
		<div className={'w-full h-full relative timeline-block'}>
			{hoursArray.map((hour) => (
				<WeekCalTimelineUnit key={hour} day={weekDay} hour={hour} />
			))}
			{currentEvents && currentEvents.map((event) => <WeekEvent key={event.id} event={event} />)}
		</div>
	)
}

export default WeekCalTimelineBlock
