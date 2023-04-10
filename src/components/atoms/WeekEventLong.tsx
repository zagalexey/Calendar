import React from 'react'

import { changeEventModalToggle, deleteEvent, setEventDetailed } from '../../store/days/daysSlice'
import { useAppDispatch } from '../../store/hooks'
import { type EventType } from '../../models'

import CloseIcon from '../../assets/close_icon.svg'

interface IWeekEventShortProps {
	event: EventType
	eventStartTime: number | null
	eventDuration: number | null
	onMouseOver: (state: boolean) => void
	onMouseLeave: (state: boolean) => void
	eventHover: boolean
}

const WeekEventShort: React.FC<IWeekEventShortProps> = ({
	event,
	eventStartTime,
	eventDuration,
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
					'--event-duration': eventDuration,
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
					className={
						'absolute right-1 top-0.5 h-[16px] w-[16px] rounded hover:cursor-pointer hover:bg-white'
					}
					src={CloseIcon}
					alt='CloseIcon'
					onClick={(e: any) => {
						onDeleteEvent(e)
					}}
				/>
			)}
			<span className={'mx-1 text-xs text-black'}>{event.startTime + ' - ' + event.endTime}</span>
			<div className={'mt-1 w-full pl-1'}>
				<p className={'block h-full w-full truncate text-xs text-black'}>{event.name}</p>
			</div>
		</div>
	)
}

export default WeekEventShort
