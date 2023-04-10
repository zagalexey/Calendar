import React from 'react'

import { type EventType } from '../../models'

import CloseIcon from '../../assets/close_icon.svg'
import { useAppDispatch } from '../../store/hooks'
import { deleteEvent } from '../../store/days/daysSlice'

interface IMonthEventDetailedProps {
	event: EventType
	onClick: (e: any) => void
}

const MonthEventDetailed: React.FC<IMonthEventDetailedProps> = ({ event, onClick }) => {
	const dispatch = useAppDispatch()

	return (
		<div
			className={
				'absolute top-0 z-20 flex h-fit w-full flex-col items-start gap-2 rounded bg-green-500 px-1 py-2 opacity-100'
			}
			style={{ backgroundColor: event.color }}
		>
			<span className={'text-xs text-black'}>{event.startTime + ' - ' + event.endTime}</span>
			<div className={'rounded border border-calendar px-1'}>
				<p className={'block w-full text-sm text-black'}>{event.name}</p>
			</div>
			<img
				className={
					'absolute right-1 top-0.5 h-[16px] w-[16px] rounded hover:cursor-pointer hover:bg-white'
				}
				src={CloseIcon}
				alt='CloseIcon'
				onClick={() => dispatch(deleteEvent(event.id))}
			/>
		</div>
	)
}

export default MonthEventDetailed
