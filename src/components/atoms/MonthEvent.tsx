import React, { useState } from 'react'

import { EventType } from '../../models'
import { useAppDispatch } from '../../app/hooks'
import { deleteEvent } from '../../features/days/daysSlice'
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
			className={'w-full relative rounded mb-1'}
			style={{ backgroundColor: `${event.color}` }}
			onMouseOver={() => setEventHover(true)}
			onMouseLeave={() => setEventHover(false)}
			onClick={(e) => e.stopPropagation()}
		>
			{eventHover && <MonthEventDetailed event={event} onClick={deleteHandler} />}
			<span className={'w-full mx-2 text-sm truncate text-end text-black'}>{event.name}</span>
		</div>
	)
}

export default MonthEvent
