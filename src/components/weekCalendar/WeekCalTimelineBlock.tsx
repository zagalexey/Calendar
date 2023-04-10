import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useAppSelector } from '../../store/hooks'
import { type EventType } from '../../models'
import { createHourArray } from '../../utils/calendarUtils'

import WeekEvent from '../atoms/WeekEvent'

import WeekCalTimelineUnit from './WeekCalTimelineUnit'

import './styles.css'

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
		if (events !== null) {
			const currentDayFormat = dayjs(weekDay).format('YYYY-MM-DD')
			const currentDayEvents = events.filter((event) => event.date === currentDayFormat)
			if (currentDayEvents.length > 0) {
				setCurrentEvents(currentDayEvents)
			} else {
				setCurrentEvents(null)
			}
		}
	}

	return (
		<div className={'timeline-block relative h-full w-full'}>
			{hoursArray.map((hour) => (
				<WeekCalTimelineUnit key={hour} day={weekDay} hour={hour} />
			))}
			{currentEvents?.map((event) => (
				<WeekEvent key={event.id} event={event} />
			))}
		</div>
	)
}

export default WeekCalTimelineBlock
