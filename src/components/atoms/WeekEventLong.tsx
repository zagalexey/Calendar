import React from 'react'
import { deleteEvent } from '../../features/days/daysSlice'
import { useAppDispatch } from '../../app/hooks'
import { EventType } from '../../models'

interface IWeekEventShortProps {
	event: EventType
	eventStartTime: number | undefined
	eventDuration: number | undefined
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
	onMouseLeave
}) => {
	const dispatch = useAppDispatch()

	return (
		<div
			className={'absolute w-full flex flex-col event rounded'}
			style={
				{
					'--event-start-hour': eventStartTime,
					'--event-duration': eventDuration,
					backgroundColor: `${event.color}`
				} as React.CSSProperties
			}
			onMouseOver={() => onMouseOver(true)}
			onMouseLeave={() => onMouseLeave(false)}
		>
			{eventHover && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='16px'
					height='16px'
					className={'absolute top-1 right-1 hover:bg-white rounded'}
					onClick={() => dispatch(deleteEvent(event.id))}
				>
					<path
						d='M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z'
						opacity='.35'
					/>
					<path d='M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z' />
					<path d='M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z' />
				</svg>
			)}
			<span className={'text-xs mx-2 text-black'}>{event.startTime + ' - ' + event.endTime}</span>
			<div className={'w-full h-full p-2 bg-orange-500'}>
				<p className={'w-full h-full block text-xs text-black'}>{event.name}</p>
			</div>
		</div>
	)
}

export default WeekEventShort
