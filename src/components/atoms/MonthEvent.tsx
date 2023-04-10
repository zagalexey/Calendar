import React, { useState } from 'react'

import { type EventType } from '../../models'
import { useAppDispatch } from '../../store/hooks'
import { deleteEvent } from '../../store/days/daysSlice'

import MonthEventDetailed from './MonthEventDetailed'

interface IMonthEventProps {
	event: EventType
}

const MonthEvent: React.FC<IMonthEventProps> = ({ event }) => {
	const [eventHover, setEventHover] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	function deleteHandler(e: any) {
		e.stopPropagation()
		dispatch(deleteEvent(event.id))
	}

	return (
		<div
			className={'relative mb-1 w-full rounded'}
			style={{ backgroundColor: `${event.color}` }}
			onMouseOver={() => {
				setEventHover(true)
			}}
			onMouseLeave={() => {
				setEventHover(false)
			}}
			onClick={(e) => {
				e.stopPropagation()
			}}
		>
			{eventHover && <MonthEventDetailed event={event} onClick={deleteHandler} />}
			<span className={'mx-2 w-full truncate text-end text-sm text-black'}>{event.name}</span>
		</div>
	)
}

export default MonthEvent
