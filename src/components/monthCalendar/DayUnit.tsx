import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { type EventType } from '../../models'
import MonthEvent from '../atoms/MonthEvent'
import { changeEventToggle, setEventDate } from '../../store/days/daysSlice'

interface IDayUnitProps {
	day: string
}

const DayUnit: React.FC<IDayUnitProps> = ({ day }) => {
	const { monthToDisplay, today, events } = useAppSelector((state) => state.days)
	const dispatch = useAppDispatch()
	const [allCurrentEvents, setAllCurrentEvents] = useState<EventType[]>([])
	const [isMaxEvents, setIsMaxEvents] = useState<boolean>(false)
	const [aboveMaxCounter, setAboveMaxCounter] = useState(0)

	useEffect(() => {
		checkForEvents()
	}, [events, day])

	useEffect(() => {
		if (allCurrentEvents.length > 2) {
			setIsMaxEvents(true)
			setAboveMaxCounter(allCurrentEvents.length - 2)
		} else {
			setIsMaxEvents(false)
		}
	}, [allCurrentEvents])

	let dayClassName: string
	let currentDay: string
	if (dayjs(day).format('YY/MM/DD') === dayjs(today).format('YY/MM/DD')) {
		dayClassName = 'text-l text-calendar'
		currentDay = 'ml-1 mt-1 w-6 h-6 text-center bg-red-500 text-calendar rounded-full'
	} else {
		dayClassName = 'text-l'
		currentDay = 'ml-1 mt-1 w-6 h-6 text-center'
	}

	const monthClassName =
		dayjs(day).month() === monthToDisplay
			? 'h-full relative box-border border border-divider text-current-month'
			: 'h-full relative box-border border border-divider text-another-month'

	function checkForEvents() {
		if (events !== null) {
			const currentDayFormat = dayjs(day).format('YYYY-MM-DD')
			let currentDayEvents: EventType[] | null
			currentDayEvents = events.filter((event) => event.date === currentDayFormat)
			setAllCurrentEvents(currentDayEvents)
		}
	}

	function onDayClick() {
		const currentDay = dayjs(day).format('YYYY-MM-DD')
		dispatch(setEventDate(currentDay))
		dispatch(changeEventToggle(true))
	}

	return (
		<div className={monthClassName} onClick={onDayClick}>
			<div className={currentDay}>
				<span className={dayClassName}>{dayjs(day).format('D')}</span>
			</div>
			<div className={'relative h-full overflow-y-scroll pb-5'}>
				{allCurrentEvents.length > 2
					? allCurrentEvents
							?.slice(0, 2)
							.map((event) => <MonthEvent key={event.id} event={event} />)
					: allCurrentEvents.map((event) => <MonthEvent key={event.id} event={event} />)}
				{isMaxEvents ? (
					<span className={'ml-2 text-sm text-another-month'}>{aboveMaxCounter} more...</span>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default DayUnit
