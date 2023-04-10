import React from 'react'

import { changeEventModalToggle, deleteEvent, setEventDetailed } from '../../store/days/daysSlice'
import { useAppDispatch } from '../../store/hooks'
import { type EventType } from '../../models'

import '../weekCalendar/styles.css'

import CloseIcon from '../../assets/close_icon.svg'

interface IWeekEventShortProps {
	event: EventType
	eventStartTime: number | null
	onMouseOver: (state: boolean) => void
	onMouseLeave: (state: boolean) => void
	eventHover: boolean
}

const WeekEventShort: React.FC<IWeekEventShortProps> = ({
	event,
	eventStartTime,
	eventHover,
	onMouseOver,
	onMouseLeave,
}) => {
	const dispatch = useAppDispatch()

	function openEventModal() {
		dispatch(setEventDetailed(event))
		dispatch(changeEventModalToggle(true))
	}

	function onDeleteEvent(e: any) {
		e.stopPropagation()
		dispatch(deleteEvent(event.id))
	}

	return (
		<div
			className={'event absolute flex w-full flex-col rounded hover:cursor-pointer'}
			style={
				{
					'--event-start-hour': eventStartTime,
					'--event-duration': 0.5,
					backgroundColor: `${event.color}`,
				} as React.CSSProperties
			}
			onMouseOver={() => {
				onMouseOver(true)
			}}
			onMouseLeave={() => {
				onMouseLeave(false)
			}}
			onClick={openEventModal}
		>
			{eventHover && (
				<img
					src={CloseIcon}
					alt='CloseIcon'
					className={
						'absolute right-1 top-[50%] h-[16px] w-[16px] -translate-y-[50%] rounded hover:cursor-pointer hover:bg-white'
					}
					onClick={(e: any) => {
						onDeleteEvent(e)
					}}
				/>
			)}
			<span className={'mx-2 block w-4/5 truncate text-xs text-black'}>{event.name}</span>
		</div>
	)
}

export default WeekEventShort
